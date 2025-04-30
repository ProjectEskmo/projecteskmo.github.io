# 更新日誌

### 0.0.6 (2025-04-30)

[PyPI Release](https://pypi.org/project/eskmo/0.0.6/)

1. SKCOM API 版本升級至 `2.13.53`
2. 支持 Python 多個版本: `3.9`, `3.10`, `3.11`, `3.12`, `3.13` (詳細見 [Built Distributions](https://pypi.org/project/eskmo/0.0.6/#files))
3. 修正 `from eskmo import api` 找不到 `api` 問題

> [!WARNING]
>
> 群益 SKCOM API 從 2.13.53 版本起, 需下載 **驗證小工具 (SKCOMVerifyDJ)** 驗證後才可使用
>
> 詳細請見 [群益 API 申請說明](https://www.capital.com.tw/web/#/download/ApiTrading/ApiTradinginfo)

### 0.0.5 (2025-01-23)

[PyPI Release](https://pypi.org/project/eskmo/0.0.5/)

1. SKCOM API 版本升級至 `2.13.52`
2. SKCOM 下單與刪單預設使用代理主機 (Proxy)
3. 支持在 CLI 可透過 `Ctrl+C` 停止運行
4. 修正在未訂閱商品檔之下， `stock.quote` 無法取得問題

### 0.0.4 (2024-12-17)

[PyPI Release](https://pypi.org/project/eskmo/0.0.4/)

1. 支持帳務相關操作
2. 支持透過 CLI 安裝 SKCOM API

> [!INFO]
>
> 0.0.3 (含) 以前為測試版本，不再予以提供