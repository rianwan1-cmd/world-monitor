
        // 股票数据库 - 包含别名便于搜索
        const stocksDatabase = {
            'AAPL': {
                name: '苹果公司',
                alias: ['apple', '苹果'],
                price: 189.45,
                change: 2.35,
                dayHigh: 191.20,
                dayLow: 187.80,
                volume: '52.3M',
                marketCap: '2.95T',
                events: [
                    { date: '2026-03-11', days: '今天', description: '发布新iPhone 16系列', impact: '+1.5%', sentiment: 'positive', category: '产品发布' },
                    { date: '2026-03-10', days: '1天前', description: '第一财季财报超预期', impact: '+2.1%', sentiment: 'positive', category: '财报' },
                    { date: '2026-03-08', days: '3天前', description: '下调中国区销售预期', impact: '-0.8%', sentiment: 'negative', category: '业绩预警' },
                    { date: '2026-03-05', days: '6天前', description: '与华为达成供应链协议', impact: '+0.65%', sentiment: 'positive', category: '合作' },
                    { date: '2026-02-28', days: '11天前', description: 'Apple Vision Pro销量突破100万', impact: '+1.2%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-20', days: '19天前', description: '库克出席中国开发者大会', impact: '+0.45%', sentiment: 'positive', category: '活动' },
                    { date: '2026-02-15', days: '24天前', description: '宣布30亿美元回购计划', impact: '+0.89%', sentiment: 'positive', category: '财务' },
                ]
            },
            'TSLA': {
                name: '特斯拉',
                alias: ['tesla', '特斯拉'],
                price: 242.80,
                change: 4.15,
                dayHigh: 247.50,
                dayLow: 240.10,
                volume: '78.9M',
                marketCap: '780B',
                events: [
                    { date: '2026-03-11', days: '今天', description: '马斯克宣布新型电池技术突破', impact: '+3.2%', sentiment: 'positive', category: '技术' },
                    { date: '2026-03-09', days: '2天前', description: '德国柏林工厂产能创新高', impact: '+1.8%', sentiment: 'positive', category: '工厂' },
                    { date: '2026-03-06', days: '5天前', description: '美国降低电动车补贴', impact: '-1.5%', sentiment: 'negative', category: '政策' },
                    { date: '2026-03-01', days: '10天前', description: '印度工厂获批扩产', impact: '+2.1%', sentiment: 'positive', category: '扩张' },
                    { date: '2026-02-25', days: '14天前', description: '发布Model 3升级版', impact: '+1.5%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-18', days: '21天前', description: '与花旗达成融资协议', impact: '+0.92%', sentiment: 'positive', category: '融资' },
                    { date: '2026-02-10', days: '29天前', description: '推动全球自动驾驶监管合作', impact: '+0.56%', sentiment: 'positive', category: '政策' },
                ]
            },
            'MSFT': {
                name: '微软',
                alias: ['microsoft', '微软'],
                price: 428.35,
                change: 1.85,
                dayHigh: 431.20,
                dayLow: 425.80,
                volume: '21.5M',
                marketCap: '3.20T',
                events: [
                    { date: '2026-03-11', days: '今天', description: 'Azure AI服务提价并推出新功能', impact: '+0.9%', sentiment: 'positive', category: '服务' },
                    { date: '2026-03-08', days: '3天前', description: 'Copilot订阅用户突破5000万', impact: '+1.2%', sentiment: 'positive', category: '业绩' },
                    { date: '2026-03-05', days: '6天前', description: '美国反垄断审查升级', impact: '-0.6%', sentiment: 'negative', category: '法律' },
                    { date: '2026-02-28', days: '11天前', description: 'Office 365用户增长超预期', impact: '+0.78%', sentiment: 'positive', category: '业绩' },
                    { date: '2026-02-20', days: '19天前', description: '与OpenAI扩大战略合作', impact: '+1.5%', sentiment: 'positive', category: '合作' },
                    { date: '2026-02-15', days: '24天前', description: 'GitHub Copilot Enterprise发布', impact: '+0.85%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-08', days: '31天前', description: '宣布30亿美元云基础设施投资', impact: '+1.1%', sentiment: 'positive', category: '投资' },
                ]
            },
            'NVDA': {
                name: '英伟达',
                alias: ['nvidia', '英伟达'],
                price: 135.62,
                change: -2.45,
                dayHigh: 139.80,
                dayLow: 134.50,
                volume: '45.2M',
                marketCap: '3.35T',
                events: [
                    { date: '2026-03-11', days: '今天', description: '芯片产能预期下滑通知', impact: '-2.0%', sentiment: 'negative', category: '业绩预警' },
                    { date: '2026-03-08', days: '3天前', description: '新款H200芯片发布延期', impact: '-0.8%', sentiment: 'negative', category: '产品' },
                    { date: '2026-03-05', days: '6天前', description: '中国客户大单取消', impact: '-1.2%', sentiment: 'negative', category: '业务' },
                    { date: '2026-02-28', days: '11天前', description: '日本企业大单订购100万颗芯片', impact: '+1.5%', sentiment: 'positive', category: '订单' },
                    { date: '2026-02-20', days: '19天前', description: '成功推出L40S数据中心芯片', impact: '+2.3%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-15', days: '24天前', description: '与台积电签署长期供应协议', impact: '+0.95%', sentiment: 'positive', category: '供应链' },
                    { date: '2026-02-08', days: '31天前', description: '宣布50亿美元回购计划', impact: '+1.2%', sentiment: 'positive', category: '财务' },
                ]
            },
            'GOOGL': {
                name: '谷歌',
                alias: ['google', '谷歌'],
                price: 156.78,
                change: 0.92,
                dayHigh: 158.20,
                dayLow: 155.40,
                volume: '28.6M',
                marketCap: '1.95T',
                events: [
                    { date: '2026-03-11', days: '今天', description: 'Gemini 3.0发布，性能提升60%', impact: '+1.2%', sentiment: 'positive', category: '产品' },
                    { date: '2026-03-09', days: '2天前', description: '宣布1000亿美元AI投资计划', impact: '+1.8%', sentiment: 'positive', category: '投资' },
                    { date: '2026-03-07', days: '4天前', description: '欧盟数据隐私罚款新增10亿欧元', impact: '-0.4%', sentiment: 'negative', category: '法律' },
                    { date: '2026-03-01', days: '10天前', description: '搜索引擎市场份额升至92%', impact: '+0.85%', sentiment: 'positive', category: '市场' },
                    { date: '2026-02-25', days: '14天前', description: 'YouTube Shorts用户突破25亿', impact: '+1.1%', sentiment: 'positive', category: '业绩' },
                    { date: '2026-02-18', days: '21天前', description: '推出新型AI芯片TPU v7', impact: '+0.9%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-10', days: '29天前', description: '与欧盟就数据政策达成协议', impact: '+0.65%', sentiment: 'positive', category: '政策' },
                ]
            },
            '0700.HK': {
                name: '腾讯控股',
                alias: ['tencent', '00700', '腾讯'],
                price: 388.50,
                change: 3.21,
                dayHigh: 392.10,
                dayLow: 386.20,
                volume: '120.5M',
                marketCap: '3.88T',
                events: [
                    { date: '2026-03-11', days: '今天', description: '游戏业务审查通过，3款新游上线', impact: '+2.1%', sentiment: 'positive', category: '业务' },
                    { date: '2026-03-09', days: '2天前', description: '视频号日活用户突破5亿', impact: '+1.5%', sentiment: 'positive', category: '数据' },
                    { date: '2026-03-06', days: '5天前', description: '中国游戏行业监管政策调整', impact: '+1.2%', sentiment: 'positive', category: '政策' },
                    { date: '2026-02-28', days: '11天前', description: '云服务收入同比增长145%', impact: '+1.8%', sentiment: 'positive', category: '业绩' },
                    { date: '2026-02-20', days: '19天前', description: '推出企业级AI助手"腾讯元宝"', impact: '+0.95%', sentiment: 'positive', category: '产品' },
                    { date: '2026-02-15', days: '24天前', description: '与阿里建立AI合作伙伴关系', impact: '+0.85%', sentiment: 'positive', category: '合作' },
                    { date: '2026-02-08', days: '31天前', description: '音乐业务IPO融资超预期', impact: '+2.2%', sentiment: 'positive', category: '融资' },
                ]
            },
            '601398.SS': {
                name: '工商银行',
                alias: ['icbc', '工商銀行', '工商银行'],
                price: 5.42,
                change: 1.56,
                dayHigh: 5.52,
                dayLow: 5.38,
                volume: '3.2B',
                marketCap: '550B',
                events: [
                    { date: '2026-03-11', days: '今天', description: '央行注入500亿流动性，银行收益率上升', impact: '+1.0%', sentiment: 'positive', category: '政策' },
                    { date: '2026-03-09', days: '2天前', description: '2025年净利润同比增长12%', impact: '+0.8%', sentiment: 'positive', category: '财报' },
                    { date: '2026-03-06', days: '5天前', description: '国务院支持大型银行投入实体经济', impact: '+0.8%', sentiment: 'positive', category: '政策' },
                    { date: '2026-02-28', days: '11天前', description: '不良贷款率创新低至0.87%', impact: '+0.92%', sentiment: 'positive', category: '数据' },
                    { date: '2026-02-20', days: '19天前', description: '数字人民币结算量突破10万亿', impact: '+0.76%', sentiment: 'positive', category: '业务' },
                    { date: '2026-02-15', days: '24天前', description: '国际评级机构上调评级至AAA', impact: '+0.65%', sentiment: 'positive', category: '评级' },
                    { date: '2026-02-08', days: '31天前', description: '宣布分红预案，现金回报率9.5%', impact: '+1.2%', sentiment: 'positive', category: '分红' },
                ]
            }
        };
        

        // ===== 全市场(A股/港股)数据与分析 =====
        const DATA_PROVIDER = {
            CN: {
                name: 'A股（沪深京）',
                url: (pn, pz) => `https://push2.eastmoney.com/api/qt/clist/get?pn=${pn}&pz=${pz}&po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:1+t:2,m:0+t:6&fields=f12,f14,f2,f3,f4,f5,f6,f7,f8,f9,f10,f13`,
                displayCode: (code) => `${code}`
            },
            HK: {
                name: '港股（HKEX）',
                url: (pn, pz) => `https://push2.eastmoney.com/api/qt/clist/get?pn=${pn}&pz=${pz}&po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:116+t:3&fields=f12,f14,f2,f3,f4,f5,f6,f7,f8,f9,f10,f13`,
                displayCode: (code) => `${String(code).padStart(5,'0')}.HK`
            }
        };

        // 模拟数据（当 API 不可用时使用）
        function generateMockData(market) {
            const cnStocks = [
                { code: '600519', name: '贵州茅台', price: 1413.64, chgPct: 1.55 },
                { code: '000858', name: '五粮液', price: 138.20, chgPct: 2.15 },
                { code: '601318', name: '中国平安', price: 42.80, chgPct: 0.85 },
                { code: '600036', name: '招商银行', price: 36.90, chgPct: 1.12 },
                { code: '000333', name: '美的集团', price: 58.30, chgPct: 0.95 },
                { code: '601012', name: '隆基绿能', price: 16.45, chgPct: 2.85 },
                { code: '300750', name: '宁德时代', price: 175.60, chgPct: 1.65 },
                { code: '002594', name: '比亚迪', price: 235.80, chgPct: 2.35 },
                { code: '600900', name: '长江电力', price: 24.60, chgPct: 0.75 },
                { code: '601888', name: '中国中免', price: 72.90, chgPct: 1.25 }
            ];

            const hkStocks = [
                { code: '00700', name: '腾讯控股', price: 368.20, chgPct: 1.45 },
                { code: '09988', name: '阿里巴巴-SW', price: 82.50, chgPct: -0.95 },
                { code: '00941', name: '中国移动', price: 68.30, chgPct: 0.75 },
                { code: '01299', name: '友邦保险', price: 58.90, chgPct: 1.20 },
                { code: '02318', name: '中国平安', price: 38.50, chgPct: -0.55 },
                { code: '01810', name: '小米集团-W', price: 18.60, chgPct: 2.35 },
                { code: '00388', name: '香港交易所', price: 285.40, chgPct: 0.85 },
                { code: '01024', name: '快手-W', price: 45.20, chgPct: -1.65 },
                { code: '09618', name: '京东集团-SW', price: 128.30, chgPct: 1.55 },
                { code: '02020', name: '安踏体育', price: 68.70, chgPct: 0.95 }
            ];

            const stocks = market === 'CN' ? cnStocks : hkStocks;
            return stocks.map(s => {
                const amount = Math.random() * 5e9 + 1e8;
                const turnover = Math.random() * 8 + 0.5;
                const amplitude = Math.abs(s.chgPct) * (1 + Math.random());
                const pe = Math.random() * 50 + 10;
                const pb = Math.random() * 5 + 0.5;

                const row = {
                    market,
                    code: s.code,
                    name: s.name,
                    price: s.price,
                    chgPct: s.chgPct,
                    chg: (s.price * s.chgPct / 100),
                    vol: amount / s.price,
                    amount,
                    amplitude,
                    turnover,
                    pe,
                    pb,
                    displayCode: DATA_PROVIDER[market].displayCode(s.code)
                };
                row.score = calcScore(row);
                row.signal = signalFromScore(row.score, row.chgPct);
                return row;
            });
        }

        let _marketRows = [];
        Object.defineProperty(window, 'marketRows', {
            get: function() { return _marketRows; },
            set: function(value) {
                console.log(`marketRows 被修改: 从 ${_marketRows.length} 条 -> ${value?.length || 0} 条`, new Error().stack.split('\n')[2]);
                _marketRows = value;
            }
        });
        let marketLoadedAt = null;
        window.__renderedRows = [];

        function fmtAmount(v) {
            const n = Number(v);
            if (!isFinite(n)) return '-';
            if (n >= 1e8) return (n / 1e8).toFixed(2) + '亿';
            if (n >= 1e4) return (n / 1e4).toFixed(2) + '万';
            return String(Math.round(n));
        }

        function clamp01(x) { return Math.max(0, Math.min(1, x)); }

        function calcScore(r) {
            const chg = Number(r.chgPct) || 0;
            const amt = Number(r.amount) || 0;
            const turn = Number(r.turnover) || 0;
            const amp = Math.max(0, Number(r.amplitude) || 0);
            const pe = Number(r.pe) || 0;

            const m = clamp01((chg + 10) / 20);            // 动量
            const a = clamp01(Math.log10(amt + 1) / 10);   // 关注度
            const t = clamp01(turn / 30);                  // 活跃度
            const risk = clamp01(amp / 30);                // 波动惩罚
            const v = pe > 0 ? clamp01(1 - pe / 80) : 0.5; // 估值

            const score01 = (0.38 * m + 0.28 * a + 0.18 * t + 0.10 * v) - 0.16 * risk;
            return Math.round(clamp01(score01) * 100);
        }

        function signalFromScore(score, chg) {
            if (score >= 75 && chg > 0) return { text: '强势', cls: 'pos' };
            if (score >= 60) return { text: '关注', cls: 'neu' };
            if (score <= 35 && chg < 0) return { text: '回避', cls: 'neg' };
            return { text: '观望', cls: 'neu' };
        }

        async function loadMarket() {
            marketRows = [];
            renderTable(true);
            await refreshMarket();
        }

        // 自动加载热门股票（前10条）
        async function loadTopStocks() {
            const market = document.getElementById('marketSelect')?.value || 'CN';
            const meta = document.getElementById('marketMeta');
            if (meta) meta.textContent = `正在加载热门股票…`;

            try {
                // 只加载第1页，10条数据
                const url = DATA_PROVIDER[market].url(1, 10);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                        'Referer': 'https://quote.eastmoney.com/'
                    },
                    mode: 'cors',
                    credentials: 'omit',
                    signal: AbortSignal.timeout(8000)
                });

                if (response.ok) {
                    const data = await response.json();
                    const diffs = data?.data?.diff || [];

                    if (diffs.length > 0) {
                        marketRows = diffs.map(d => {
                            const code = String(d.f12 || '');
                            const row = {
                                market,
                                code,
                                name: String(d.f14 || '-'),
                                price: Number(d.f2) || 0,
                                chgPct: Number(d.f3) || 0,
                                chg: Number(d.f4) || 0,
                                vol: Number(d.f5) || 0,
                                amount: Number(d.f6) || 0,
                                amplitude: Number(d.f7) || 0,
                                turnover: Number(d.f8) || 0,
                                pe: Number(d.f9) || 0,
                                pb: Number(d.f10) || 0,
                                displayCode: DATA_PROVIDER[market].displayCode(code)
                            };
                            row.score = calcScore(row);
                            row.signal = signalFromScore(row.score, row.chgPct);
                            return row;
                        });

                        marketLoadedAt = new Date();
                        if (meta) meta.textContent = `热门股票 ${marketRows.length} 条 · ${marketLoadedAt.toLocaleTimeString()}`;

                        // 同步更新持仓现价
                        window.marketData = marketRows;
                        updateHoldingsPrices();

                        renderTable();
                        console.log('✓ 成功加载东方财富API数据');
                        return;
                    }
                }
            } catch (e) {
                console.warn('加载热门股票失败，使用演示数据:', e.message);
            }

            // 降级到模拟数据
            console.log('生成模拟数据...');
            const mockData = generateMockData(market).slice(0, 10);
            console.log('模拟数据生成完成，数量:', mockData.length);
            console.log('模拟数据示例:', mockData[0]);
            marketRows = mockData;
            console.log('marketRows 已赋值，长度:', marketRows.length);
            marketLoadedAt = new Date();
            if (meta) meta.textContent = `演示数据 ${marketRows.length} 条 · ${marketLoadedAt.toLocaleTimeString()}`;
            console.log('准备调用 renderTable()');
            renderTable();
            console.log('renderTable() 调用完成');
        }

        async function refreshMarket() {
            const market = document.getElementById('marketSelect')?.value || 'CN';
            const meta = document.getElementById('marketMeta');
            if (meta) meta.textContent = `正在加载 ${DATA_PROVIDER[market].name} …`;

            const pageSize = 200;
            const pages = 2; // 减少并发请求

            try {
                const fetches = [];
                for (let pn = 1; pn <= pages; pn++) {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时

                    fetches.push(
                        fetch(DATA_PROVIDER[market].url(pn, pageSize), {
                            signal: controller.signal,
                            mode: 'cors',
                            credentials: 'omit'
                        })
                        .then(r => {
                            clearTimeout(timeoutId);
                            return r.json();
                        })
                        .catch(err => {
                            clearTimeout(timeoutId);
                            console.warn(`Page ${pn} failed:`, err);
                            return null;
                        })
                    );
                }

                const res = await Promise.all(fetches);
                const diffs = res.flatMap(x => (x && x.data && x.data.diff) ? x.data.diff : []);

                if (diffs.length === 0) {
                    throw new Error('API 返回空数据，使用模拟数据');
                }

                marketRows = diffs.map(d => {
                    const code = String(d.f12 || '');
                    const row = {
                        market,
                        code,
                        name: String(d.f14 || '-'),
                        price: Number(d.f2) || 0,
                        chgPct: Number(d.f3) || 0,
                        chg: Number(d.f4) || 0,
                        vol: Number(d.f5) || 0,
                        amount: Number(d.f6) || 0,
                        amplitude: Number(d.f7) || 0,
                        turnover: Number(d.f8) || 0,
                        pe: Number(d.f9) || 0,
                        pb: Number(d.f10) || 0,
                        displayCode: DATA_PROVIDER[market].displayCode(code)
                    };
                    row.score = calcScore(row);
                    row.signal = signalFromScore(row.score, row.chgPct);
                    return row;
                });

                marketLoadedAt = new Date();
                if (meta) meta.textContent = `已加载 ${marketRows.length} 条 · ${marketLoadedAt.toLocaleTimeString()}`;
                renderTable();
            } catch (e) {
                console.error('API 加载失败，使用模拟数据:', e);

                // 使用模拟数据
                marketRows = generateMockData(market);
                marketLoadedAt = new Date();

                if (meta) meta.textContent = `演示数据 ${marketRows.length} 条 · ${marketLoadedAt.toLocaleTimeString()} (API 不可用)`;
                renderTable();
            }
        }


        // 全市场搜索：当目标股票不在已加载的前N页榜单时使用
        async function marketSearchAll(){
            const q=(document.getElementById('marketSearch')?.value||'').trim();
            if(!q) { renderTable(); return; }
            const meta=document.getElementById('marketMeta');
            if(meta) meta.textContent = `搜索：${q} …`;

            const market=document.getElementById('marketSelect')?.value || 'CN';

            // 先在已加载的数据中搜索（通过 renderTable 的过滤功能）
            renderTable();
            const filteredCount = window.__renderedRows?.length || 0;

            if (filteredCount > 0) {
                console.log(`在已加载数据中找到 ${filteredCount} 个匹配项`);
                if(meta) meta.textContent = `找到 ${filteredCount} 个匹配项`;
                return;
            }

            // 如果没找到，尝试全市场搜索
            const originalRows = [...marketRows]; // 保存原始数据
            try{
                if (market === 'CN') await searchCN(q);
                else await searchHK(q);
                if(meta) meta.textContent = `已定位：${q}（点击表格行查看详情）`;
            }catch(e){
                console.error(e);
                // 搜索失败，恢复原始数据并清空搜索框
                marketRows = originalRows;
                const searchInput = document.getElementById('marketSearch');
                if(searchInput) searchInput.value = '';
                renderTable();
                if(meta) meta.textContent = `未找到匹配的股票：${q}`;
            }
        }

        async function searchCN(q){
            console.log('searchCN 被调用，搜索关键词:', q);
            try {
                // 使用 Baostock API 搜索
                console.log('尝试调用 Baostock API...');
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

                const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(q)}`, {
                    signal: controller.signal,
                    mode: 'cors'
                });
                clearTimeout(timeoutId);

                console.log('Baostock API 响应状态:', response.ok, response.status);
                if (!response.ok) throw new Error('Baostock API 请求失败');

                const results = await response.json();
                console.log('Baostock API 返回结果数量:', results?.length);
                if (!results || results.length === 0) {
                    throw new Error('未在全市场检索到该股票');
                }

                // 清空现有数据和搜索框，只显示搜索结果
                console.log('清空 marketRows，准备加载新数据');
                marketRows = [];
                const searchInput = document.getElementById('marketSearch');
                if(searchInput) searchInput.value = '';
                renderTable(true); // 显示加载状态

                const meta = document.getElementById('marketMeta');
                if(meta) meta.textContent = `找到 ${results.length} 个结果，正在加载行情数据...`;

                console.log('开始并行加载行情，结果数量:', results.length);

                // 并行获取行情数据（限制前20个）
                const limit = Math.min(results.length, 20);
                console.log('限制加载数量:', limit);
                const promises = results.slice(0, limit).map(async (stock) => {
                    console.log('准备加载:', stock.code, stock.code_name);
                    try {
                        await upsertByBaostock(stock.code, stock.code_name);
                    } catch (err) {
                        console.warn(`获取 ${stock.code} 行情失败:`, err);
                        // 即使获取行情失败，也添加基本信息
                        const code = stock.code.replace(/^(sh|sz|bj)\./, '');
                        marketRows.push({
                            market: 'CN',
                            code: code,
                            displayCode: code,
                            name: stock.code_name,
                            price: 0,
                            chgPct: 0,
                            chg: 0,
                            vol: 0,
                            amount: 0,
                            amplitude: 0,
                            turnover: 0,
                            pe: 0,
                            pb: 0,
                            score: 0,
                            signal: { text: '无数据', cls: 'neu' }
                        });
                    }
                });

                // 等待所有请求完成
                await Promise.all(promises);

                console.log('所有行情加载完成，准备渲染表格');
                console.log('marketRows 长度:', marketRows.length);
                console.log('marketRows 内容:', marketRows.slice(0, 3));

                // 同步更新持仓现价
                window.marketData = marketRows;
                updateHoldingsPrices();

                renderTable();
                console.log('renderTable() 已调用');
                if(meta) meta.textContent = `搜索 "${q}" 找到 ${results.length} 个结果，已显示 ${marketRows.length} 个`;

            } catch (error) {
                console.error('Baostock 搜索失败，尝试东方财富 API:', error);

                // 清空现有数据
                marketRows = [];
                renderTable(true);

                const meta = document.getElementById('marketMeta');
                if(meta) meta.textContent = `搜索 "${q}"...`;

                // 1) 纯数字 6 位：直接按 A 股 secid 取行情
                if (/^\d{6}$/.test(q)){
                    console.log('检测到6位数字代码，直接查询');
                    await upsertBySecid(`0.${q}`);
                    renderTable();
                    if(meta) meta.textContent = `找到 1 个结果`;
                    return;
                }

                // 2) 走 suggest，用名称/拼音定位代码（支持多个结果）
                console.log('使用 Eastmoney suggest API 搜索:', q);
                const suggestUrl = `https://searchapi.eastmoney.com/api/suggest/get?input=${encodeURIComponent(q)}&type=14&count=20`;
                const j = await fetch(suggestUrl).then(r=>r.json());
                console.log('Suggest API 返回:', j);
                const data = j?.QuotationCodeTable?.Data || [];
                console.log('解析到的数据条数:', data.length);

                // 筛选 A 股
                const aStocks = data.filter(x=>String(x?.SecurityTypeName||'').includes('A股') || String(x?.Classify||'')==='AStock');
                console.log('筛选后的 A 股数量:', aStocks.length);

                if(aStocks.length === 0) throw new Error('未在全市场检索到该股票');

                if(meta) meta.textContent = `找到 ${aStocks.length} 个结果，正在加载行情数据...`;

                // 并行获取所有匹配股票的行情
                const promises = aStocks.map(async (stock) => {
                    const code = String(stock.Code||'');
                    if(!/^\d{6}$/.test(code)) return;

                    const marketPrefix = code.startsWith('6') ? '1' : '0';
                    const secid = `${marketPrefix}.${code}`;

                    try {
                        await upsertBySecid(secid);
                        console.log(`✓ 已加载: ${code} ${stock.Name}`);
                    } catch (err) {
                        console.warn(`获取 ${code} 行情失败:`, err);
                    }
                });

                await Promise.all(promises);
                console.log('所有行情加载完成，marketRows 长度:', marketRows.length);
                renderTable();
                if(meta) meta.textContent = `搜索 "${q}" 找到 ${aStocks.length} 个结果，已显示 ${marketRows.length} 个`;
            }
        }

        async function searchHK(q){
            // 1) 输入 5 位数字（港股代码）
            if (/^\d{4,5}$/.test(q)){
                const code = String(q).padStart(5,'0');
                // 港股在 eastmoney 常用 secid=116.xxxxx
                await upsertBySecid(`116.${code}`);
                return;
            }
            // 2) 名称 suggest
            const suggestUrl = `https://searchapi.eastmoney.com/api/suggest/get?input=${encodeURIComponent(q)}&type=14&count=10`;
            const j = await fetch(suggestUrl).then(r=>r.json());
            const data = j?.QuotationCodeTable?.Data || [];
            const hit = data.find(x=>String(x?.SecurityTypeName||'').includes('港') || String(x?.MarketType||'')==='3') || data[0];
            if(!hit) throw new Error('未在全市场检索到该股票');
            const code = String(hit.Code||'').padStart(5,'0');
            await upsertBySecid(`116.${code}`);
        }

        async function upsertBySecid(secid){
            // 用 stock/get 拉单只股票核心字段，再并入 marketRows
            const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${encodeURIComponent(secid)}&fields=f57,f58,f43,f169,f170,f47,f48,f168,f171,f9,f10`;
            const j = await fetch(url).then(r=>r.json());
            const d = j?.data;
            if(!d) throw new Error('行情接口无返回');

            const code = String(d.f57||'');
            const name = String(d.f58||'-');
            const price = Number(d.f43) ? Number(d.f43)/100 : 0;  // f43 价格 *100
            const chg = (Number(d.f169)||0)/100;
            const chgPct = (Number(d.f170)||0)/100;
            const vol = Number(d.f47) || 0;
            const amount = Number(d.f48) || 0;
            const turnover = (Number(d.f168)||0)/100;
            const amplitude = (Number(d.f171)||0)/100;
            const pe = Number(d.f9) || 0;
            const pb = Number(d.f10) || 0;

            const market = secid.startsWith('116.') ? 'HK' : 'CN';
            const displayCode = market==='HK' ? `${code.padStart(5,'0')}.HK` : code;

            const row = {market, code, displayCode, name, price, chgPct, chg, vol, amount, amplitude, turnover, pe, pb};
            row.score = calcScore(row);
            row.signal = signalFromScore(row.score, row.chgPct);

            const idx = marketRows.findIndex(x=>x.market===market && x.code===code);
            if(idx>=0) marketRows[idx]=row;
            else marketRows.unshift(row);
        }

        async function upsertByBaostock(baostockCode, name){
            // 优先使用东方财富实时行情API
            const code = baostockCode.replace(/^(sh|sz|bj)\./, '');
            const marketPrefix = baostockCode.startsWith('sh.') ? '1' : baostockCode.startsWith('sz.') ? '0' : baostockCode.startsWith('bj.') ? '0' : '1';
            const secid = `${marketPrefix}.${code}`;

            try {
                // 东方财富实时行情API
                const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${secid}&fields=f43,f44,f45,f46,f47,f48,f60,f162,f168,f169,f170`;
                const response = await fetch(url, {
                    mode: 'cors',
                    credentials: 'omit'
                });

                if (response.ok) {
                    const data = await response.json();
                    const quote = data?.data;

                    if (quote && quote.f43 && quote.f43 > 0) {
                        const price = quote.f43 / 100; // 最新价
                        const chgPct = quote.f170 / 100; // 涨跌幅
                        const chg = quote.f169 / 100; // 涨跌额
                        const vol = quote.f47 || 0; // 成交量（手）
                        const amount = quote.f48 || 0; // 成交额（元）
                        const turnover = quote.f168 / 100; // 换手率
                        const high = quote.f44 / 100; // 最高价
                        const low = quote.f45 / 100; // 最低价
                        const preclose = quote.f60 / 100; // 昨收
                        const amplitude = preclose > 0 ? ((high - low) / preclose * 100) : 0;

                        const row = {
                            market: 'CN',
                            code,
                            displayCode: code,
                            name,
                            price,
                            chgPct,
                            chg,
                            vol,
                            amount,
                            amplitude,
                            turnover,
                            pe: quote.f162 ? quote.f162 / 100 : 0,
                            pb: 0
                        };
                        row.score = calcScore(row);
                        row.signal = signalFromScore(row.score, row.chgPct);

                        const idx = marketRows.findIndex(x=>x.market==='CN' && x.code===code);
                        if(idx>=0) marketRows[idx]=row;
                        else marketRows.push(row);

                        // 同步更新持仓现价
                        window.marketData = marketRows;
                        updateHoldingsPrices();

                        console.log(`✓ 东方财富API: ${code} ${name} ${price.toFixed(2)}`);
                        return;
                    }
                }
            } catch (err) {
                console.warn(`东方财富API失败: ${baostockCode}`, err);
            }

            // 降级到 Baostock API（历史数据）
            try {
                const response = await fetch(`http://localhost:5000/api/stock/${baostockCode}`);
                if (!response.ok) throw new Error('Baostock API 请求失败');

                const data = await response.json();
                const quote = data.quote;

                if (!quote) throw new Error('无行情数据');

                const price = parseFloat(quote.close) || 0;
                const chgPct = parseFloat(quote.pctChg) || 0;
                const preclose = parseFloat(quote.preclose) || 0;
                const chg = price - preclose;
                const vol = parseFloat(quote.volume) || 0;
                const amount = parseFloat(quote.amount) || 0;
                const turnover = parseFloat(quote.turn) || 0;
                const high = parseFloat(quote.high) || 0;
                const low = parseFloat(quote.low) || 0;
                const amplitude = preclose > 0 ? ((high - low) / preclose * 100) : 0;

                const row = {
                    market: 'CN',
                    code,
                    displayCode: code,
                    name,
                    price,
                    chgPct,
                    chg,
                    vol,
                    amount,
                    amplitude,
                    turnover,
                    pe: 0,
                    pb: 0
                };
                row.score = calcScore(row);
                row.signal = signalFromScore(row.score, row.chgPct);

                const idx = marketRows.findIndex(x=>x.market==='CN' && x.code===code);
                if(idx>=0) marketRows[idx]=row;
                else marketRows.push(row);

                console.log(`⚠ Baostock历史数据: ${code} ${name} ${price.toFixed(2)} (${quote.date})`);
            } catch (err) {
                console.error(`✗ 获取${baostockCode}失败:`, err);
                throw err;
            }
        }

        function getSortedFilteredRows() {
            const q = (document.getElementById('marketSearch')?.value || '').trim().toLowerCase();
            let rows = marketRows;
            if (q) rows = rows.filter(r => r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || r.displayCode.toLowerCase().includes(q));

            const sort = document.getElementById('sortSelect')?.value || 'score_desc';
            const num = (x) => (Number(x) || 0);
            if (sort === 'chg_desc') rows = [...rows].sort((a, b) => num(b.chgPct) - num(a.chgPct));
            else if (sort === 'amt_desc') rows = [...rows].sort((a, b) => num(b.amount) - num(a.amount));
            else if (sort === 'turn_desc') rows = [...rows].sort((a, b) => num(b.turnover) - num(a.turnover));
            else rows = [...rows].sort((a, b) => num(b.score) - num(a.score));

            return rows;
        }

        function renderTable(loading = false) {
            console.log('renderTable 被调用, loading:', loading);
            // 使用更可靠的选择器：通过 stocksPanel 找到 tbody
            const body = document.querySelector('#stocksPanel tbody');
            console.log('tbody 元素:', body ? '存在' : '不存在');
            if (!body) return;
            if (loading) {
                body.innerHTML = `<tr><td colspan="8" style="color: var(--text-muted); text-align:center; padding: 40px; font-size:14px;">
                    <div style="display:inline-block; width:20px; height:20px; border:3px solid rgba(59,130,246,0.3); border-top-color:var(--accent-cyan); border-radius:50%; animation:spin 0.8s linear infinite; margin-bottom:12px;"></div>
                    <div>加载中...</div>
                </td></tr>`;
                return;
            }

            const rows = getSortedFilteredRows().slice(0, 300);
            console.log('getSortedFilteredRows 返回:', rows.length, '条');
            window.__renderedRows = rows;

            if (rows.length === 0) {
                body.innerHTML = `<tr><td colspan="8" style="color: var(--text-muted); text-align:center; padding: 40px; font-size:14px;">
                    <div style="font-size:32px; margin-bottom:12px;">📊</div>
                    <div>没有匹配结果</div>
                </td></tr>`;
                return;
            }

            body.innerHTML = rows.map((r, idx) => {
                const chgCls = r.chgPct >= 0 ? 'pos' : 'neg';
                const chgTxt = (r.chgPct >= 0 ? '+' : '') + r.chgPct.toFixed(2) + '%';
                const scoreColor = r.score >= 75 ? 'var(--accent-green)' : r.score >= 60 ? 'var(--accent-cyan)' : r.score >= 40 ? 'var(--accent-yellow)' : 'var(--accent-red)';
                return `
                    <tr onclick="selectMarketRow(${idx})" style="position:relative;">
                        <td style="color: var(--accent-cyan); font-weight:700; font-family: 'Courier New', monospace;">${r.code}</td>
                        <td style="font-weight:600;">${r.name}</td>
                        <td style="text-align:right; font-variant-numeric: tabular-nums; font-weight:600;">${r.price ? r.price.toFixed(2) : '-'}</td>
                        <td style="text-align:right;"><span class="pill ${chgCls}">${chgTxt}</span></td>
                        <td style="text-align:right; color: var(--text-secondary); font-variant-numeric: tabular-nums;">${fmtAmount(r.amount)}</td>
                        <td style="text-align:right; color: var(--text-secondary); font-variant-numeric: tabular-nums;">${r.turnover ? r.turnover.toFixed(2) + '%' : '-'}</td>
                        <td style="text-align:right; font-weight:800; font-size:14px; color:${scoreColor};">${r.score}</td>
                        <td><span class="pill ${r.signal.cls}">${r.signal.text}</span></td>
                    </tr>`;
            }).join('');
        }


        function nowHM(){
            const d=new Date();
            return d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
        }

        function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }

        function headlineImpact(title){
            const t=(title||'').toLowerCase();
            const pos=['增长','超预期','突破','上调','回购','利好','通过','上涨','创新高','扩产','签署','合作','盈利','回暖','改善'];
            const neg=['下调','制裁','关税','罚款','审查','下滑','紧张','冲突','暴跌','亏损','裁员','监管','限制','风险','下跌'];
            let score=0;
            for(const w of pos) if(t.includes(w)) score+=12;
            for(const w of neg) if(t.includes(w)) score-=12;
            return clamp(Math.round(score), -60, 60);
        }


        function classifyHeadlineCategory(title){
            const t = (title||'').toLowerCase();
            const politics = ['制裁','关税','会谈','谈判','外交','选举','政府','欧盟','美国','中美','监管','政策','地缘','冲突','军事','战争','国会','央行'];
            const company = ['财报','业绩','回购','分红','融资','ipo','收购','并购','合作','签署','发布','推出','裁员','扩产','订单','产品','销量','董事会','高管'];
            const finance = ['利率','降息','加息','通胀','汇率','美元','人民币','油价','原油','黄金','指数','市场','期货','债券','收益率','流动性','风险偏好'];

            const hit = (arr)=>arr.some(w=>t.includes(w));
            if (hit(company)) return 'company';
            if (hit(politics)) return 'politics';
            if (hit(finance)) return 'finance';
            return 'finance';
        }

        function categoryLabel(cat){
            if(cat==='company') return '公司';
            if(cat==='politics') return '政治';
            return '财经';
        }

        function relevanceScore(title, r){
            // 0-100: 名称/代码命中最高；其次股票关键词；再次宏观通用词
            const t=(title||'').toLowerCase();
            const name=(r.name||'').toLowerCase();
            const code=(r.code||'').toLowerCase();
            let score = 10;
            if (name && t.includes(name)) score = 95;
            else if (code && t.includes(code)) score = 90;

            // stock-specific keywords (small built-in)
            const kw=[];
            if (r.market==='HK' && (r.code==='00700' || (r.name||'').includes('腾讯'))) kw.push('腾讯','tencent','游戏','微信','广告','ai','云');
            if (r.market==='CN' && (r.code==='601398' || (r.name||'').includes('工商'))) kw.push('银行','利率','降息','存款','贷款');
            // generic macro keywords
            const macro=['央行','利率','降息','加息','通胀','汇率','原油','黄金','关税','制裁','监管'];
            for (const k of kw) if (t.includes(String(k).toLowerCase())) score = Math.max(score, 70);
            for (const k of macro) if (t.includes(String(k).toLowerCase())) score = Math.max(score, 40);
            return score;
        }

        function getAllHeadlines(){
            const list=[
                ...Array.from(document.querySelectorAll('#globalNews .news-title')).map(x=>x.textContent||''),
                ...Array.from(document.querySelectorAll('#chinaNews .news-title')).map(x=>x.textContent||''),
            ];
            return list.map(x=>x.trim()).filter(Boolean);
        }

        function buildLinkedNews(r){
            const titles = getAllHeadlines();
            const items = titles.map(t=>{
                const cat = classifyHeadlineCategory(t);
                const rel = relevanceScore(t, r);
                const imp = headlineImpact(t);
                return {title:t, cat, rel, imp};
            }).sort((a,b)=> (b.rel - a.rel) || (Math.abs(b.imp)-Math.abs(a.imp)) );

            // default: show top news by relevance, but allow filtering by category
            const top = items.slice(0, 12);
            const render = (arr)=>{
                if (!arr.length) return `<div style="color: var(--text-muted); padding: 8px 0;">暂无可展示新闻</div>`;
                return `<div class="linked-news">` + arr.slice(0,8).map(n=>{
                    const badgeCls = n.cat;
                    const relTxt = `关联度 ${n.rel}`;
                    const impTxt = `影响 ${n.imp>0?'+':''}${n.imp}`;
                    return `
                        <div class="linked-news-item">
                            <div class="linked-news-title">${n.title}</div>
                            <div class="linked-news-meta">
                                <span class="badge ${badgeCls}">${categoryLabel(n.cat)}</span>
                                <span class="badge relevance">${relTxt}</span>
                                <span class="badge relevance">${impTxt}</span>
                            </div>
                        </div>
                    `;
                }).join('') + `</div>`;
            };

            const id = 'newsBox';
            // Build container; actual filtering handled by click handlers (delegated)
            return `
                <div class="section-h"><div class="t">关联新闻</div><div class="muted">财经 / 公司 / 政治</div></div>
                <div class="news-chips" data-news-chips>
                    <span class="news-chip active" data-news-filter="all">全部</span>
                    <span class="news-chip" data-news-filter="finance">财经</span>
                    <span class="news-chip" data-news-filter="company">公司</span>
                    <span class="news-chip" data-news-filter="politics">政治</span>
                </div>
                <div id="${id}">${render(top)}</div>
            `;
        }

        // 点击 chip 过滤关联新闻（在 stockDetail 内委托）
        document.addEventListener('click', (ev)=>{
            const chip = ev.target?.closest?.('.news-chip');
            if(!chip) return;
            const wrap = chip.closest('[data-news-chips]');
            if(!wrap) return;

            wrap.querySelectorAll('.news-chip').forEach(x=>x.classList.remove('active'));
            chip.classList.add('active');

            const filter = chip.getAttribute('data-news-filter') || 'all';
            const detail = document.getElementById('stockDetail');
            if(!detail) return;
            const cur = window.__selectedRow;
            if(!cur) return;

            const titles = getAllHeadlines();
            const items = titles.map(t=>{
                const cat = classifyHeadlineCategory(t);
                const rel = relevanceScore(t, cur);
                const imp = headlineImpact(t);
                return {title:t, cat, rel, imp};
            }).sort((a,b)=> (b.rel - a.rel) || (Math.abs(b.imp)-Math.abs(a.imp)) );

            let arr = items.slice(0, 12);
            if(filter !== 'all') arr = arr.filter(x=>x.cat===filter);

            const box = detail.querySelector('#newsBox');
            if(!box) return;
            // Re-render same way as buildLinkedNews
            const render = (arr)=>{
                if (!arr.length) return `<div style="color: var(--text-muted); padding: 8px 0;">暂无该类别新闻</div>`;
                return `<div class="linked-news">` + arr.slice(0,8).map(n=>{
                    const badgeCls = n.cat;
                    const relTxt = `关联度 ${n.rel}`;
                    const impTxt = `影响 ${n.imp>0?'+':''}${n.imp}`;
                    return `
                        <div class="linked-news-item">
                            <div class="linked-news-title">${n.title}</div>
                            <div class="linked-news-meta">
                                <span class="badge ${badgeCls}">${categoryLabel(n.cat)}</span>
                                <span class="badge relevance">${relTxt}</span>
                                <span class="badge relevance">${impTxt}</span>
                            </div>
                        </div>
                    `;
                }).join('') + `</div>`;
            };
            box.innerHTML = render(arr);
        });

        function renderTimeline(events){
            if (!events || events.length===0){
                return `<div class="events-timeline"><div style="color: var(--text-muted); padding: 10px;">暂无可关联事件（可先刷新新闻/行情）。</div></div>`;
            }
            const sorted=[...events].sort((a,b)=> (b.ts||0)-(a.ts||0));
            const items=sorted.map((e,i)=>{
                const cls=e.impact>8?'pos':e.impact<-8?'neg':'neu';
                const tagCls=cls;
                const width = clamp((e.impact+100)/200*100, 0, 100);
                return `
                    <div class="event-item" style="border-left-color:${cls==='pos'?'var(--accent-green)':cls==='neg'?'var(--accent-red)':'var(--accent-yellow)'};">
                        <div class="event-dot" style="background:${cls==='pos'?'var(--accent-green)':cls==='neg'?'var(--accent-red)':'var(--accent-yellow)'};"></div>
                        <div class="event-content">
                            <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
                                <div>
                                    <span class="tag ${tagCls}">${e.source}·${e.type}</span>
                                    <div style="margin-top:6px; color: var(--text-primary); font-weight:700;">${e.title}</div>
                                    <div class="event-time">${e.time||''}</div>
                                </div>
                                <div style="text-align:right; min-width:110px;">
                                    <div class="impact-score" style="color:${cls==='pos'?'var(--accent-green)':cls==='neg'?'var(--accent-red)':'var(--accent-yellow)'};">${e.impact>0?'+':''}${e.impact}</div>
                                    <div class="impact-bar"><div class="impact-fill" style="width:${width}%;"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            const net = sorted.reduce((a,e)=>a+(e.impact||0),0);
            const netCls = net>10?'pos':net<-10?'neg':'neu';
            return `
                <div class="section-h"><div class="t">事件 Timeline</div><div class="tag ${netCls}">净影响：${net>0?'+':''}${net}</div></div>
                <div class="events-timeline">${items}</div>
            `;

            // 拉取K线并绘制迷你图表
            try {
                const secid = r.market === 'HK' ? `116.${String(r.code).padStart(5,'0')}` : `0.${String(r.code)}`;
                fetchKlines(secid, 60).then(ks => drawMiniChart('miniChart', ks));
            } catch (e) {
                console.warn('mini chart failed', e);
            }
        }

        function buildAndRenderTimeline(r){
            // Build in JS (no external calls): market events + headline keyword association
            const events=[];
            const tsNow=Date.now();
            const chg=Number(r.chgPct)||0;
            const amp=Math.max(0,Number(r.amplitude)||0);
            const turn=Number(r.turnover)||0;
            const amt=Number(r.amount)||0;

            if (Math.abs(chg) >= 3){
                events.push({ts: tsNow-1, time:'今天 '+nowHM(), source:'行情', type: chg>=0?'动量上行':'动量下行', title:`当日涨跌幅 ${chg>=0?'+':''}${chg.toFixed(2)}%`, impact: clamp(Math.round(chg*6), -80, 80)});
            }
            if (amt >= 1e8){
                events.push({ts: tsNow-2, time:'今天 '+nowHM(), source:'行情', type:'成交活跃', title:`成交额 ${fmtAmount(amt)}（关注度提升）`, impact: clamp(20 + (amt>=5e8?10:0), 10, 45)});
            }
            if (turn >= 8){
                events.push({ts: tsNow-3, time:'今天 '+nowHM(), source:'行情', type:'换手偏高', title:`换手率 ${turn.toFixed(2)}%（筹码交换）`, impact: clamp(10 + (turn>=15?10:0), 5, 35)});
            }
            if (amp >= 10){
                events.push({ts: tsNow-4, time:'今天 '+nowHM(), source:'风险', type:'波动上升', title:`振幅 ${amp.toFixed(2)}%（波动风险）`, impact: -clamp(Math.round(amp*3), 20, 80)});
            }

            const titles=[
                ...Array.from(document.querySelectorAll('#globalNews .news-title')).map(x=>x.textContent||''),
                ...Array.from(document.querySelectorAll('#chinaNews .news-title')).map(x=>x.textContent||''),
            ].map(x=>x.trim()).filter(Boolean);

            const name=(r.name||'').toLowerCase();
            const code=(r.code||'').toLowerCase();
            const kw=[];
            if (r.market==='HK' && (r.code==='00700' || (r.name||'').includes('腾讯'))) kw.push('腾讯','tencent','游戏','微信','广告');
            if (r.market==='CN' && (r.code==='601398' || (r.name||'').includes('工商'))) kw.push('工商','银行','利率','降息','存款','贷款');

            let idx=0;
            for (const t of titles){
                const low=t.toLowerCase();
                let ok = false;
                if (name && low.includes(name)) ok = true;
                if (!ok && code && low.includes(code)) ok = true;
                if (!ok){
                    for (const k of kw){ if (low.includes(k)) { ok=true; break; } }
                }
                if (!ok) continue;
                const imp=headlineImpact(t);
                if (imp==0) continue;
                events.push({ts: tsNow-100-(idx++), time:'新闻 '+nowHM(), source:'新闻', type: imp>0?'利好':'利空', title:t, impact: imp});
                if (idx>=6) break;
            }

            return renderTimeline(events);
        }
        // ===== 事件关联 END =====


        async function fetchKlines(secid, lmt=60){
            const url = `https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=${encodeURIComponent(secid)}&klt=101&fqt=1&lmt=${lmt}&end=20500101&fields1=f1,f2,f3,f4,f5,f6&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63`;
            const j = await fetch(url).then(r=>r.json());
            const ks = j?.data?.klines || [];
            // kline: date, open, close, high, low, vol, amount,...
            return ks.map(line=>{
                const parts = String(line).split(',');
                return {
                    date: parts[0],
                    open: Number(parts[1]),
                    close: Number(parts[2]),
                    high: Number(parts[3]),
                    low: Number(parts[4]),
                    vol: Number(parts[5]),
                    amount: Number(parts[6])
                };
            });
        }

        function drawMiniChart(svgId, klines){
            const svg = document.getElementById(svgId);
            if(!svg) return;
            svg.innerHTML='';
            const w = svg.clientWidth || svg.parentElement.clientWidth;
            const h = svg.clientHeight || svg.parentElement.clientHeight;
            svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

            if(!klines || klines.length<2){
                const t = document.createElementNS('http://www.w3.org/2000/svg','text');
                t.setAttribute('x', w/2); t.setAttribute('y', h/2);
                t.setAttribute('fill', 'rgba(156,163,175,0.9)');
                t.setAttribute('font-size', '12');
                t.setAttribute('text-anchor', 'middle');
                t.textContent='暂无K线数据';
                svg.appendChild(t);
                return;
            }

            const closes = klines.map(k=>k.close);
            const amounts = klines.map(k=>k.amount||0);
            const minC = Math.min(...closes);
            const maxC = Math.max(...closes);
            const maxA = Math.max(...amounts, 1);

            const pad = 10;
            const chartH = h*0.70;
            const volH = h*0.22;
            const baseY = chartH + pad;

            const x = (i)=> pad + (w-2*pad) * (i/(klines.length-1));
            const y = (c)=> pad + (chartH-2*pad) * (1 - (c-minC)/(maxC-minC||1));

            // grid line
            const grid = document.createElementNS('http://www.w3.org/2000/svg','line');
            grid.setAttribute('x1', pad); grid.setAttribute('x2', w-pad);
            grid.setAttribute('y1', baseY); grid.setAttribute('y2', baseY);
            grid.setAttribute('stroke','rgba(59,130,246,0.18)');
            svg.appendChild(grid);

            // price polyline
            const pts = klines.map((k,i)=>`${x(i)},${y(k.close)}`).join(' ');
            const pl = document.createElementNS('http://www.w3.org/2000/svg','polyline');
            pl.setAttribute('points', pts);
            pl.setAttribute('fill','none');
            pl.setAttribute('stroke','rgba(6,182,212,0.95)');
            pl.setAttribute('stroke-width','2');
            svg.appendChild(pl);

            // volume bars
            klines.forEach((k,i)=>{
                const bw = Math.max(2, (w-2*pad)/klines.length - 1);
                const bh = (k.amount||0)/maxA * volH;
                const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
                rect.setAttribute('x', x(i) - bw/2);
                rect.setAttribute('y', baseY + (volH - bh) + 6);
                rect.setAttribute('width', bw);
                rect.setAttribute('height', bh);
                rect.setAttribute('fill', 'rgba(59,130,246,0.35)');
                svg.appendChild(rect);
            });

            // last point marker
            const last = klines[klines.length-1];
            const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
            c.setAttribute('cx', x(klines.length-1));
            c.setAttribute('cy', y(last.close));
            c.setAttribute('r', 3.2);
            c.setAttribute('fill','rgba(16,185,129,0.95)');
            svg.appendChild(c);
        }
    
        function selectMarketRow(renderIdx) {
            const r = (window.__renderedRows || [])[renderIdx];
            if (!r) return;

            const el = document.getElementById('stockDetail');
            if (!el) return;
            window.__selectedRow = r;

            // --- 评分拆解（与 calcScore 同源，确保可解释）
            const chg = Number(r.chgPct) || 0;
            const amt = Number(r.amount) || 0;
            const turn = Number(r.turnover) || 0;
            const amp = Math.max(0, Number(r.amplitude) || 0);
            const pe = Number(r.pe) || 0;

            const clamp01 = (x) => Math.max(0, Math.min(1, x));
            const m01 = clamp01((chg + 10) / 20);
            const a01 = clamp01(Math.log10(amt + 1) / 10);
            const t01 = clamp01(turn / 30);
            const risk01 = clamp01(amp / 30);
            const v01 = pe > 0 ? clamp01(1 - pe / 80) : 0.5;

            const factor = {
                momentum: Math.round(m01 * 100),
                attention: Math.round(a01 * 100),
                activity: Math.round(t01 * 100),
                valuation: Math.round(v01 * 100),
                risk: Math.round(risk01 * 100)
            };

            const chgColor = r.chgPct >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
            const chgSign = r.chgPct >= 0 ? '+' : '';
            const scoreW = Math.max(6, Math.min(100, r.score));
            const sgn = r.signal;

            const riskLabel = amp >= 20 ? { t: '高波动', c: 'neg' } : amp >= 10 ? { t: '中波动', c: 'neu' } : { t: '低波动', c: 'pos' };

            // 一句话结论（结论优先）
            const conclusion = (() => {
                const parts = [];
                parts.push(r.chgPct >= 0 ? '上涨动量偏强' : '下跌压力偏大');
                if (r.amount >= 1e8) parts.push('成交活跃');
                if (r.turnover >= 10) parts.push('换手偏高');
                if (amp >= 15) parts.push('波动较大需控风险');
                return parts.join('，') + '。';
            })();

            const factorRow = (name, v, hint) => `
                <div style="flex:1; min-width:80px;" title="${hint}">
                    <div style="font-size:11px; color:var(--text-muted); margin-bottom:4px;">${name}</div>
                    <div style="height:6px; background:rgba(255,255,255,0.06); border-radius:999px; overflow:hidden; margin-bottom:4px;">
                        <div style="width:${v}%; height:100%; background:linear-gradient(90deg,var(--accent-red),var(--accent-yellow),var(--accent-green));"></div>
                    </div>
                    <div style="font-size:13px; font-weight:700; color:var(--text-primary);">${v}</div>
                </div>`;

            el.innerHTML = `
                <!-- 顶部：股票名片 + 结论 -->
                <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
                    <div>
                        <div style="font-size:18px; font-weight:900;">${r.name}</div>
                        <div style="color: var(--text-muted); margin-top:2px;">${r.displayCode} · ${DATA_PROVIDER[r.market].name}</div>
                        <div style="margin-top:10px;" class="chips">
                            <span class="pill ${sgn.cls}">信号：${sgn.text}</span>
                            <span class="pill ${riskLabel.c}">风险：${riskLabel.t}</span>
                            <span class="pill neu">PE：${r.pe ? r.pe.toFixed(2) : '-'}</span>
                            <span class="pill neu">PB：${r.pb ? r.pb.toFixed(2) : '-'}</span>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:22px; font-weight:900;">${r.price ? String(r.price) : '-'}</div>
                        <div style="margin-top:6px;"><span class="pill ${r.chgPct >= 0 ? 'pos' : 'neg'}">${chgSign}${r.chgPct.toFixed(2)}%</span></div>
                        <div style="margin-top:8px; font-size:12px; color: var(--text-muted);">涨跌额：<span style="color:${chgColor}; font-weight:900;">${(r.chg >= 0 ? '+' : '') + (r.chg ? r.chg.toFixed(3) : '-') }</span></div>
                    </div>
                </div>

                <div style="margin-top:12px; padding:10px 12px; border-radius:12px; border:1px solid rgba(59,130,246,0.14); background:rgba(255,255,255,0.02);">
                    <div style="font-weight:900; margin-bottom:4px;">一句话结论</div>
                    <div style="color: var(--text-secondary); line-height:1.6;">${conclusion}</div>
                </div>

                
                <!-- 综合评分（可解释） -->
                <div class="score-row">
                    <div class="score-card">
                        <div class="section-h"><div class="t">综合评分</div><div style="font-weight:900;">${r.score}/100</div></div>
                        <div class="scorebar"><div style="width:${Math.max(6, Math.min(100, r.score))}%;"></div></div>
                        <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
                            <span class="tag ${r.signal.cls}">信号：${r.signal.text}<\/span>
                        </div>

                        <div style="margin-top:16px; padding-top:16px; border-top:1px solid rgba(59,130,246,0.15);">
                            <div class="section-h"><div class="t">评分拆解</div><div class="muted">0-100</div></div>
                            <div style="display:flex; gap:12px; margin-top:10px; flex-wrap:wrap;">
                                ${factorRow('动量', factor.momentum, '由涨跌幅映射，代表短线趋势强弱')}
                                ${factorRow('关注度', factor.attention, '由成交额对数映射，代表资金关注')}
                                ${factorRow('活跃度', factor.activity, '由换手率映射，代表筹码交换强度')}
                                ${factorRow('估值', factor.valuation, 'PE 越低分越高；无数据默认中性')}
                                ${factorRow('波动', factor.risk, '由振幅映射，越高代表风险越大（在总分里是惩罚项）')}
                            </div>
                        </div>
                    </div>

                    <div class="score-card">
                        <div class="section-h"><div class="t">价格走势</div><div class="muted">60日 · 收盘价/成交额</div></div>
                        <div class="chart-container-mini">
                            <svg id="miniChart" style="width:100%;height:100%;"><\/svg>
                        </div>
                        <div style="margin-top:8px; font-size:12px; color: var(--text-muted);">数据源：K线接口（自动拉取）<\/div>
                    </div>
                </div>

                <!-- 图表（升级） -->
<!-- 图表（轻量占位，后续可升级为折线+成交额） -->
                <div class="section-h"><div class="t">图表</div><div class="muted">轻量版</div></div>
                <div class="chart-box">图表区域（可升级：价格走势 + 成交额）</div>

                <!-- 关键指标 -->
                <div class="section-h"><div class="t">关键指标</div><div class="muted">结构化</div></div>
                <div class="kpi-grid">
                    <div class="kpi"><div class="label">成交额</div><div class="val">${fmtAmount(r.amount)}</div></div>
                    <div class="kpi"><div class="label">换手率</div><div class="val">${r.turnover ? r.turnover.toFixed(2) + '%' : '-'}</div></div>
                    <div class="kpi"><div class="label">振幅</div><div class="val">${r.amplitude ? r.amplitude.toFixed(2) + '%' : '-'}</div></div>
                    <div class="kpi"><div class="label">成交量</div><div class="val">${fmtAmount(r.vol)}</div></div>
                </div>

                ${buildLinkedNews(r)}

                ${buildAndRenderTimeline(r)}

                <!-- 解释与免责声明 -->
                <div style="margin-top:12px; color: var(--text-secondary); font-size:13px; line-height:1.7;">
                    <div style="font-weight:900; color: var(--text-primary); margin-bottom:6px;">分析说明</div>
                    <ul style="padding-left:18px;">
                        <li>页面按“结论 → 证据(评分拆解/指标) → 细节”的顺序组织，便于快速决策与复核。</li>
                        <li>当前为启发式评分：动量/关注度/活跃度/估值加分，波动作为风险惩罚项。</li>
                    </ul>
                    <div style="margin-top:10px; font-size:12px; color: var(--text-muted);">声明：程序化信息展示，不构成投资建议。</div>
                </div>
            `;

            // 加载K线数据并绘制图表
            setTimeout(() => {
                try {
                    const secid = r.market === 'HK' ? `116.${String(r.code).padStart(5,'0')}` : `0.${String(r.code)}`;
                    fetchKlines(secid, 60).then(ks => {
                        if (ks && ks.length > 0) {
                            drawMiniChart('miniChart', ks);
                        }
                    }).catch(err => {
                        console.warn('K线数据加载失败:', err);
                    });
                } catch (e) {
                    console.warn('K线图表初始化失败:', e);
                }
            }, 100);
        }
        // ===== 全市场(A股/港股)数据与分析 END =====

        // ===== 持仓管理 START =====
        let holdings = JSON.parse(localStorage.getItem('stockHoldings') || '[]');

        function renderHoldings() {
            const tbody = document.getElementById('holdingsTableBody');
            if (!tbody) return;

            if (holdings.length === 0) {
                tbody.innerHTML = '<tr><td colspan="9" style="color: var(--text-secondary); text-align:center; padding: 24px; font-size: 0.875rem;">暂无持仓数据，点击"添加持仓"开始记录</td></tr>';
                return;
            }

            tbody.innerHTML = holdings.map((h, idx) => {
                const currentPrice = h.currentPrice || h.costPrice;
                const marketValue = currentPrice * h.quantity;
                const profit = marketValue - (h.costPrice * h.quantity);
                const profitRate = ((currentPrice - h.costPrice) / h.costPrice * 100);
                const profitCls = profit >= 0 ? 'positive' : 'negative';

                return `
                    <tr>
                        <td>${h.code}</td>
                        <td style="font-weight: 600;">${h.name}</td>
                        <td style="text-align:right;">${h.quantity.toLocaleString()}</td>
                        <td style="text-align:right;">¥${h.costPrice.toFixed(2)}</td>
                        <td style="text-align:right;">¥${currentPrice.toFixed(2)}</td>
                        <td style="text-align:right;">¥${fmtAmount(marketValue)}</td>
                        <td style="text-align:right;" class="${profitCls}">¥${profit.toFixed(2)}</td>
                        <td style="text-align:right;">
                            <span class="pill ${profitCls === 'positive' ? 'pos' : 'neg'}">${profitRate >= 0 ? '+' : ''}${profitRate.toFixed(2)}%</span>
                        </td>
                        <td style="text-align:center;">
                            <button onclick="editHolding(${idx})" style="background: none; border: none; color: var(--accent-blue); cursor: pointer; font-size: 0.875rem; padding: 4px 8px;">编辑</button>
                            <button onclick="deleteHolding(${idx})" style="background: none; border: none; color: var(--accent-red); cursor: pointer; font-size: 0.875rem; padding: 4px 8px;">删除</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        function addHolding() {
            const code = prompt('请输入股票代码（如：600519 或 00700）:');
            if (!code) return;

            const name = prompt('请输入股票名称:');
            if (!name) return;

            const quantity = parseFloat(prompt('请输入持仓数量:'));
            if (!quantity || quantity <= 0) {
                alert('持仓数量必须大于0');
                return;
            }

            const costPrice = parseFloat(prompt('请输入成本价:'));
            if (!costPrice || costPrice <= 0) {
                alert('成本价必须大于0');
                return;
            }

            holdings.push({
                code: code.trim(),
                name: name.trim(),
                quantity: quantity,
                costPrice: costPrice,
                currentPrice: costPrice,
                addTime: Date.now()
            });

            localStorage.setItem('stockHoldings', JSON.stringify(holdings));
            renderHoldings();
        }

        function editHolding(idx) {
            const h = holdings[idx];
            if (!h) return;

            const quantity = parseFloat(prompt('修改持仓数量:', h.quantity));
            if (quantity && quantity > 0) {
                h.quantity = quantity;
            }

            const costPrice = parseFloat(prompt('修改成本价:', h.costPrice));
            if (costPrice && costPrice > 0) {
                h.costPrice = costPrice;
            }

            localStorage.setItem('stockHoldings', JSON.stringify(holdings));
            renderHoldings();
        }

        function deleteHolding(idx) {
            if (!confirm('确定要删除这条持仓记录吗？')) return;
            holdings.splice(idx, 1);
            localStorage.setItem('stockHoldings', JSON.stringify(holdings));
            renderHoldings();
        }

        // 更新持仓现价（从市场数据中获取）
        function updateHoldingsPrices() {
            if (holdings.length === 0) return;

            holdings.forEach(h => {
                const found = window.marketData?.find(s => s.code === h.code);
                if (found && found.price) {
                    h.currentPrice = found.price;
                }
            });

            localStorage.setItem('stockHoldings', JSON.stringify(holdings));
            renderHoldings();
        }
        // ===== 持仓管理 END =====


        // 绘制价格走势图
        function drawPriceChart(chartId, eventCount) {
            const svg = document.getElementById(chartId);
            if (!svg) return;
            
            const width = svg.parentElement.clientWidth;
            const height = svg.parentElement.clientHeight;
            
            // 生成随机但相关的价格数据
            const points = [];
            for (let i = 0; i < 20; i++) {
                const x = (width / 20) * i;
                const variation = (Math.random() - 0.5) * 20;
                const y = height * (0.5 + variation / 100);
                points.push(`${x},${y}`);
            }
            
            // 绘制背景渐变
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', `grad-${chartId}`);
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '0%');
            gradient.setAttribute('y2', '100%');
            
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', 'rgba(59, 130, 246, 0.3)');
            
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', 'rgba(59, 130, 246, 0)');
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);
            
            // 绘制面积
            const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            polyline.setAttribute('points', points.join(' '));
            polyline.setAttribute('fill', `url(#grad-${chartId})`);
            polyline.setAttribute('stroke', 'rgb(59, 130, 246)');
            polyline.setAttribute('stroke-width', '2');
            svg.appendChild(polyline);
            
            // 绘制事件标记点
            for (let i = 0; i < Math.min(eventCount, 3); i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', (width / 20) * (15 + i * 2));
                circle.setAttribute('cy', height * Math.random());
                circle.setAttribute('r', '3');
                circle.setAttribute('fill', i === 0 ? 'rgb(6, 182, 212)' : 'rgba(239, 68, 68, 0.6)');
                svg.appendChild(circle);
            }
        }
        
        // 导航标签切换
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const tabName = tab.dataset.tab;
                const appContainer = document.querySelector('.app-container');
                const stocksPanel = document.getElementById('stocksPanel');
                const otherPanel = document.getElementById('otherPanel');
                const mapContainer = document.querySelector('.map-container');
                const leftPanel = document.querySelector('.left-panel');

                // 隐藏所有内容面板
                const macroPanel = document.getElementById('macroPanel');
                const policyPanel = document.getElementById('policyPanel');
                const industryPanel = document.getElementById('industryPanel');
                const globalPanel = document.getElementById('globalPanel');
                const worldPanel = document.getElementById('worldPanel');
                const techPanel = document.getElementById('techPanel');
                const financePanel = document.getElementById('financePanel');
                const commodityPanel = document.getElementById('commodityPanel');

                if (tabName === 'stocks') {
                    appContainer && appContainer.classList.add('stocks-mode');
                    stocksPanel.style.display = 'block';
                    otherPanel.style.display = 'none';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'none';

                    // 首次进入时加载数据（在面板显示之后）
                    if (!window.__marketBooted) {
                        console.log('首次进入股票标签，调用 loadTopStocks()');
                        window.__marketBooted = true;
                        loadTopStocks();
                        renderHoldings();
                    } else {
                        console.log('再次进入股票标签，跳过加载');
                        renderHoldings();
                    }
                } else if (tabName === 'macro') {
                    // 宏观经济
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'block';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                } else if (tabName === 'policy') {
                    // 政策追踪
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'block';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                    if (!window.__policyLoaded) { window.__policyLoaded = true; loadPolicyNews(); }
                } else if (tabName === 'industry') {
                    // 产业链
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'block';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                    if (!window.__industryLoaded) { window.__industryLoaded = true; loadIndustryNews(); }
                } else if (tabName === 'global') {
                    // 全球视野
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'block';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'block';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                    if (!window.__globalLoaded) { window.__globalLoaded = true; loadGlobalNews(); }
                } else if (tabName === 'tech') {
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'none';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'block';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                    if (!window.__techLoaded) { window.__techLoaded = true; loadTechNews(); }
                } else if (tabName === 'finance') {
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'none';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'block';
                    commodityPanel.style.display = 'none';
                    if (!window.__financeLoaded) { window.__financeLoaded = true; loadFinanceNews(); }
                } else if (tabName === 'commodity') {
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'none';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'none';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'block';
                    if (!window.__commodityLoaded) { window.__commodityLoaded = true; loadCommodityNews(); }
                } else {
                    // world tab (默认)
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'block';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'none';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                    worldPanel.style.display = 'block';
                    techPanel.style.display = 'none';
                    financePanel.style.display = 'none';
                    commodityPanel.style.display = 'none';
                }
            });
        });
        
        // 初始化 3D 地球
        const world = Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .pointsData([
                // 高风险热点
                { lat: 48.8566, lng: 2.3522, size: 8, color: '#ef4444', label: '乌克兰' },
                { lat: 35.6892, lng: 51.3890, size: 8, color: '#ef4444', label: '伊朗' },
                { lat: 31.2001, lng: 34.5997, size: 8, color: '#ef4444', label: '加沙' },
                { lat: 25.0330, lng: 121.5654, size: 6, color: '#f59e0b', label: '台湾' },
                { lat: 39.0392, lng: 125.7625, size: 6, color: '#f59e0b', label: '朝鲜' },
                // 市场中心
                { lat: 40.7128, lng: -74.0060, size: 5, color: '#10b981', label: '纽约' },
                { lat: 51.5074, lng: -0.1278, size: 5, color: '#10b981', label: '伦敦' },
                { lat: 35.6762, lng: 139.6503, size: 5, color: '#10b981', label: '东京' },
                { lat: 31.2304, lng: 121.4737, size: 5, color: '#10b981', label: '上海' },
                { lat: 22.3193, lng: 114.1694, size: 5, color: '#10b981', label: '香港' },
            ])
            .pointAltitude(0.01)
            .pointRadius('size')
            .pointColor('color')
            .pointLabel(d => `
                <div style="background: rgba(0,0,0,0.8); padding: 8px 12px; border-radius: 6px; font-size: 12px;">
                    <strong>${d.label}</strong>
                </div>
            `)
            .onPointClick(point => {
                console.log('Clicked:', point.label);
            })
            (document.getElementById('globeViz'));
        
        // 设置自动旋转
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.5;
        
        // 窗口大小调整
        window.addEventListener('resize', () => {
            world.width(window.innerWidth * 0.45);
            world.height(window.innerHeight - 64);
        });
        
        // 触发一次resize
        window.dispatchEvent(new Event('resize'));
                
        // 实时新闻获取
        let newsCache = [];
        let chinaNewsCache = [];
        let lastNewsUpdate = null;
        let lastChinaNewsUpdate = null;

        // 备用全球新闻数据
        const fallbackNews = [
            { source: 'Reuters', title: '美联储维持利率不变，市场预期年内降息路径', time: '5分钟前', category: 'finance' },
            { source: 'Bloomberg', title: '中美经贸高层会谈寻求解决贸易分歧方案', time: '12分钟前', category: 'politics' },
            { source: 'BBC', title: '欧盟通过对华电动车关税最终方案', time: '28分钟前', category: 'politics' },
            { source: 'Al Jazeera', title: '中东局势持续紧张，原油价格波动加剧', time: '35分钟前', category: 'politics' },
            { source: 'WSJ', title: '全球芯片短缺缓解，半导体行业产能回升', time: '42分钟前', category: 'tech' },
            { source: 'CNBC', title: '美股三大指数集体收涨，纳指创历史新高', time: '50分钟前', category: 'finance' },
            { source: 'FT', title: '英国央行考虑提前降息应对经济放缓', time: '1小时前', category: 'finance' },
        ];

        // 备用中国新闻数据
        const fallbackChinaNews = [
            { source: '新华社', title: '央行：保持流动性合理充裕，支持实体经济高质量发展', time: '10分钟前', category: 'finance' },
            { source: '财新网', title: 'A股三大指数走势分化，创业板指领涨超2%', time: '25分钟前', category: 'finance' },
            { source: '第一财经', title: '新能源板块表现强势，产业链业绩大增', time: '38分钟前', category: 'tech' },
            { source: '证券时报', title: '科创板改革持续深化，注册制运行平稳', time: '45分钟前', category: 'finance' },
            { source: '经济日报', title: '中国经济持续恢复向好，消费市场活力增强', time: '1小时前', category: 'finance' },
        ];

        // 从多个来源获取全球新闻
        async function fetchRealNews() {
            try {
                // 尝试从东方财富获取全球财经新闻
                const response = await fetch('https://np-listapi.eastmoney.com/comm/wap/getListInfo?cb=callback&pageSize=15&pageIndex=1&srcCode=8314&code=&type=8314', {
                    mode: 'cors',
                    credentials: 'omit',
                    signal: AbortSignal.timeout(5000)
                }).catch(() => null);

                if (response && response.ok) {
                    const text = await response.text();
                    const jsonMatch = text.match(/callback\((.*)\)/);
                    if (jsonMatch) {
                        const data = JSON.parse(jsonMatch[1]);
                        if (data && data.data && data.data.list) {
                            return data.data.list.slice(0, 15).map(item => ({
                                source: '东方财富',
                                title: item.title || item.showTitle || '无标题',
                                time: formatNewsTime(item.showTime || item.publishTime),
                                category: 'finance',
                                url: item.url
                            }));
                        }
                    }
                }
            } catch (e) {
                console.warn('获取全球新闻失败，使用备用数据:', e);
            }

            return fallbackNews;
        }

        // 获取中国新闻
        async function fetchChinaNews() {
            try {
                // 尝试从东方财富获取A股新闻
                const response = await fetch('https://np-listapi.eastmoney.com/comm/wap/getListInfo?cb=callback&pageSize=15&pageIndex=1&srcCode=8312&code=&type=8312', {
                    mode: 'cors',
                    credentials: 'omit',
                    signal: AbortSignal.timeout(5000)
                }).catch(() => null);

                if (response && response.ok) {
                    const text = await response.text();
                    const jsonMatch = text.match(/callback\((.*)\)/);
                    if (jsonMatch) {
                        const data = JSON.parse(jsonMatch[1]);
                        if (data && data.data && data.data.list) {
                            return data.data.list.slice(0, 15).map(item => ({
                                source: item.source || '财经网',
                                title: item.title || item.showTitle || '无标题',
                                time: formatNewsTime(item.showTime || item.publishTime),
                                category: 'finance',
                                url: item.url
                            }));
                        }
                    }
                }
            } catch (e) {
                console.warn('获取中国新闻失败，使用备用数据:', e);
            }

            return fallbackChinaNews;
        }

        function formatNewsTime(timestamp) {
            if (typeof timestamp === 'string') {
                // 如果已经是格式化的字符串，直接返回
                if (timestamp.includes('分钟前') || timestamp.includes('小时前') || timestamp.includes('天前')) {
                    return timestamp;
                }
                // 尝试解析时间戳
                const parsed = new Date(timestamp).getTime();
                if (!isNaN(parsed)) {
                    timestamp = parsed;
                } else {
                    return timestamp;
                }
            }

            const now = Date.now();
            const diff = now - timestamp;
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(diff / 3600000);
            const days = Math.floor(diff / 86400000);

            if (minutes < 1) return '刚刚';
            if (minutes < 60) return `${minutes}分钟前`;
            if (hours < 24) return `${hours}小时前`;
            if (days < 7) return `${days}天前`;
            return new Date(timestamp).toLocaleDateString();
        }

        async function updateNews() {
            const newsList = document.getElementById('globalNews');
            if (!newsList) return;

            // 每5分钟刷新一次新闻缓存
            if (!lastNewsUpdate || Date.now() - lastNewsUpdate > 300000) {
                newsCache = await fetchRealNews();
                lastNewsUpdate = Date.now();
            }

            if (newsCache.length === 0) return;

            // 随机选择一条新闻
            const randomNews = newsCache[Math.floor(Math.random() * newsCache.length)];

            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.style.animation = 'slideIn 0.3s ease-out';
            newsItem.innerHTML = `
                <div class="news-source">${randomNews.source}</div>
                <div class="news-title">${randomNews.title}</div>
                <div class="news-time">${randomNews.time}</div>
            `;

            newsList.insertBefore(newsItem, newsList.firstChild);

            // 保持最多5条
            while (newsList.children.length > 5) {
                newsList.removeChild(newsList.lastChild);
            }
        }

        async function updateChinaNews() {
            const newsList = document.getElementById('chinaNews');
            if (!newsList) return;

            // 每5分钟刷新一次新闻缓存
            if (!lastChinaNewsUpdate || Date.now() - lastChinaNewsUpdate > 300000) {
                chinaNewsCache = await fetchChinaNews();
                lastChinaNewsUpdate = Date.now();
            }

            if (chinaNewsCache.length === 0) return;

            // 随机选择一条新闻
            const randomNews = chinaNewsCache[Math.floor(Math.random() * chinaNewsCache.length)];

            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.style.animation = 'slideIn 0.3s ease-out';
            newsItem.innerHTML = `
                <div class="news-source">${randomNews.source}</div>
                <div class="news-title">${randomNews.title}</div>
                <div class="news-time">${randomNews.time}</div>
            `;

            newsList.insertBefore(newsItem, newsList.firstChild);

            // 保持最多3条
            while (newsList.children.length > 3) {
                newsList.removeChild(newsList.lastChild);
            }
        }

        // 页面加载完成后初始化
        document.addEventListener('DOMContentLoaded', () => {
            // 初始加载新闻
            updateNews();
            updateChinaNews();

            // 初始化默认标签页（宏观经济）
            const defaultTab = document.querySelector('.nav-tab.active');
            if (defaultTab) {
                const tabName = defaultTab.dataset.tab;
                const appContainer = document.querySelector('.app-container');
                const stocksPanel = document.getElementById('stocksPanel');
                const otherPanel = document.getElementById('otherPanel');
                const mapContainer = document.querySelector('.map-container');
                const leftPanel = document.querySelector('.left-panel');
                const macroPanel = document.getElementById('macroPanel');
                const policyPanel = document.getElementById('policyPanel');
                const industryPanel = document.getElementById('industryPanel');
                const globalPanel = document.getElementById('globalPanel');

                if (tabName === 'macro') {
                    appContainer && appContainer.classList.remove('stocks-mode');
                    stocksPanel.style.display = 'none';
                    otherPanel.style.display = 'block';
                    mapContainer.style.display = 'none';
                    leftPanel.style.display = 'block';
                    macroPanel.style.display = 'block';
                    policyPanel.style.display = 'none';
                    industryPanel.style.display = 'none';
                    globalPanel.style.display = 'none';
                }
            }
        });

        // 每30秒更新一次全球新闻
        setInterval(updateNews, 30000);

        // 每30秒更新一次中国新闻
        setInterval(updateChinaNews, 30000);

        // 加载实时市场指数
        async function loadMarketIndices() {
            const indices = [
                { name: '上证指数', secid: '1.000001', idx: 0 },
                { name: '深证成指', secid: '0.399001', idx: 1 },
                { name: '创业板指', secid: '0.399006', idx: 2 },
                { name: '恒生指数', secid: '116.HSI', idx: 3 }
            ];

            const container = document.getElementById('marketIndices');
            if (!container) return;

            for (const index of indices) {
                try {
                    const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${index.secid}&fields=f43,f44,f45,f46,f170,f169`;
                    const response = await fetch(url);
                    const data = await response.json();
                    const quote = data?.data;

                    if (quote && quote.f43) {
                        const price = quote.f43 / 100;
                        const chgPct = quote.f170 / 100;
                        const cards = container.querySelectorAll('.market-card');

                        if (cards[index.idx]) {
                            const priceEl = cards[index.idx].querySelector('.market-price');
                            const changeEl = cards[index.idx].querySelector('.market-change');

                            priceEl.textContent = price.toFixed(2);
                            changeEl.textContent = (chgPct >= 0 ? '+' : '') + chgPct.toFixed(2) + '%';
                            changeEl.className = 'market-change ' + (chgPct >= 0 ? 'positive' : 'negative');
                        }
                    }
                } catch (err) {
                    console.warn(`加载${index.name}失败:`, err);
                }
            }
        }

        // 初始加载市场指数
        loadMarketIndices();

        // 每30秒更新一次市场指数
        setInterval(loadMarketIndices, 30000);

        // 科技新闻数据
        const techNewsData = [
            { source: 'TechCrunch', title: 'OpenAI发布GPT-5，多模态能力大幅提升', time: '5分钟前', category: 'AI' },
            { source: 'The Verge', title: '苹果Vision Pro 2代曝光，预计明年发布', time: '15分钟前', category: '硬件' },
            { source: 'Wired', title: '量子计算突破：IBM实现1000量子比特芯片', time: '25分钟前', category: '量子' },
            { source: 'Ars Technica', title: '特斯拉FSD V13版本开始推送，自动驾驶能力增强', time: '35分钟前', category: '自动驾驶' },
            { source: 'MIT Tech Review', title: '新型固态电池技术突破，续航提升3倍', time: '45分钟前', category: '能源' },
            { source: 'VentureBeat', title: 'Meta推出AR眼镜新品，挑战苹果市场', time: '1小时前', category: 'AR/VR' },
            { source: 'ZDNet', title: '微软Azure AI服务全面升级，企业客户激增', time: '1小时前', category: '云计算' },
            { source: 'CNET', title: '三星Galaxy S26系列曝光，搭载全新AI芯片', time: '2小时前', category: '手机' },
            { source: '36氪', title: '字节跳动AI实验室发布多模态大模型', time: '2小时前', category: 'AI' },
            { source: '雷锋网', title: '华为鸿蒙生态设备突破10亿台', time: '3小时前', category: '操作系统' },
        ];

        // 金融新闻数据
        const financeNewsData = [
            { source: 'Bloomberg', title: '美联储暗示年内可能降息两次', time: '8分钟前', category: '货币政策' },
            { source: 'Reuters', title: '高盛上调中国GDP增长预期至5.2%', time: '18分钟前', category: '经济' },
            { source: 'WSJ', title: '比特币ETF资金流入创新高，机构持续加仓', time: '28分钟前', category: '加密货币' },
            { source: 'FT', title: '欧洲央行维持利率不变，关注通胀数据', time: '40分钟前', category: '货币政策' },
            { source: 'CNBC', title: '纳斯达克创历史新高，科技股领涨', time: '50分钟前', category: '股市' },
            { source: '财新网', title: 'A股北向资金净流入超100亿，外资看好中国市场', time: '1小时前', category: '股市' },
            { source: '第一财经', title: '人民币汇率企稳回升，外汇储备连续增长', time: '1小时前', category: '外汇' },
            { source: '证券时报', title: '科创板IPO提速，硬科技企业受青睐', time: '2小时前', category: 'IPO' },
            { source: '21世纪经济报道', title: '房地产政策持续优化，一线城市成交回暖', time: '2小时前', category: '房地产' },
            { source: '经济观察报', title: '新能源汽车出口强劲，中国制造竞争力提升', time: '3小时前', category: '贸易' },
        ];

        // 大宗商品新闻数据
        const commodityNewsData = [
            { source: 'Reuters', title: 'WTI原油跌破75美元，OPEC+考虑增产', time: '10分钟前', category: '原油' },
            { source: 'Bloomberg', title: '黄金突破3000美元关口，避险需求激增', time: '20分钟前', category: '贵金属' },
            { source: 'Kitco', title: '白银价格大涨5%，工业需求强劲', time: '30分钟前', category: '贵金属' },
            { source: 'S&P Global', title: '铜价创年内新高，电动车需求推动', time: '45分钟前', category: '工业金属' },
            { source: 'Platts', title: '天然气价格回落，欧洲库存充足', time: '55分钟前', category: '天然气' },
            { source: 'Argus', title: '铁矿石价格企稳，中国钢厂补库需求上升', time: '1小时前', category: '工业金属' },
            { source: 'Metal Bulletin', title: '锂价持续下跌，供应过剩压力显现', time: '1小时前', category: '新能源金属' },
            { source: 'Fastmarkets', title: '镍价反弹，印尼出口政策调整', time: '2小时前', category: '工业金属' },
            { source: '上海有色网', title: '稀土价格走强，新能源需求拉动', time: '2小时前', category: '稀土' },
            { source: '生意社', title: '煤炭价格季节性回落，库存处于高位', time: '3小时前', category: '煤炭' },
        ];

        // 加载科技新闻
        function loadTechNews() {
            const newsList = document.getElementById('techNews');
            if (!newsList) return;

            newsList.innerHTML = '';
            techNewsData.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-source">${news.source}</div>
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                `;
                newsList.appendChild(newsItem);
            });
        }

        // 加载金融新闻
        function loadFinanceNews() {
            const newsList = document.getElementById('financeNews');
            if (!newsList) return;

            newsList.innerHTML = '';
            financeNewsData.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-source">${news.source}</div>
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                `;
                newsList.appendChild(newsItem);
            });
        }

        // 政策新闻数据
        const policyNewsData = [
            { source: '国务院', title: '发布促进民营经济发展壮大的意见', time: '2小时前', category: '产业政策' },
            { source: '央行', title: '下调金融机构存款准备金率0.25个百分点', time: '5小时前', category: '货币政策' },
            { source: '发改委', title: '批复京津冀城际铁路网规划调整方案', time: '8小时前', category: '基建投资' },
            { source: '工信部', title: '推动新能源汽车产业高质量发展实施方案', time: '10小时前', category: '产业政策' },
            { source: '财政部', title: '提高个人所得税专项附加扣除标准', time: '12小时前', category: '财税政策' },
            { source: '证监会', title: '优化IPO审核机制，支持硬科技企业上市', time: '1天前', category: '资本市场' },
            { source: '商务部', title: '扩大服务业对外开放综合试点', time: '1天前', category: '对外开放' },
            { source: '住建部', title: '因城施策优化房地产调控政策', time: '2天前', category: '房地产' },
            { source: '科技部', title: '启动人工智能重大科技专项', time: '2天前', category: '科技创新' },
            { source: '生态环境部', title: '发布碳达峰碳中和行动方案', time: '3天前', category: '环保政策' },
        ];

        // 产业链新闻数据
        const industryNewsData = [
            { source: '36氪', title: '新能源汽车产业链：宁德时代发布新一代电池技术', time: '1小时前', category: '新能源' },
            { source: '钛媒体', title: '半导体产业链：中芯国际14nm工艺量产突破', time: '3小时前', category: '半导体' },
            { source: '界面新闻', title: '光伏产业链：隆基绿能组件出货量全球第一', time: '5小时前', category: '光伏' },
            { source: '财联社', title: 'AI产业链：华为昇腾芯片生态持续扩大', time: '7小时前', category: 'AI' },
            { source: '证券时报', title: '锂电产业链：碳酸锂价格企稳回升', time: '9小时前', category: '新能源' },
            { source: '第一财经', title: '医药产业链：创新药研发投入创新高', time: '11小时前', category: '医药' },
            { source: '21世纪经济报道', title: '5G产业链：中国5G基站数量突破300万', time: '1天前', category: '通信' },
            { source: '经济观察报', title: '新材料产业链：石墨烯应用场景不断拓展', time: '1天前', category: '新材料' },
            { source: '中国证券报', title: '智能制造产业链：工业机器人产量大增', time: '2天前', category: '智能制造' },
            { source: '上海证券报', title: '航空航天产业链：C919商业运营顺利', time: '2天前', category: '航空航天' },
        ];

        // 全球视野新闻数据
        const globalNewsData = [
            { source: 'Reuters', title: '美联储维持利率不变，市场预期年内降息路径', time: '5分钟前', category: '货币政策' },
            { source: 'Bloomberg', title: '中美经贸高层会谈寻求解决贸易分歧方案', time: '12分钟前', category: '国际贸易' },
            { source: 'BBC', title: '欧盟通过对华电动车关税最终方案', time: '28分钟前', category: '贸易政策' },
            { source: 'Al Jazeera', title: '中东局势持续紧张，原油价格波动加剧', time: '35分钟前', category: '地缘政治' },
            { source: 'WSJ', title: '全球芯片短缺缓解，半导体行业产能回升', time: '42分钟前', category: '科技' },
            { source: 'CNBC', title: '美股三大指数集体收涨，纳指创历史新高', time: '50分钟前', category: '股市' },
            { source: 'FT', title: '英国央行考虑提前降息应对经济放缓', time: '1小时前', category: '货币政策' },
            { source: 'Nikkei', title: '日本央行维持超宽松货币政策不变', time: '2小时前', category: '货币政策' },
            { source: 'Reuters', title: '欧洲能源危机缓解，天然气价格回落', time: '3小时前', category: '能源' },
            { source: 'Bloomberg', title: '全球通胀压力持续缓解，各国央行政策分化', time: '4小时前', category: '经济' },
        ];

        // 加载政策新闻
        function loadPolicyNews() {
            const newsList = document.getElementById('policyNewsList');
            if (!newsList) return;

            newsList.innerHTML = '';
            policyNewsData.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-source">${news.source}</div>
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                `;
                newsList.appendChild(newsItem);
            });
        }

        // 加载产业链新闻
        function loadIndustryNews() {
            const newsList = document.getElementById('industryNewsList');
            if (!newsList) return;

            newsList.innerHTML = '';
            industryNewsData.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-source">${news.source}</div>
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                `;
                newsList.appendChild(newsItem);
            });
        }

        // 加载全球视野新闻
        function loadGlobalNews() {
            const newsList = document.getElementById('globalNewsList');
            if (!newsList) return;

            newsList.innerHTML = '';
            globalNewsData.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-source">${news.source}</div>
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                `;
                newsList.appendChild(newsItem);
            });
        }

        // 每45秒更新一次中国新闻
        setInterval(updateChinaNews, 45000);
        
        // 地图控制按钮
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const icon = btn.textContent;
                if (icon === '🌐') {
                    world.pointRadius('size');
                } else if (icon === '🗺️') {
                    // 切换到2D视图
                    world.projection('orthographic');
                } else if (icon === '+') {
                    world.pointRadius(d => d.size * 1.5);
                } else if (icon === '−') {
                    world.pointRadius(d => d.size * 0.7);
                } else if (icon === '🔄') {
                    world.pointRadius('size');
                }
            });
        });
    