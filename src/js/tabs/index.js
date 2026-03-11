/**
 * 标签页模块基类
 * 所有标签页模块都继承这个基类
 */

import { stateManager } from '../state.js';

export class TabModule {
  constructor(tabId, tabName) {
    this.tabId = tabId;
    this.tabName = tabName;
    this.container = null;
    this.isActive = false;
  }
  
  /**
   * 初始化模块
   */
  async init() {
    // 由子类实现
  }
  
  /**
   * 激活标签页
   */
  async activate() {
    this.isActive = true;
    if (this.container) {
      this.container.style.display = 'block';
    }
    await this.render();
  }
  
  /**
   * 停用标签页
   */
  deactivate() {
    this.isActive = false;
    if (this.container) {
      this.container.style.display = 'none';
    }
  }
  
  /**
   * 渲染内容
   */
  async render() {
    // 由子类实现
  }
  
  /**
   * 清理资源
   */
  destroy() {
    // 由子类实现
  }
}

/**
 * 股票分析模块
 */
export class StocksModule extends TabModule {
  constructor(marketService) {
    super('stocks', 'A股/港股分析');
    this.marketService = marketService;
    this.currentMarket = 'CN';
    this.currentStock = null;
  }
  
  async init() {
    // 初始化UI
    this.setupUI();
  }
  
  setupUI() {
    // 由主应用负责创建UI容器
  }
  
  /**
   * 搜索股票
   */
  searchStock(query) {
    return this.marketService.searchStock(query);
  }
  
  /**
   * 选择股票
   */
  selectStock(code) {
    this.currentStock = this.marketService.getStockDetail(code);
    return this.currentStock;
  }
  
  /**
   * 刷新市场数据
   */
  async refresh() {
    // 刷新市场数据
    const data = await this.marketService.fetchMarketData(this.currentMarket);
    stateManager.setState('marketData', data);
  }
  
  async render() {
    // 渲染模块内容
  }
}

/**
 * 全球分析模块
 */
export class WorldModule extends TabModule {
  constructor() {
    super('world', '全球');
  }
  
  async init() {
    // 初始化全球模块
  }
  
  async render() {
    // 渲染全球内容
  }
}

/**
 * 科技分析模块
 */
export class TechModule extends TabModule {
  constructor() {
    super('tech', '科技');
  }
  
  async init() {
    // 初始化科技模块
  }
  
  async render() {
    // 渲染科技内容
  }
}

/**
 * 金融分析模块
 */
export class FinanceModule extends TabModule {
  constructor() {
    super('finance', '金融');
  }
  
  async init() {
    // 初始化金融模块
  }
  
  async render() {
    // 渲染金融内容
  }
}

/**
 * 大宗商品模块
 */
export class CommodityModule extends TabModule {
  constructor() {
    super('commodity', '大宗商品');
  }
  
  async init() {
    // 初始化大宗商品模块
  }
  
  async render() {
    // 渲染大宗商品内容
  }
}
