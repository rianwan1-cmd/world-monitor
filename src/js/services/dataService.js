/**
 * 数据服务基类
 * 处理所有的数据获取和缓存逻辑
 */

export class DataService {
  constructor() {
    this.cache = new Map();
    this.cacheExpiry = new Map();
    this.CACHE_TTL = 5 * 60 * 1000; // 5分钟缓存
  }
  
  /**
   * 缓存数据
   */
  setCache(key, value) {
    this.cache.set(key, value);
    this.cacheExpiry.set(key, Date.now() + this.CACHE_TTL);
  }
  
  /**
   * 获取缓存数据
   */
  getCache(key) {
    if (!this.cache.has(key)) return null;
    
    const expiry = this.cacheExpiry.get(key);
    if (expiry && Date.now() > expiry) {
      this.cache.delete(key);
      this.cacheExpiry.delete(key);
      return null;
    }
    
    return this.cache.get(key);
  }
  
  /**
   * 清除缓存
   */
  clearCache(key) {
    if (key) {
      this.cache.delete(key);
      this.cacheExpiry.delete(key);
    } else {
      this.cache.clear();
      this.cacheExpiry.clear();
    }
  }
  
  /**
   * 使用缓存获取数据
   */
  async fetchWithCache(key, fetchFn) {
    const cached = this.getCache(key);
    if (cached) return cached;
    
    try {
      const data = await fetchFn();
      this.setCache(key, data);
      return data;
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      throw error;
    }
  }
  
  /**
   * HTTP请求
   */
  async fetch(url, options = {}) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  }
}

/**
 * 市场数据服务
 * 处理股票和市场数据
 */
export class MarketService extends DataService {
  constructor(apiEndpoint) {
    super();
    this.apiEndpoint = apiEndpoint;
    this.stockDatabase = new Map();
  }
  
  /**
   * 初始化本地股票数据库
   */
  initializeStockDatabase(stockData) {
    Object.entries(stockData).forEach(([code, data]) => {
      this.stockDatabase.set(code.toUpperCase(), data);
    });
  }
  
  /**
   * 搜索股票
   */
  searchStock(query) {
    // 优先使用 API 搜索
    return this.searchStockFromAPI(query).catch(() => {
      // API 失败时使用本地搜索
      return this.searchStockLocal(query);
    });
  }

  /**
   * 从 API 搜索股票
   */
  async searchStockFromAPI(query) {
    const response = await this.fetch(`${this.apiEndpoint}/search?q=${encodeURIComponent(query)}`);
    return response.map(item => ({
      code: item.code.replace(/^(sh|sz)\./, ''),
      name: item.code_name,
      market: item.code.startsWith('sh.') ? 'SH' : 'SZ'
    }));
  }

  /**
   * 本地搜索股票
   */
  searchStockLocal(query) {
    const upperQuery = query.toUpperCase();
    const results = [];

    for (const [code, stock] of this.stockDatabase.entries()) {
      // 按代码匹配
      if (code.includes(upperQuery)) {
        results.push({ code, ...stock });
        continue;
      }

      // 按中文名称匹配
      if (stock.name.includes(query)) {
        results.push({ code, ...stock });
        continue;
      }

      // 按别名匹配
      if (stock.alias && stock.alias.some(a =>
        a.toLowerCase().includes(query.toLowerCase())
      )) {
        results.push({ code, ...stock });
      }
    }

    return results;
  }
  
  /**
   * 获取股票详情
   */
  getStockDetail(code) {
    return this.stockDatabase.get(code.toUpperCase());
  }
  
  /**
   * 从 Baostock API 获取市场数据
   */
  async fetchMarketData(market = 'CN') {
    return this.fetchWithCache(`market_${market}`, async () => {
      try {
        const response = await this.fetch(`${this.apiEndpoint}/market?market=${market}`);
        return response;
      } catch (error) {
        console.warn('Failed to load market data from Baostock API, using local data');
        return this.getLocalMarketData(market);
      }
    });
  }
  
  /**
   * 获取本地市场数据（降级方案）
   */
  getLocalMarketData(market) {
    const stocks = [];
    for (const [code, data] of this.stockDatabase.entries()) {
      if ((market === 'CN' && !code.startsWith('0')) ||
          (market === 'HK' && code.startsWith('0'))) {
        stocks.push({
          code,
          name: data.name,
          price: data.price,
          change: data.change,
          volume: data.volume,
        });
      }
    }
    return stocks;
  }
}

/**
 * 新闻数据服务
 */
export class NewsService extends DataService {
  constructor() {
    super();
    this.newsDatabase = [];
  }
  
  /**
   * 初始化新闻数据库
   */
  initializeNewsDatabase(newsData) {
    this.newsDatabase = newsData || [];
  }
  
  /**
   * 按分类获取新闻
   */
  getNewsByCategory(category) {
    return this.newsDatabase.filter(news => news.category === category);
  }
  
  /**
   * 搜索新闻
   */
  searchNews(query) {
    const lower = query.toLowerCase();
    return this.newsDatabase.filter(news =>
      news.title.toLowerCase().includes(lower) ||
      news.content.toLowerCase().includes(lower)
    );
  }
}
