---
outline: deep
---

# 回報事件

## 證券委託

下表為證券委託回報事件：

| 事件     | 註冊方式                                                   | 回傳物件                                |
|----------|------------------------------------------------------------|-----------------------------------------|
| 委託通知 | [@api.event.order.notify](/user-manual/reply/latest/order) | [OrderNotifyResult](#OrderNotifyResult) |

## OrderNotifyResult

委託通知事件，收到最新回報後委託收到更新，就會觸發獲得

| 屬性  |            型別             | 說明         | 備註                         |
|:-----:|:---------------------------:|--------------|------------------------------|
| count |            `int`            | 委託流水號   | Eskmo 自定義，可判斷委託先後 |
| order | [OrderStatus](#orderstatus) | 委託當前狀態 |                              |

count: int = 0
    order: OrderStatus = None

```python
@api.event.order.notify
def onOrderNotify(data: OrderNotifyResult):
    print("委託通知: ", data)
```

## OrderStatus

委託當前狀態，在委託通知事件觸發後可得

|     屬性      |      型別       | 說明       | 備註 |
|:-------------:|:---------------:|------------|------|
|     reply     | [Reply](#reply) | 最新回報   |      |
|   is_closed   |     `bool`      | 是否結束   |      |
|    volume     |      `int`      | 原始委託數 |      |
| volume_remain |      `int`      | 剩餘委託數 |      |
| volume_cancel |      `int`      | 刪除委託數 |      |
|  volume_deal  |      `int`      | 成交委託數 |      |

回傳結果中的委託數量以股數計

## Reply

單筆委託可能有多次狀態更新，每次狀態變動都會對應到一個回報物件

|             屬性              |                  型別                   | 說明 | 備註 |
|:-----------------------------:|:---------------------------------------:|------|------|
|              num              |                  `int`                  |      |      |
|            key_no             |                  `str`                  |      |      |
|            market             |                  `str`                  |      |      |
|             type              |                  `str`                  |      |      |
|            status             |                  `str`                  |      |      |
|            broker             |                  `str`                  |      |      |
|            cust_no            |                  `str`                  |      |      |
|         buysell_info          |                  `str`                  |      |      |
|          exchange_id          |                  `str`                  |      |      |
|            symbol             |                  `str`                  |      |      |
|         strike_price          |                  `str`                  |      |      |
|            book_no            |                  `str`                  |      |      |
|             price             |                  `str`                  |      |      |
|           numerator           |                  `str`                  |      |      |
|          denominator          |                  `str`                  |      |      |
|          price_lags           |     [list[ReplyPrice]](#replyprice)     |      |      |
|            volume             |                  `int`                  |      |      |
|          before_qty           |                  `int`                  |      |      |
|           after_qty           |                  `int`                  |      |      |
|           date_str            |                  `str`                  |      |      |
|           time_str            |                  `str`                  |      |      |
|            ok_seq             |                  `str`                  |      |      |
|            sub_id             |                  `str`                  |      |      |
|            sale_no            |                  `str`                  |      |      |
|             agent             |                  `str`                  |      |      |
|          trade_date           |                  `str`                  |      |      |
|            msg_no             |                  `str`                  |      |      |
|           pre_order           |                  `str`                  |      |      |
|        commodity_lags         | [list[ReplyCommodity]](#replycommodity) |      |      |
|         execution_no          |                  `str`                  |      |      |
|         price_symbol          |                  `str`                  |      |      |
|           reserved            |                  `str`                  |      |      |
|        order_effective        |                  `str`                  |      |      |
|           call_put            |                  `str`                  |      |      |
|           order_seq           |                  `str`                  |      |      |
|           error_msg           |                  `str`                  |      |      |
| cancel_order_mark_by_exchange |                  `str`                  |      |      |
|      exchange_tandem_msg      |                  `str`                  |      |      |
|            seq_no             |                  `str`                  |      |      |
|            buysell            |                  `str`                  |      |      |
|          trade_type           |                  `str`                  |      |      |
|          order_type           |                  `str`                  |      |      |
|          price_type           |                  `str`                  |      |      |

## ReplyPrice

回報價格分子分母物件

|    屬性     | 型別  | 說明 | 備註 |
|:-----------:|:-----:|------|------|
|    price    | `str` | 價格 |      |
|  numerator  | `str` | 分子 |      |
| denominator | `str` | 分母 |      |

## ReplyCommodity

商品期貨選擇權的回報物件

|     屬性     | 型別  | 說明         | 備註 |
|:------------:|:-----:|--------------|------|
|    com_id    | `str` | 商品 ID      |      |
|  year_month  | `str` | 期貨結算年月 |      |
| strike_price | `str` | 選擇權履約價 |      |