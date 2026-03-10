# World Monitor - 全球情报仪表盘

AI 驱动的全球情报仪表盘，实时监控全球财经、地缘政治、市场数据。

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

## 功能特性

- 🌍 **3D 地球** - 使用 globe.gl 实现的交互式地球
- 📰 **全球新闻** - 实时新闻流聚合
- 📊 **市场行情** - 加密货币、美股、大宗商品
- 🤖 **AI 摘要** - AI 驱动的情报分析
- 🔥 **热点地区** - 全球风险指数监控

## 快速开始

### 安装

```bash
# 克隆项目
git clone https://github.com/your-username/world-monitor.git
cd world-monitor

# 启动本地服务器
python3 -m http.server 8081
```

### 访问

打开浏览器访问：http://localhost:8081

## 项目结构

```
world-monitor/
└── index.html    # 主页面
```

## 技术栈

- HTML5 + CSS3
- JavaScript (Vanilla)
- [globe.gl](https://globe.gl/) - 3D 地球可视化
- [d3.js](https://d3js.org/) - 数据可视化

## 配置

### 修改新闻源

在 `index.html` 中搜索 `newsItems` 数组，添加自定义新闻源。

### 修改热点数据

在 `pointsData` 中添加/修改热点坐标。

## 许可证

MIT License

## 作者

Created with OpenClaw 🤖
