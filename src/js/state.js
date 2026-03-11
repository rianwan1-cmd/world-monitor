/**
 * 全局状态管理
 * 采用观察者模式，所有状态变化都会发出事件
 */

class StateManager {
  constructor() {
    this.state = {
      activeTab: 'world',
      marketData: null,
      selectedStock: null,
      searchQuery: '',
      isLoading: false,
      error: null,
    };
    
    this.listeners = new Map();
  }
  
  /**
   * 订阅状态变化事件
   */
  subscribe(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(callback);
    
    // 返回取消订阅函数
    return () => {
      const callbacks = this.listeners.get(eventName);
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    };
  }
  
  /**
   * 发出状态变化事件
   */
  notify(eventName, newValue, oldValue) {
    if (this.listeners.has(eventName)) {
      this.listeners.get(eventName).forEach(callback => {
        callback(newValue, oldValue);
      });
    }
  }
  
  /**
   * 更新状态
   */
  setState(key, value) {
    const oldValue = this.state[key];
    if (oldValue === value) return; // 避免不必要的更新
    
    this.state[key] = value;
    this.notify(`state:${key}`, value, oldValue);
    this.notify('state:changed', this.state, null);
  }
  
  /**
   * 获取状态
   */
  getState(key) {
    return key ? this.state[key] : this.state;
  }
  
  /**
   * 批量更新状态
   */
  updateState(updates) {
    Object.entries(updates).forEach(([key, value]) => {
      this.setState(key, value);
    });
  }
  
  /**
   * 重置状态
   */
  reset() {
    this.state = {
      activeTab: 'world',
      marketData: null,
      selectedStock: null,
      searchQuery: '',
      isLoading: false,
      error: null,
    };
    this.notify('state:reset', null, null);
  }
}

// 单例导出
export const stateManager = new StateManager();
