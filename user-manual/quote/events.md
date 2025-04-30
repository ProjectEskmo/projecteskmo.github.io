---
outline: deep
---

# 行情事件

## 即時行情

下表為即時行情相關事件：

| 事件         | 註冊方式                                                         | 回傳物件        |
|--------------|------------------------------------------------------------------|-----------------|
| 價格變動     | [@api.event.quote.price_changed](/user-manual/quote/live/quote)  | [Quote](#Quote) |
| 最佳一檔變動 | [@api.event.quote.bidask_changed](/user-manual/quote/live/quote) | [Quote](#Quote) |
| 成交變動     | [@api.event.quote.tick_changed](/user-manual/quote/live/quote)   | [Quote](#Quote) |

> [!INFO]
>
> 當新的行情發生時，會屬於三種變動之一：
>
> - 如果成交價量沒有變動，就會觸發最佳一檔變動
>
> - 如果有新成交，但成交價不變，就會觸發成交變動
>
> - 如果有新成交，而且成交價有變動，則是觸發價格變動
>
> 行情只要觸發價格變動，就不會觸發成交變動；觸發成交變動，就不會觸發最佳一檔變動

訂閱與解訂行情事件如下：

| 事件         | 註冊方式                                                              | 回傳物件                                              |
|--------------|-----------------------------------------------------------------------|-------------------------------------------------------|
| 開始訂閱行情 | [@api.event.quote.subscribe_start](/user-manual/quote/live/quote)     | [SubscribeStartResult](#SubscribeStartResult)         |
| 訂閱行情成功 | [@api.event.quote.subscribe_success](/user-manual/quote/live/quote)   | [SubscribeSuccessResult](#SubscribeSuccessResult)     |
| 訂閱行情失敗 | [@api.event.quote.subscribe_fail](/user-manual/quote/live/quote)      | [SubscribeFailResult](#SubscribeFailResult)           |
| 開始解訂行情 | [@api.event.quote.unsubscribe_start](/user-manual/quote/live/quote)   | [UnsubscribeStartResult](#UnsubscribeStartResult)     |
| 解訂行情成功 | [@api.event.quote.unsubscribe_success](/user-manual/quote/live/quote) | [UnsubscribeSuccessResult](#UnsubscribeSuccessResult) |
| 解訂行情失敗 | [@api.event.quote.unsubscribe_fail](/user-manual/quote/live/quote)    | [UnsubscribeFailResult](#UnsubscribeFailResult)       |

## Quote



行情事件回傳的行情 `Quote` 物件結構如下：

| 屬性名           | 型別    | 說明         | 備註                                                                    |
|------------------|---------|--------------|-------------------------------------------------------------------------|
| `market`         | `str`   | 市場別       | 整股: `Stock` 零股: `OddLots`                                           |
| `decimal`        | `int`   | 小數點位數   | 例：`2` 表示價格到小數第 2 位                                           |
| `sector`         | `int`   | 類股別       | 例：`1` 水泥, `2` 食品等                                                |
| `symbol`         | `str`   | 商品代碼     | 例：`2330`                                                              |
| `name`           | `str`   | 商品名稱     | 例：`台積電`                                                            |
| `high`           | `float` | 最高價       |                                                                         |
| `open`           | `float` | 開盤價       |                                                                         |
| `low`            | `float` | 最低價       |                                                                         |
| `close`          | `float` | 成交價       |                                                                         |
| `tick_qty`       | `float` | 單量         |                                                                         |
| `ref`            | `float` | 昨收價       | 除權息時是平盤價                                                        |
| `bid`            | `float` | 買價         |                                                                         |
| `bid_qty`        | `float` | 買量         |                                                                         |
| `ask`            | `float` | 賣價         |                                                                         |
| `ask_qty`        | `int`   | 賣量         |                                                                         |
| `bid_total_qty`  | `int`   | 買盤量       | 今日全部買單累積量（外盤量）                                            |
| `ask_total_qty`  | `int`   | 賣盤量       | 今日全部賣單累積量（內盤量）                                            |
| `future_oi`      | `int`   | 期貨未平倉量 | 期貨適用，股票為 0                                                      |
| `qty_total`      | `int`   | 總量         |                                                                         |
| `qty_yesterday`  | `int`   | 昨量         |                                                                         |
| `up`             | `float` | 漲停價       |                                                                         |
| `down`           | `float` | 跌停價       |                                                                         |
| `simulate`       | `bool`  | 試算揭示     | `0`:一般 `1`: 試算                                                      |
| `day_trade_type` | `int`   | 可否當沖     | `0`: 一般 `1`: 可先買後賣現股當沖<br/>`2`: 可先買後賣和先賣後買現股當沖 |
| `trading_day`    | `str`   | 交易日       | 格式 `YYYYMMDD`<br/>若當日非交易日時, 資料為前一交易日                  |

```python
from eskmo import api, Quote

@api.event.quote.bidask_changed
def onBidAskChanged(quote: Quote):
    print("最新買價: ", quote.ask)
```