#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Baostock 数据服务
提供股票数据查询接口
"""

import baostock as bs
import pandas as pd
from datetime import datetime, timedelta
from typing import Dict, List, Optional
import json


class BaostockService:
    """Baostock 数据服务类"""

    def __init__(self):
        self.lg = None
        self.is_logged_in = False

    def ensure_login(self):
        """确保已登录"""
        if not self.is_logged_in:
            self.login()

    def login(self):
        """登录 Baostock 系统"""
        self.lg = bs.login()
        if self.lg.error_code != '0':
            raise Exception(f'登录失败: {self.lg.error_msg}')
        self.is_logged_in = True
        print('登录成功')

    def logout(self):
        """登出 Baostock 系统"""
        if self.is_logged_in:
            bs.logout()
            self.is_logged_in = False
            print('登出成功')

    def get_stock_basic_info(self, code: str) -> Optional[Dict]:
        """
        获取股票基本信息
        :param code: 股票代码，如 'sh.600000' 或 'sz.000001'
        """
        self.ensure_login()
        rs = bs.query_stock_basic(code=code)
        if rs.error_code != '0':
            print(f'查询失败: {rs.error_msg}')
            return None

        data_list = []
        while (rs.error_code == '0') & rs.next():
            data_list.append(rs.get_row_data())

        if not data_list:
            return None

        result = pd.DataFrame(data_list, columns=rs.fields)
        return result.to_dict('records')[0] if len(result) > 0 else None

    def get_realtime_quote(self, code: str) -> Optional[Dict]:
        """
        获取实时行情数据（最近一个交易日）
        :param code: 股票代码
        """
        self.ensure_login()

        # 查询最近30天的数据，取最后一条
        end_date = datetime.now().strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

        rs = bs.query_history_k_data_plus(
            code,
            "date,code,open,high,low,close,preclose,volume,amount,turn,pctChg",
            start_date=start_date,
            end_date=end_date,
            frequency="d",
            adjustflag="3"
        )

        if rs.error_code != '0':
            print(f'查询失败: {rs.error_msg}')
            return None

        data_list = []
        while (rs.error_code == '0') & rs.next():
            data_list.append(rs.get_row_data())

        if not data_list:
            print(f'股票 {code} 没有行情数据')
            return None

        # 返回最后一条数据（最近的交易日）
        result = pd.DataFrame(data_list, columns=rs.fields)
        latest = result.iloc[-1].to_dict()
        print(f'股票 {code} 最新数据日期: {latest.get("date")}')
        return latest

    def get_stock_list(self, market: str = 'sh') -> List[Dict]:
        """
        获取股票列表
        :param market: 市场代码 'sh'(上海) 或 'sz'(深圳)
        """
        self.ensure_login()
        rs = bs.query_stock_basic()
        if rs.error_code != '0':
            print(f'查询失败: {rs.error_msg}')
            return []

        data_list = []
        while (rs.error_code == '0') & rs.next():
            data_list.append(rs.get_row_data())

        result = pd.DataFrame(data_list, columns=rs.fields)

        # 过滤市场
        if market:
            result = result[result['code'].str.startswith(market)]

        return result.to_dict('records')

    def search_stock(self, query: str) -> List[Dict]:
        """
        搜索股票
        :param query: 搜索关键词（代码或名称）
        """
        self.ensure_login()
        rs = bs.query_stock_basic()
        if rs.error_code != '0':
            print(f'查询失败: {rs.error_msg}')
            return []

        data_list = []
        while (rs.error_code == '0') & rs.next():
            data_list.append(rs.get_row_data())

        if not data_list:
            return []

        result = pd.DataFrame(data_list, columns=rs.fields)

        # 搜索匹配 - 使用 case=False 进行不区分大小写的搜索
        query_upper = query.upper()
        try:
            filtered = result[
                result['code'].str.contains(query_upper, case=False, na=False) |
                result['code_name'].str.contains(query, case=False, na=False, regex=False)
            ]
        except Exception as e:
            print(f'搜索过滤错误: {e}')
            return []

        return filtered.to_dict('records')

    def get_market_data(self, market: str = 'CN') -> List[Dict]:
        """
        获取市场数据
        :param market: 'CN' (A股) 或 'HK' (港股)
        """
        if market == 'HK':
            # Baostock 不支持港股，返回空列表
            return []

        # 获取 A股数据
        stock_list = self.get_stock_list()
        market_data = []

        for stock in stock_list[:50]:  # 限制数量避免请求过多
            code = stock['code']
            quote = self.get_realtime_quote(code)

            if quote:
                market_data.append({
                    'code': code,
                    'name': stock.get('code_name', ''),
                    'price': float(quote.get('close', 0)),
                    'change': float(quote.get('pctChg', 0)),
                    'volume': quote.get('volume', '0'),
                })

        return market_data


def main():
    """测试函数"""
    service = BaostockService()

    try:
        # 测试搜索
        print("\n=== 搜索测试 ===")
        results = service.search_stock('平安')
        print(json.dumps(results[:3], ensure_ascii=False, indent=2))

        # 测试获取实时行情
        print("\n=== 实时行情测试 ===")
        quote = service.get_realtime_quote('sh.600000')
        print(json.dumps(quote, ensure_ascii=False, indent=2))

    finally:
        service.logout()


if __name__ == '__main__':
    main()
