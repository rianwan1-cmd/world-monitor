/**
 * 主应用类
 * 协调所有模块和组件的运行
 */

import { CONFIG, STOCK_DATABASE } from './config.js';
import { stateManager } from './state.js';
import { MarketService } from './services/dataService.js';
import { DOM, EventManager, FORMAT } from './utils/helpers.js';
import {
  StocksModule,
  WorldModule,
  TechModule,
  FinanceModule,
  CommodityModule
} from './tabs/index.js';

export class WorldMonitorApp {
  constructor(rootSelector = '#app') {
    this.rootEl = document.querySelector(rootSelector);
    this.modules = new Map();
    this.eventManager = new EventManager();
    
    // 初始化服务
    this.marketService = new MarketService(CONFIG.API.BAOSTOCK);
    this.marketService.initializeStockDatabase(STOCK_DATABASE);
    // 将内置股票数据库暴露到全局，供旧版页面或回退逻辑使用
    try { window.stocksDatabase = STOCK_DATABASE; } catch(e) { /* non-browser or sandboxed env */ }
  }
  
  /**
   * 应用启动
   */
  async start() {
    console.log('🚀 World Monitor App Starting...');
    
    try {
      // 1. 初始化模块
      this.initModules();
      
      // 2. 渲染UI
      this.render();
      
      // 3. 绑定事件
      this.bindEvents();
      
      // 4. 加载初始数据
      await this.loadInitialData();
      
      console.log('✅ World Monitor App Started Successfully');
    } catch (error) {
      console.error('❌ Error starting app:', error);
      this.showError(error.message);
    }
  }
  
  /**
   * 初始化所有模块
   */
  initModules() {
    this.modules.set('world', new WorldModule());
    this.modules.set('tech', new TechModule());
    this.modules.set('finance', new FinanceModule());
    this.modules.set('commodity', new CommodityModule());
    this.modules.set('stocks', new StocksModule(this.marketService));
  }
  
  /**
   * 渲染应用界面
   */
  render() {
    this.rootEl.innerHTML = `
      <div class="app-container">
        <!-- Header -->
        <header class="header">
          <div class="logo">
            <div class="logo-icon">🌍</div>
            <span>World Monitor</span>
          </div>
          <nav class="nav-tabs">
            ${CONFIG.TABS.map(tab => `
              <div class="nav-tab ${tab.id === 'world' ? 'active' : ''}" 
                   data-tab="${tab.id}">
                ${tab.icon} ${tab.label}
              </div>
            `).join('')}
          </nav>
          <div class="header-right">
            <div class="status-indicator">
              <div class="status-dot"></div>
              <span>实时更新</span>
            </div>
          </div>
        </header>
        
        <!-- Left Panel -->
        <aside class="left-panel" id="leftPanel">
          <!-- 由模块动态填充 -->
        </aside>
        
        <!-- Main Content -->
        <div class="main-container">
          <div class="map-container" id="mapContainer">
            <!-- 3D地球仪容器 -->
          </div>
          <!-- 各个标签页容器 -->
          ${CONFIG.TABS.map(tab => `
            <div class="tab-content ${tab.id === 'world' ? 'active' : ''}" 
                 data-tab="${tab.id}" 
                 id="tab-${tab.id}">
            </div>
          `).join('')}
        </div>
        
        <!-- Right Panel -->
        <aside class="right-panel" id="rightPanel">
          <div id="otherPanel">
            <!-- AI分析、风险指标等 -->
          </div>
          <div id="stocksPanel" style="display: none;">
            <!-- 股票分析面板 -->
          </div>
        </aside>
      </div>
    `;
  }
  
  /**
   * 绑定事件处理器
   */
  bindEvents() {
    // 标签页切换
    const navTabs = DOM.queryAll('.nav-tab');
    navTabs.forEach(tab => {
      this.eventManager.on(tab, 'click', () => {
        const tabId = tab.dataset.tab;
        this.switchTab(tabId);
      });
    });
    
    // 状态变化监听
    stateManager.subscribe('state:changed', (state) => {
      this.onStateChanged(state);
    });

    // 全局委托：点击股票名称时，尝试展示右侧详情（兼容旧版 inline selectMarketRow）
    document.addEventListener('click', (ev) => {
      try {
        const nameEl = ev.target.closest && ev.target.closest('.stock-name');
        if (!nameEl) return;

        const codeOrDisplay = nameEl.getAttribute('data-code') || nameEl.textContent.trim();

        // 优先使用全局旧实现（如果存在）
        if (typeof window.selectMarketRow === 'function') {
          // 尝试在渲染数组中查找索引
          const rows = window.__renderedRows || [];
          const idx = rows.findIndex(r => (r.displayCode && r.displayCode === codeOrDisplay) || (r.code && r.code === codeOrDisplay) || (r.name && r.name === nameEl.textContent.trim()));
          if (idx >= 0) {
            window.selectMarketRow(idx);
            return;
          }
        }

        // 回退到 MarketService 获取详情并手动渲染到 #stockDetail（简化版）
        const code = String(codeOrDisplay).replace(/\.HK$/i, '').trim();
        const detail = this.marketService.getStockDetail(code) || window.stocksDatabase && window.stocksDatabase[code];
        const el = document.getElementById('stockDetail');
        if (!el) return;

        if (detail) {
          el.innerHTML = `
            <div style="padding:12px;">
              <div style="font-size:18px;font-weight:800;">${detail.name || code}</div>
              <div style="color:var(--text-muted); margin-top:6px;">${code}</div>
              <div style="margin-top:12px;">价格：${detail.price ?? '-'} &nbsp; 涨跌：${detail.change ?? '-'}</div>
              <div style="margin-top:8px; color:var(--text-secondary);">来源：快速回退展示</div>
            </div>
          `;
        } else {
          el.innerHTML = `<div style="padding:12px;color:var(--text-muted);">未能获取到该股票详情：${codeOrDisplay}</div>`;
        }
      } catch (e) {
        console.warn('click handler error', e);
      }
    });
  }
  
  /**
   * 切换标签页
   */
  async switchTab(tabId) {
    const oldTab = stateManager.getState('activeTab');
    
    // 停用旧标签页
    const oldModule = this.modules.get(oldTab);
    if (oldModule) oldModule.deactivate();
    
    // 激活新标签页
    const newModule = this.modules.get(tabId);
    if (newModule) await newModule.activate();
    
    // 更新UI
    document.querySelectorAll('.nav-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
    
    document.querySelectorAll('.tab-content').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
    
    // 更新状态
    stateManager.setState('activeTab', tabId);
    
    // 特殊处理stocks标签页
    this.updateRightPanelForTab(tabId);
  }
  
  /**
   * 更新右侧面板显示
   */
  updateRightPanelForTab(tabId) {
    const otherPanel = DOM.query('#otherPanel');
    const stocksPanel = DOM.query('#stocksPanel');
    const appContainer = DOM.query('.app-container');
    
    if (tabId === 'stocks') {
      DOM.hide(otherPanel);
      DOM.show(stocksPanel);
      appContainer.classList.add('stocks-mode');
    } else {
      DOM.show(otherPanel);
      DOM.hide(stocksPanel);
      appContainer.classList.remove('stocks-mode');
    }
  }
  
  /**
   * 加载初始数据
   */
  async loadInitialData() {
    try {
      stateManager.setState('isLoading', true);
      
      // 预加载市场数据
      const marketData = await this.marketService.fetchMarketData('CN');
      stateManager.setState('marketData', marketData);
      
      stateManager.setState('isLoading', false);
    } catch (error) {
      console.error('Error loading initial data:', error);
      stateManager.setState('error', error.message);
    }
  }
  
  /**
   * 状态变化处理
   */
  onStateChanged(state) {
    // 可以在这里处理全局状态变化的影响
  }
  
  /**
   * 显示错误信息
   */
  showError(message) {
    stateManager.setState('error', message);
    const errorEl = DOM.createElement('div', {
      class: 'error-toast',
      style: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px',
        background: '#ef4444',
        color: 'white',
        borderRadius: '8px',
        zIndex: 9999,
      }
    }, message);
    
    document.body.appendChild(errorEl);
    setTimeout(() => errorEl.remove(), 3000);
  }
  
  /**
   * 应用清理
   */
  destroy() {
    this.eventManager.clear();
    this.modules.forEach(module => module.destroy());
  }
}

// 应用启动
export async function initApp() {
  const app = new WorldMonitorApp('#app');
  await app.start();
  return app;
}
