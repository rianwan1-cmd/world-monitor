#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Flask API 服务
提供 RESTful API 接口
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
from baostock_service import BaostockService

app = Flask(__name__)
CORS(app)  # 允许跨域请求

# 全局服务实例
_service = None


def get_service():
    """获取服务实例（懒加载）"""
    global _service
    if _service is None:
        _service = BaostockService()
    return _service


@app.route('/api/search', methods=['GET'])
def search_stock():
    """搜索股票"""
    query = request.args.get('q', '')

    # 处理 URL 编码问题
    if query:
        try:
            # 尝试修复可能的编码问题
            query = query.encode('latin1').decode('utf-8')
        except (UnicodeDecodeError, UnicodeEncodeError):
            pass  # 如果已经是正确编码，保持原样

    print(f'收到搜索请求: query="{query}"')

    if not query:
        return jsonify({'error': '缺少查询参数'}), 400

    try:
        service = get_service()
        results = service.search_stock(query)
        print(f'搜索 "{query}" 找到 {len(results)} 条结果')
        if len(results) > 0:
            print(f'第一条结果: {results[0]}')
        return jsonify(results)
    except Exception as e:
        import traceback
        print(f'搜索错误: {e}')
        print(traceback.format_exc())
        return jsonify({'error': str(e)}), 500


@app.route('/api/stock/<code>', methods=['GET'])
def get_stock_detail(code):
    """获取股票详情"""
    # 转换代码格式
    if not code.startswith(('sh.', 'sz.')):
        if code.startswith('6'):
            code = f'sh.{code}'
        else:
            code = f'sz.{code}'

    service = get_service()
    basic_info = service.get_stock_basic_info(code)
    quote = service.get_realtime_quote(code)

    if not basic_info and not quote:
        return jsonify({'error': '股票不存在'}), 404

    return jsonify({
        'basic': basic_info,
        'quote': quote
    })


@app.route('/api/market', methods=['GET'])
def get_market_data():
    """获取市场数据"""
    market = request.args.get('market', 'CN')
    service = get_service()
    data = service.get_market_data(market)
    return jsonify(data)


@app.route('/api/health', methods=['GET'])
def health_check():
    """健康检查"""
    return jsonify({'status': 'ok'})


@app.teardown_appcontext
def shutdown_session(exception=None):
    """应用关闭时登出"""
    global _service
    if _service:
        _service.logout()


if __name__ == '__main__':
    try:
        print('启动 Baostock API 服务...')
        print('访问 http://localhost:5000')
        app.run(host='0.0.0.0', port=5000, debug=True)
    finally:
        if _service:
            _service.logout()
