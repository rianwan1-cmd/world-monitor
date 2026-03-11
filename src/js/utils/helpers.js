/**
 * DOM操作工具函数
 */

export const DOM = {
  /**
   * 创建元素并设置属性
   */
  createElement(tag, attrs = {}, html = '') {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === 'class') {
        el.className = value;
      } else if (key === 'style') {
        Object.assign(el.style, value);
      } else if (key.startsWith('on')) {
        const eventName = key.slice(2).toLowerCase();
        el.addEventListener(eventName, value);
      } else {
        el.setAttribute(key, value);
      }
    });
    if (html) el.innerHTML = html;
    return el;
  },
  
  /**
   * 查询单个元素
   */
  query(selector) {
    return document.querySelector(selector);
  },
  
  /**
   * 查询多个元素
   */
  queryAll(selector) {
    return document.querySelectorAll(selector);
  },
  
  /**
   * 获取元素内容
   */
  getText(el) {
    return el?.textContent || '';
  },
  
  /**
   * 设置元素内容
   */
  setText(el, text) {
    if (el) el.textContent = text;
  },
  
  /**
   * 获取元素值（输入框等）
   */
  getValue(el) {
    return el?.value || '';
  },
  
  /**
   * 设置元素值
   */
  setValue(el, value) {
    if (el) el.value = value;
  },
  
  /**
   * 添加类名
   */
  addClass(el, className) {
    if (el) el.classList.add(className);
  },
  
  /**
   * 移除类名
   */
  removeClass(el, className) {
    if (el) el.classList.remove(className);
  },
  
  /**
   * 切换类名
   */
  toggleClass(el, className) {
    if (el) el.classList.toggle(className);
  },
  
  /**
   * 显示元素
   */
  show(el) {
    if (el) el.style.display = '';
  },
  
  /**
   * 隐藏元素
   */
  hide(el) {
    if (el) el.style.display = 'none';
  },
  
  /**
   * 追加元素
   */
  append(parent, child) {
    if (parent && child) {
      if (typeof child === 'string') {
        parent.insertAdjacentHTML('beforeend', child);
      } else {
        parent.appendChild(child);
      }
    }
  },
  
  /**
   * 清空元素内容
   */
  empty(el) {
    if (el) el.innerHTML = '';
  },
  
  /**
   * 移除元素
   */
  remove(el) {
    if (el) el.remove();
  },
};

/**
 * 事件管理器
 * 集中管理事件绑定，便于清理
 */
export class EventManager {
  constructor() {
    this.listeners = [];
  }
  
  /**
   * 绑定事件
   */
  on(element, event, callback) {
    element.addEventListener(event, callback);
    this.listeners.push({ element, event, callback });
    return () => this.off(element, event, callback);
  }
  
  /**
   * 解除事件绑定
   */
  off(element, event, callback) {
    element.removeEventListener(event, callback);
    const index = this.listeners.findIndex(
      l => l.element === element && l.event === event && l.callback === callback
    );
    if (index > -1) this.listeners.splice(index, 1);
  }
  
  /**
   * 清理所有事件
   */
  clear() {
    this.listeners.forEach(({ element, event, callback }) => {
      element.removeEventListener(event, callback);
    });
    this.listeners = [];
  }
}

/**
 * 格式化工具
 */
export const FORMAT = {
  /**
   * 格式化数字为货币
   */
  currency(value) {
    if (!value) return '¥0.00';
    return '¥' + parseFloat(value).toFixed(2);
  },
  
  /**
   * 格式化百分比
   */
  percent(value) {
    if (!value) return '0%';
    return (parseFloat(value)).toFixed(2) + '%';
  },
  
  /**
   * 格式化大数字（K, M, B, T）
   */
  largeNumber(value) {
    if (!value) return '0';
    const num = parseFloat(value);
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  },
  
  /**
   * 格式化日期
   */
  date(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  },
  
  /**
   * 格式化时间差（X天前）
   */
  relativeTime(date) {
    const now = new Date();
    const target = new Date(date);
    const diff = now - target;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    if (days < 30) return `${Math.floor(days / 7)}周前`;
    if (days < 365) return `${Math.floor(days / 30)}月前`;
    return `${Math.floor(days / 365)}年前`;
  },
};

/**
 * 请求队列 - 避免请求过多
 */
export class RequestQueue {
  constructor(maxConcurrent = 3) {
    this.maxConcurrent = maxConcurrent;
    this.queue = [];
    this.running = 0;
  }
  
  async add(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.running >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }
    
    this.running++;
    const { fn, resolve, reject } = this.queue.shift();
    
    try {
      const result = await fn();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.process();
    }
  }
}
