---
outline: deep
---

# 行情事件

## 即時行情

下表為即時行情相關事件：

| 事件         | 註冊方式                               | 回傳物件                                              |
|--------------|----------------------------------------|-------------------------------------------------------|
| 價格變動     | [@eskmo.event.quote.price_changed](/)  | [QuotePriceChangedResult](#QuotePriceChangedResult)   |
| 最佳一檔變動 | [@eskmo.event.quote.bidask_changed](/) | [QuoteBidAskChangedResult](#QuoteBidAskChangedResult) |
| 成交變動     | [@eskmo.event.quote.tick_changed](/)   | [QuoteTickChangedResult](#QuoteTickChangedResult)     |

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

| 事件         | 註冊方式                                    | 回傳物件                                              |
|--------------|---------------------------------------------|-------------------------------------------------------|
| 開始訂閱行情 | [@eskmo.event.quote.subscribe_start](/)     | [SubscribeStartResult](#SubscribeStartResult)         |
| 訂閱行情成功 | [@eskmo.event.quote.subscribe_success](/)   | [SubscribeSuccessResult](#SubscribeSuccessResult)     |
| 訂閱行情失敗 | [@eskmo.event.quote.subscribe_fail](/)      | [SubscribeFailResult](#SubscribeFailResult)           |
| 開始解訂行情 | [@eskmo.event.quote.unsubscribe_start](/)   | [UnsubscribeStartResult](#UnsubscribeStartResult)     |
| 解訂行情成功 | [@eskmo.event.quote.unsubscribe_success](/) | [UnsubscribeSuccessResult](#UnsubscribeSuccessResult) |
| 解訂行情失敗 | [@eskmo.event.quote.unsubscribe_fail](/)    | [UnsubscribeFailResult](#UnsubscribeFailResult)       |

## QuotePriceChangedResult

即時行情成交價格變動事件，透過 API `<symbol>.subscribe_quote()` 觸發

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.quote.price_changed
def onPriceChanged(data):
    print("即時行情價格變動: ", data)
```

## QuoteTickChangedResult

即時行情成交量變動事件，透過 API `<symbol>.subscribe_quote()` 觸發

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.quote.tick_changed
def onTickChanged(data):
    print("即時行情成交變動: ", data)
```

## QuoteBidAskChangedResult

即時行情最佳一檔變動事件，透過 API `<symbol>.subscribe_quote()` 觸發

可能是最佳一檔的價格或買賣量變動，也可能兩者都是

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.quote.bidask_changed
def onBidAskChanged(data):
    print("即時行情最佳一檔變動: ", data)
```