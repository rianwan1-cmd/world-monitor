# Baostock 数据服务

## 简介

使用 Baostock 提供 A股实时数据查询服务。

## 安装

```bash
# 创建虚拟环境（已完成）
python3 -m venv venv

# 激活虚拟环境
source venv/bin/activate

# 安装依赖
pip install -r backend/requirements.txt
```

## 启动服务

```bash
# 方式1：使用启动脚本
./backend/start.sh

# 方式2：手动启动
source venv/bin/activate
cd backend
python api.py
```

服务将在 `http://localhost:5000` 启动。

## API 接口

### 搜索股票
```
GET /api/search?q=平安
```

### 获取股票详情
```
GET /api/stock/600000
```

### 获取市场数据
```
GET /api/market?market=CN
```

### 健康检查
```
GET /api/health
```

## 前端配置

前端已配置使用 Baostock API：
- 配置文件：`src/js/config.js`
- 数据服务：`src/js/services/dataService.js`

## 注意事项

1. Baostock 仅支持 A股数据，不支持港股
2. 数据有延迟，非实时行情
3. 首次查询可能较慢，后续会使用缓存
