# World Monitor 本地部署

## 启动

```bash
cd /Users/lzl/vs/world-monitor
python3 -m http.server 8092
```

浏览器打开：
- http://localhost:8092

## 说明
- 纯静态单页（index.html），无需 npm。
- A股/港股分析页会从公开接口拉取行情数据。
