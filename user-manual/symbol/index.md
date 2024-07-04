---
outline: deep
prev:
  text: '帳戶'
  link: '/user-manual/account/index'
next:
  text: '商品檔資訊'
  link: '/user-manual/symbol/information'
---

# 商品檔

**商品檔 (Symbol)** 是交易所上特定金融商品的概稱，包含商品基本檔案、交易資訊等。

商品檔包含如商品代碼、漲跌停價等，此類資訊在登入後就會全數準備完成。

除此之外，還有當天會隨時變動的資訊，例如是否緩搓、是否為處置股票等。

此類資訊就得透過 API 呼叫主動更新，並透過 [註冊事件](../../getting-started/event-registration) 取得最新資訊。

> [!WARNING]
> 
> 商品檔資訊每日 8:15 會進行更新，若登入後長期沒有關閉，需要重新取得商品檔