/**
 * 应用配置文件
 * 集中管理所有的常量和配置项
 */

export const CONFIG = {
  // API端点
  API: {
    EAST_MONEY: 'https://api.eastmoney.com/ec/querystock/getstockinfos',
    MARKET_API: 'https://push2his.eastmoney.com/nmispv13/qstock',
  },
  
  // 应用设置
  APP: {
    HEADER_HEIGHT: 64,
    LEFT_PANEL_WIDTH: 380,
    RIGHT_PANEL_WIDTH: 520,
    REFRESH_INTERVAL: 30000, // 30秒刷新一次
  },
  
  // 标签页配置
  TABS: [
    { id: 'world', label: '全球', icon: '🌍' },
    { id: 'tech', label: '科技', icon: '💻' },
    { id: 'finance', label: '金融', icon: '💰' },
    { id: 'commodity', label: '大宗商品', icon: '⚙️' },
    { id: 'stocks', label: 'A股/港股分析', icon: '📈' },
  ],
  
  // 股票市场配置
  MARKETS: {
    CN: { label: 'A股（沪深京）', code: 'CN', prefix: '' },
    HK: { label: '港股（HKEX）', code: 'HK', prefix: '0' },
  },
  
  // 颜色主题
  THEME: {
    primary: '#0a0e17',
    secondary: '#111827',
    card: 'rgba(17, 24, 39, 0.95)',
    border: 'rgba(59, 130, 246, 0.2)',
    blue: '#3b82f6',
    cyan: '#06b6d4',
    green: '#10b981',
    red: '#ef4444',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
  },
};

export const STOCK_DATABASE = {
  'AAPL': {
    name: '苹果',
    alias: ['apple', '苹果公司'],
    price: 185.75,
    change: 2.45,
    dayHigh: 186.50,
    dayLow: 184.20,
    volume: '52.3M',
    marketCap: '$2.9T',
    events: [
      { date: '2026-03-08', days: 3, description: '发布新款iPhone 16s', impact: '正面', sentiment: 'positive', category: '产品' },
      { date: '2026-03-01', days: 10, description: 'Q1财报超预期', impact: '正面', sentiment: 'positive', category: '财报' },
      { date: '2026-02-20', days: 20, description: '美欧贸易谈判激烈', impact: '负面', sentiment: 'negative', category: '政策' },
    ]
  },
  'TSLA': {
    name: '特斯拉',
    alias: ['tesla', '特斯拉公司'],
    price: 238.45,
    change: -1.23,
    dayHigh: 245.00,
    dayLow: 235.60,
    volume: '35.8M',
    marketCap: '$750B',
    events: [
      { date: '2026-03-07', days: 4, description: '宣布在日本建厂', impact: '正面', sentiment: 'positive', category: '产品' },
      { date: '2026-02-28', days: 11, description: '新能源汽车销量下滑', impact: '负面', sentiment: 'negative', category: '业绩' },
    ]
  },
  // ... 其他股票
};

/**
 * 事件时间线模板
 */
export const EVENT_TIMELINE_TEMPLATE = {
  categories: ['产品', '财报', '政策', '竞争', '业绩', '合作'],
  sentiments: ['positive', 'neutral', 'negative'],
};
