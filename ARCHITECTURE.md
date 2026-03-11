# World Monitor - 架构文档

## 📋 项目概述

World Monitor 是一个全球情报仪表盘应用，经过全面的模块化重构。新架构优先考虑可维护性、可扩展性和代码清晰度。

## 🏗️ 项目结构

```
world-monitor/
├── index-new.html              # 新的HTML入口（轻量级）
├── src/
│   ├── js/
│   │   ├── app.js              # 应用程序主类
│   │   ├── config.js           # 配置文件（API、常量）
│   │   ├── state.js            # 全局状态管理
│   │   ├── tabs/
│   │   │   └── index.js        # 所有标签页模块的定义
│   │   ├── components/
│   │   │   ├── header.js       # 标题栏组件
│   │   │   ├── leftPanel.js    # 左侧面板组件
│   │   │   └── rightPanel.js   # 右侧面板组件
│   │   ├── services/
│   │   │   ├── dataService.js  # 数据服务基类及具体实现
│   │   │   ├── marketService.js # 市场数据服务
│   │   │   └── newsService.js  # 新闻数据服务
│   │   └── utils/
│   │       └── helpers.js      # DOM、事件、格式化工具
│   ├── css/
│   │   ├── variables.css       # CSS变量和主题
│   │   ├── layout.css          # 应用布局
│   │   └── components.css      # UI组件样式
│   └── data/
│       ├── stocks.json
│       └── events.json
└── [原始文件]
    └── index.html              # 保留用于比较（未来可删除）
```

## 🎯 架构设计原则

### 1. **单一职责原则 (SRP)**
- 每个模块只负责一个功能
- 例：`DataService` 只处理数据缓存，`MarketService` 继承它并添加市场数据逻辑

### 2. **开闭原则 (OCP)**
- 对扩展开放，对修改关闭
- 新增标签页只需创建继承 `TabModule` 的类
- 新增数据源只需创建继承 `DataService` 的服务

### 3. **依赖反转原则 (DIP)**
- 使用注入而非全局变量
- 例：`StocksModule` 通过构造函数接收 `marketService`

### 4. **关注点分离**
- **UI层**：组件和样式
- **业务逻辑层**：服务和模块
- **数据层**：状态管理和缓存
- **配置层**：常量和设置

## 🔑 核心概念

### StateManager（状态管理）
```javascript
// 订阅状态变化
stateManager.subscribe('state:activeTab', (newTab, oldTab) => {
  console.log(`Tab changed from ${oldTab} to ${newTab}`);
});

// 更新状态（自动触发订阅回调）
stateManager.setState('activeTab', 'stocks');

// 批量更新
stateManager.updateState({
  activeTab: 'stocks',
  isLoading: true,
  error: null
});
```

### DataService（数据服务）
```javascript
// 继承DataService创建专用服务
class MyService extends DataService {
  async fetchData(id) {
    return this.fetchWithCache(`data_${id}`, async () => {
      // 如果缓存中没有，执行此函数
      const response = await this.fetch(`/api/data/${id}`);
      return response;
    });
  }
}
```

### TabModule（标签页模块）
```javascript
// 创建新的标签页
class MyTab extends TabModule {
  constructor() {
    super('my-tab', 'My Tab Name');
  }
  
  async init() {
    // 初始化
  }
  
  async activate() {
    await super.activate();
    // 激活时的逻辑
  }
  
  async render() {
    // 渲染标签页内容
  }
}
```

### EventManager（事件管理）
```javascript
const eventMgr = new EventManager();

// 绑定事件（返回解除函数）
const unsubscribe = eventMgr.on(element, 'click', handler);

// 清理所有事件
eventMgr.clear();
```

## 📦 导入和导出规范

### 使用 ES6 模块
```javascript
// 导入
import { CONFIG } from './config.js';
import { stateManager } from './state.js';
import { DOM, FORMAT } from './utils/helpers.js';

// 导出单个
export const myFunction = () => {};

// 导出多个
export { Class1, Class2 };
```

## 🎨 开发规范

### 命名规范
- **变量/函数**：camelCase
- **类/构造函数**：PascalCase
- **常量**：UPPER_SNAKE_CASE
- **CSS类**：kebab-case

### 文件命名
- **模块文件**：保持小写，使用连字符（如：`data-service.js`）
- **类文件**：与类名匹配（如：`EventManager.js` 包含 EventManager 类）

### 代码风格
- 使用 const 优先，然后 let，避免 var
- 箭头函数优先于 function 关键字
- 使用 async/await 而不是 .then()
- 添加 JSDoc 注释

```javascript
/**
 * 搜索股票
 * @param {String} query - 查询字符串（代码、中文名或别名）
 * @returns {Array} 匹配的股票数组
 */
searchStock(query) {
  // 实现
}
```

## 🚀 扩展指南

### 添加新的标签页

1. 在 `src/js/tabs/index.js` 中创建新的模块类：
```javascript
export class MyModule extends TabModule {
  constructor() {
    super('my-tab', '我的标签');
  }
  
  async render() {
    // 实现页面内容
  }
}
```

2. 在 `src/js/config.js` 中的 TABS 数组添加配置：
```javascript
TABS: [
  // ...
  { id: 'my-tab', label: '我的标签', icon: '🎯' },
]
```

3. 在 `src/js/app.js` 的 `initModules()` 中注册：
```javascript
this.modules.set('my-tab', new MyModule());
```

### 添加新的数据服务

1. 创建继承 `DataService` 的新服务：
```javascript
export class MyDataService extends DataService {
  async fetchMyData(id) {
    return this.fetchWithCache(`mydata_${id}`, async () => {
      return await this.fetch(`/api/mydata/${id}`);
    });
  }
}
```

2. 在应用中注册并注入到需要的模块

### 配置 API 端点

在 `src/js/config.js` 中修改 API 配置：
```javascript
API: {
  MY_API: 'https://api.example.com/endpoint',
}
```

## 🧪 测试注意事项

- 各个模块可独立测试
- 使用依赖注入便于 Mock 依赖
- 状态变化可通过订阅监听验证

## 📈 性能优化

### 缓存策略
- DataService 的 CACHE_TTL 设为 5 分钟
- 自动清理过期缓存

### 滚动性能
- 虚拟滚动（当列表超大时）
- 防抖搜索输入

### 网络优化
- RequestQueue 限制并发请求数
- API 调用使用缓存降级

## 🔄 迁移指南（从旧版本）

新架构已准备就绪，当前状态：

✅ 核心框架完成
✅ 服务层完成
✅ UI 工具完成
⏳ UI 组件（部分完成，仍需从旧代码迁移）
⏳ 标签页模块（仍需从旧代码迁移）

### 迁移步骤

1. **备份旧代码**：当前 `index.html` 已备份
2. **迁移标签页逻辑**：从旧 JS 代码抽取到各个模块
3. **迁移样式**：CSS 已模块化，按需引入
4. **测试功能**：逐一验证各标签页
5. **清理**：删除旧代码

## 📚 相关资源

- [MDN - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Observer Pattern](https://refactoring.guru/design-patterns/observer)
- [Service Layer Pattern](https://martinfowler.com/eaaCatalog/serviceLayer.html)

## 📝 更改日志

### 重构版本 (2026-03-11)
- 🎯 将单文件应用转换为模块化架构
- 📦 分离关注点：UI、业务逻辑、数据层
- 🔧 实现状态管理和事件管理系统
- 📄 简化 HTML，所有逻辑移至 JavaScript 模块
- 🎨 模块化 CSS，支持主题和响应式设计
- 📖 完整的架构文档和扩展指南

---

**最后更新**：2026-03-11
**维护者**：Architecture Team
