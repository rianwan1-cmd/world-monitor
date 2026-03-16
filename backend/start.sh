#!/bin/bash
# Baostock API 服务启动脚本

cd "$(dirname "$0")"

# 激活虚拟环境
source ../venv/bin/activate

# 启动服务
echo "启动 Baostock API 服务..."
python api.py
