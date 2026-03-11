# 快速开始指南

## 项目重构完成 ✅

World Monitor 已从单文件应用成功重构为企业级模块化架构。

## 文件说明

| 文件 | 用途 | 状态 |
|------|------|------|
| `index-new.html` | 新的轻量级HTML入口 | ✅ 就绪 |
| `index.html` | 原始单文件应用 | 📦 保留用于对比 |
| `src/js/app.js` | 应用主类和协调器 | ✅ 完成 |
| `src/js/config.js` | 配置、常量、数据库 | ✅ 完成 |
| `src/js/state.js` | 全局状态管理（观察者模式） | ✅ 完成 |
| `src/js/tabs/index.js` | 所有标签页模块的定义 | ✅ 基类完成 |
| `src/js/services/dataService.js` | 数据服务基类及具体实现 | ✅ 完成 |
| `src/js/utils/helpers.js` | DOM、事件、格式化工具 | ✅ 完成 |
| `src/css/variables.css` | CSS变量和主题 | ✅ 完成 |
| `src/css/layout.css` | 应用布局和响应式 | ✅ 完成 |
| `src/css/components.css` | UI组件样式 | ✅ 完成 |
| `ARCHITECTURE.md` | 详细的架构文档 | ✅ 完成 |

## 架构特点

### 🏢 分层设计
```
┌─────────────────────────────────────┐
│         UI Layer (Components)       │
├─────────────────────────────────────┤
│     Business Logic Layer (Tabs)     │
├─────────────────────────────────────┤
│      Service Layer (Data Services)  │
├─────────────────────────────────────┤
│      State Management (Observer)    │
├─────────────────────────────────────┤
│      Configuration & Constants      │
└─────────────────────────────────────┘
```

### 🔑 核心组件

| 组件 | 说明 | 特性 |
|------|------|------|
| **StateManager** | 全局状态管理 | 观察者模式、自动通知订阅者 |
| **DataService** | 数据获取基类 | 自动缓存、降级方案 |
| **MarketService** | 市场数据服务 | 股票搜索、市场数据 |
| **TabModule** | 标签页基类 | 激活/停用、渲染逻辑 |
| **EventManager** | 事件管理 | 集中管理、批量清理 |
| **DOM** | DOM工具函数库 | 创建、查询、修改元素 |
| **FORMAT** | 格式化工具 | 货币、百分比、日期等 |

## 开发流程

### 1. 查看现有代码
```bash
# 查看架构文档
cat ARCHITECTURE.md

# 查看配置
cat src/js/config.js

# 查看应用主类
cat src/js/app.js
```

### 2. 扩展应用

#### 添加新标签页
```javascript
// 1. 在 src/js/tabs/index.js 中添加
export class MyTab extends TabModule {
  constructor() {
    super('my-tab', '我的标签');
  }
  async render() { /* 实现 */ }
}

// 2. 在 src/js/config.js TABS 数组添加配置
{ id: 'my-tab', label: '我的标签', icon: '🎯' }

// 3. 在 src/js/app.js initModules() 中注册
this.modules.set('my-tab', new MyTab());
```

#### 添加新数据服务
```javascript
// 在 src/js/services/dataService.js 中
export class MyService extends DataService {
  async fetch(id) {
    return this.fetchWithCache(`my_${id}`, async () => {
      // 实现数据获取逻辑
    });
  }
}
```

### 3. 运行和测试
```bash
# 启动本地开发服务器
python3 -m http.server 8000

# 访问新版本
open http://localhost:8000/index-new.html

# 对比原始版本
open http://localhost:8000/index.html
```

## 关键改进

### ✅ 代码质量
- **清晰的关注点分离**：UI、逻辑、数据层独立
- **SOLID原则**：单一职责、开闭原则、依赖反转
- **设计模式**：观察者、工厂、策略、适配器

### ✅ 可维护性
- **模块化结构**：每个模块独立，易于维护
- **JSDoc注释**：清晰的文档
- **统一的命名规范**：易于理解

### ✅ 扩展性
- **插件式架构**：新增功能无需修改核心
- **继承机制**：重用基类逻辑
- **依赖注入**：灵活的依赖管理

### ✅ 性能
- **自动缓存**：5分钟缓存周期
- **请求队列**：限制并发数（最多3个）
- **事件去重**：避免重复订阅

### ✅ 测试友好
- **独立模块**：支持单元测试
- **Mock友好**：依赖注入易于Mock
- **事件驱动**：状态变化可验证

## 迁移状态

### ✅ 已完成
- [x] 核心框架（App、State、Services）
- [x] 工具库（DOM、Event、Format）
- [x] CSS系统（变量、布局、组件）
- [x] TabModule基类
- [x] 配置系统

### ⏳ 进行中
- [ ] 标签页模块的具体实现（从旧代码迁移）
- [ ] UI组件（从旧代码迁移）

### 📋 代办
- [ ] 单元测试
- [ ] E2E测试
- [ ] 性能优化
- [ ] 文档完善

## 技术栈

- **前端框架**：原生 JavaScript (ES6+)
- **模块化**：ES6 Modules
- **状态管理**：自定义 StateManager (观察者模式)
- **CSS**：原生 CSS3 + CSS 变量
- **外部库**：Globe.gl、D3.js
- **版本控制**：Git

## 与原始版本的对比

| 方面 | 原始版本 | 重构后 |
|------|---------|--------|
| 文件数 | 1个 | 11+个 |
| 代码行数 | ~2500 | 分散，总量≈2800 |
| 可读性 | 中等 | 优秀 |
| 可维护性 | 困难 | 容易 |
| 可扩展性 | 困难 | 容易 |
| 测试性 | 差 | 优秀 |
| 学习曲线 | 陡峭 | 平缓 |

## 推荐阅读

1. **ARCHITECTURE.md** - 详细的架构设计文档
2. **src/js/app.js** - 应用主类，理解来龙去脉
3. **src/js/state.js** - 状态管理的实现
4. **src/js/services/dataService.js** - 服务层的设计

## 常见问题

### Q: 如何在模块间通讯？
A: 使用 StateManager：
```javascript
// 发送消息
stateManager.setState('activeTab', 'stocks');

// 监听消息
stateManager.subscribe('state:activeTab', (newTab) => {
  console.log('Tab changed to:', newTab);
});
```

### Q: 如何扩展新功能？
A: 创建继承相应基类的新模块，遵循约定。详见 ARCHITECTURE.md 的"扩展指南"。

### Q: 旧代码在哪里？
A: 保留在 `index.html` 中，用于参考和对比。

### Q: 为什么分成这么多文件？
A: 提高可维护性和可读性。每个文件专注一个功能，易于定位问题和添加新功能。

## 下一步

1. 📖 阅读 ARCHITECTURE.md 理解整个架构
2. 🔍 查看各个模块的实现
3. 🧪 编写单元测试
4. 🎨 从老代码迁移具体的UI组件
5. 🚀 逐步完善各个标签页的功能

---

**项目状态**：🏗️ 架构重构完成，等待功能迁移
**最后更新**：2026-03-11
**主要改进**：从单文件混合代码转换为清晰、可维护的模块化架构
