import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Eskmo",
    base: "/",
    locales: {
        root: {
            label: '中文',
            lang: 'zh'
        },
    },
    description: "金融量化交易 API ｜ 提供開發者、交易員與金融專家，輕鬆建立交易程式",
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    themeConfig: {
        outlineTitle: '目錄',
        logo: '/assets/eskmo-logo.jpg',
        siteTitle: 'Eskmo',
        nav: [
            // { text: '立即開始', link: '/getting-started/login' },
            { text: '使用手冊', link: '/user-manual/prerequisites/index' },
            { text: 'API 文件', link: '/reference/index' },
            { text: '進階指南', link: '/advanced-guide/architecture/index' },
            {
                text: '0.0.1',
                items: [
                    { text: '更新日誌', link: '/overview/changelog' },
                    { text: '版本說明', link: '/overview/version' },
                ]
            }
        ],
        sidebar: [
            {
                text: '立即開始',
                items: [
                    { text: '登入', link: '/getting-started/login' },
                    { text: '註冊事件', link: '/getting-started/event-registration' },
                    { text: '訂閱行情', link: '/getting-started/subscribe-quote' },
                    { text: '下單', link: '/getting-started/send-order' },
                ]
            },
            {
                text: '使用手冊',
                items: [
                    {
                        text: '環境配置',
                        link: '/user-manual/prerequisites/index',
                        items: [
                            { text: '安裝', link: '/user-manual/prerequisites/installation' },
                            { text: 'API 測試', link: '/user-manual/prerequisites/api-testing' },
                            { text: '日誌', link: '/user-manual/prerequisites/logging' },
                            { text: '使用限制', link: '/user-manual/prerequisites/rate-limit' },
                        ]
                    },
                    {
                        text: '帳戶',
                        link: '/user-manual/account/index',
                        items: [
                            { text: '登入', link: '/user-manual/account/login' },
                            { text: '獲取商品檔', link: '/user-manual/account/symbols' },
                            { text: '帳戶操作', link: '/user-manual/account/usages' },
                            { text: '帳戶事件', link: '/user-manual/account/events' },
                        ]
                    },
                    {
                        text: '商品檔',
                        link: '/user-manual/symbol/index',
                        items: [
                            { text: '基本資訊', link: '/user-manual/symbol/information' },
                            { text: '融資餘額', link: '/user-manual/symbol/margin' },
                            { text: '商品檔事件', link: '/user-manual/symbol/events' },
                        ]
                    },
                    {
                        text: '行情',
                        link: '/user-manual/quote/index',
                        items: [
                            {
                                text: '即時行情',
                                link: '/user-manual/quote/live/index',
                                items: [
                                    { text: '行情', link: '/user-manual/quote/live/quote' },
                                    { text: '成交明細', link: '/user-manual/quote/live/tick' },
                                    { text: '最佳五檔', link: '/user-manual/quote/live/best5' },
                                    { text: 'K 線', link: '/user-manual/quote/live/kline' },
                                ]
                            },
                            {
                                text: '歷史行情',
                                link: '/user-manual/quote/historical/index',
                                items: [
                                    { text: '今日成交明細', link: '/user-manual/quote/historical/tick' },
                                    { text: '歷史 K 線', link: '/user-manual/quote/historical/kline' },
                                ]
                            },
                            { text: '行情事件', link: '/user-manual/quote/events' },
                        ]
                    },
                    {
                        text: '下單',
                        link: '/user-manual/order/index',
                        items: [
                            {
                                text: '證券委託',
                                link: '/user-manual/order/stock/index',
                                items: [
                                    { text: '送出委託', link: '/user-manual/order/stock/send' },
                                    { text: '改量與改價', link: '/user-manual/order/stock/edit' },
                                    { text: '刪單', link: '/user-manual/order/stock/cancel' },
                                ]
                            },
                            { text: '委託事件', link: '/user-manual/order/events' },
                        ]
                    },
                    {
                        text: '智慧單',
                        link: '/user-manual/smart-order/index',
                        items: [
                            {
                                text: '證券智慧單',
                                link: '/user-manual/smart-order/stock/index',
                                items: [
                                    { text: '送出智慧單', link: '/user-manual/smart-order/stock/send' },
                                    { text: '智慧單改量與改價', link: '/user-manual/smart-order/stock/edit' },
                                    { text: '智慧單刪單', link: '/user-manual/smart-order/stock/cancel' },
                                    { text: 'MIT 智慧單', link: '/user-manual/smart-order/stock/mit' },
                                ]
                            },
                            { text: '智慧單事件', link: '/user-manual/smart-order/events' },
                        ]
                    },
                    {
                        text: '回報',
                        link: '/user-manual/reply/index',
                        items: [
                            {
                                text: '最新回報',
                                link: '/user-manual/reply/latest/index',
                                items: [
                                    { text: '最新委託回報', link: '/user-manual/reply/latest/order' },
                                    { text: '最新智慧單回報', link: '/user-manual/reply/latest/smart-order' },
                                ]
                            },
                            {
                                text: '委託查詢',
                                link: '/user-manual/reply/query/index',
                                items: [
                                    { text: '一般委託查詢', link: '/user-manual/reply/query/order' },
                                    { text: '智慧單查詢', link: '/user-manual/reply/query/smart-order' },
                                ]
                            },
                            {
                                text: '倉位查詢',
                                link: '/user-manual/reply/position/index',
                                items: [
                                    { text: '一般委託', link: '/user-manual/reply/position/order' },
                                    { text: '智慧單', link: '/user-manual/reply/position/smart-order' },
                                ]
                            },
                            { text: '回報事件', link: '/user-manual/reply/events' },
                        ]
                    }, {
                        text: '帳務',
                        link: '/user-manual/accounting/index',
                        items: [
                            { text: '部位損益', link: '/user-manual/accounting/position-pnl' },
                            { text: '帳戶餘額', link: '/user-manual/accounting/account-balance' },
                            { text: '帳務事件', link: '/user-manual/accounting/events' },

                        ]
                    }, {
                        text: '系統',
                        link: '/user-manual/system/index',
                        items: [
                            { text: '系統錯誤', link: '/user-manual/system/error' },
                            { text: '系統日誌', link: '/user-manual/system/logger' },
                            { text: '系統事件', link: '/user-manual/system/events' },
                        ]
                    },
                ]
            },
            {
                text: '進階指南',
                items: [
                    {
                        text: '架構設計',
                        link: '/advanced-guide/architecture/index',
                        // items: [
                        //     { text: '資料結構', link: '/advanced-guide/architecture/data-structure' },
                        //     // { text: 'TCP (ZMQ)', link: '/advanced-guide/client/tcp' },
                        // ]
                    },
                    // {
                    //     text: '客戶端',
                    //     link: '/user-manual/advanced-guide/client',
                    //     items: [
                    //         { text: 'Python', link: '/user-manual/advanced-guide/client/terminal' },
                    //         { text: 'TCP (ZMQ)', link: '/user-manual/advanced-guide/client/tcp' },
                    //         { text: 'WebSocket (socketio)', link: '/user-manual/advanced-guide/client/web-socket' },
                    //         { text: 'AP (Eskmo)', link: '/user-manual/advanced-guide/client/application' },
                    //     ]
                    // },
                    // {
                    //     text: '特殊模式',
                    //     link: '/user-manual/advanced-guide/special-mode',
                    //     items: [
                    //         { text: '沙盒模式', link: '/user-manual/advanced-guide/special-mode/sandbox' },
                    //         { text: '錄製模式', link: '/user-manual/advanced-guide/special-mode/recording' },
                    //         { text: '重播模式', link: '/user-manual/advanced-guide/special-mode/replay' },
                    //     ]
                    // },
                    // { text: '進階配置', link: '/user-manual/advanced-guide/configuration' },
                    // { text: '非同步交互', link: '/user-manual/advanced-guide/async' },
                    // { text: '構建', link: '/user-manual/advanced-guide/build' },
                    // {
                    //     text: '調試',
                    //     link: '/user-manual/advanced-guide/debug',
                    //     items: [
                    //         { text: 'COM 元件', link: '/user-manual/advanced-guide/debug/com' },
                    //         { text: '日誌設定', link: '/user-manual/advanced-guide/debug/logger' },
                    //         { text: '登入階段與連線', link: '/user-manual/advanced-guide/debug/connection' },
                    //         { text: '斷線與重新登入', link: '/user-manual/advanced-guide/debug/disconnection' },
                    //     ]
                    // },
                ]
            },
            { text: '版本說明', link: '/overview/version' },
            { text: '作品集', link: '/overview/awesome' },
            { text: '常用連結', link: '/overview/links' },
            { text: '更新日誌', link: '/overview/changelog' },
            { text: '常見問題', link: '/overview/faq' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ProjectEskmo/eskmo' }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜尋',
                                buttonAriaLabel: '搜尋'
                            },
                            modal: {
                                displayDetails: '顯示完整列表',
                                resetButtonTitle: '重新搜尋',
                                backButtonTitle: '關閉搜尋',
                                noResultsText: '沒有結果',
                                footer: {
                                    selectText: '選擇',
                                    selectKeyAriaLabel: '輸入',
                                    navigateText: '瀏覽',
                                    navigateUpKeyAriaLabel: '上箭頭',
                                    navigateDownKeyAriaLabel: '下箭頭',
                                    closeText: '關閉',
                                    closeKeyAriaLabel: 'ESC'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
