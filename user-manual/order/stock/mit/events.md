---
outline: deep
---

# 證券 MIT 事件

證券 MIT 相關下單事件：

| 事件                                  | 註冊方式                                                             | 回傳物件                                                  |
|---------------------------------------|----------------------------------------------------------------------|-----------------------------------------------------------|
| MIT 委託送出開始                      | [@api.event.mit_order.send_start](/user-manual/order/stock/mit/send) | [MITOrderSendStartResult](#mitordersendstartresult)       |
| MIT 委託送出失敗                      | [@api.event.mit_order.send_fail](/user-manual/order/stock/mit/send)  | [MITOrderSendFailResult](#mitordersendfailresult)         |
| MIT 委託送出成功<br/>(不代表委託成功) | [@api.event.mit_order.send_success](/user-manual/order/stock/send)   | [MITOrderSendSuccessResult](#mitordersendsuccessresult)   |
| MIT 委託失敗                          | [@api.event.mit_order.placed_fail](/user-manual/order/stock/send)    | [MITOrderPlaceFailResult](#mitorderplacefailresult)       |
| MIT 委託成功                          | [@api.event.mit_order.placed_success](/user-manual/order/stock/send) | [MITOrderPlaceSuccessResult](#mitorderplacesuccessresult) |
| MIT 刪單失敗                          | [@api.event.mit_order.cancel_fail](/user-manual/order/stock/cancel)  | [MITOrderCancelFailResult](#mitordercancelfailresult)     |

## MITOrderSendStartResult

MIT 委託送出開始事件，其中 `<mit>` 指下單常數 `api.const.SmartOrder.MIT`

|             屬性             |        型別         | 說明         | 備註 |
|:----------------------------:|:-------------------:|--------------|------|
|          callbackId          |        `int`        | 下單自編註記 |      |
|           account            |        `str`        | 下單帳戶     |      |
|            symbol            |        `str`        | 商品代碼     |      |
|           buysell            |   `<mit>.ACTION`    | 買賣別       |      |
|            price             |       `float`       | 委託價格     |      |
|             qty              |        `int`        | 委託數量     |      |
|        trigger_price         |       `float`       | 觸發價       |      |
|         trigger_dir          | `<mit>.TRIGGER_DIR` | 觸發價       |      |
|          order_flag          | `<mit>.ORDER_FLAG`  | 交易類型     |      |
|          price_type          | `<mit>.PRICE_TYPE`  | 價別         |      |
|          trade_type          | `<mit>.ORDER_TYPE`  | 單別         |      |
| is_pre_trade_risk_controlled |       `bool`        | 是否預風控   |      |
|         is_gtc_order         |       `bool`        | 是否長效單   |      |
|           gtc_date           |        `str`        | 長效到期日   |      |
|          gtc_end_by          | `<mit>.LONG_END_BY` | 長效停止條件 |      |


```python
from eskmo import api, MITOrderSendStartResult

@api.event.mit_order.send_start
def mitOrderSendStart(data: MITOrderSendStartResult):
    print("MIT 委託送出開始: ", data)
```

## MITOrderSendFailResult

MIT 委託送出開始事件，其中 `<mit>` 指下單常數 `api.const.SmartOrder.MIT`

|             屬性             |        型別         | 說明         | 備註 |
|:----------------------------:|:-------------------:|--------------|------|
|            errors            |     `list[str]`     | 錯誤訊息     |      |
|          error_code          |        `str`        | 錯誤代碼     |      |
|          callbackId          |        `int`        | 下單自編註記 |      |
|           account            |        `str`        | 下單帳戶     |      |
|            symbol            |        `str`        | 商品代碼     |      |
|           buysell            |   `<mit>.ACTION`    | 買賣別       |      |
|            price             |       `float`       | 委託價格     |      |
|             qty              |        `int`        | 委託數量     |      |
|        trigger_price         |       `float`       | 觸發價       |      |
|         trigger_dir          | `<mit>.TRIGGER_DIR` | 觸發價       |      |
|          order_flag          | `<mit>.ORDER_FLAG`  | 交易類型     |      |
|          price_type          | `<mit>.PRICE_TYPE`  | 價別         |      |
|          trade_type          | `<mit>.ORDER_TYPE`  | 單別         |      |
| is_pre_trade_risk_controlled |       `bool`        | 是否預風控   |      |
|         is_gtc_order         |       `bool`        | 是否長效單   |      |
|           gtc_date           |        `str`        | 長效到期日   |      |
|          gtc_end_by          | `<mit>.LONG_END_BY` | 長效停止條件 |      |

```python
from eskmo import api, MITOrderSendFailResult

@api.event.mit_order.send_fail
def mitOrderSendFail(data: MITOrderSendFailResult):
    print("MIT 委託送出失敗: ", data)
```

## MITOrderSendSuccessResult

MIT 委託送出成功事件，其中 `<mit>` 指下單常數 `api.const.SmartOrder.MIT`

|    屬性     |        型別        | 說明         | 備註 |
|:-----------:|:------------------:|--------------|------|
|    state    |       `str`        | 委託狀態     |      |
|   created   |     `datetime`     | 委託送出時間 |      |
| callback_id |       `int`        | 下單自編註記 |      |
|  thread_id  |       `str`        | 執行緒編號   |      |
|   account   |       `str`        | 下單帳戶     |      |
|   symbol    |       `str`        | 商品代碼     |      |
|  exchange   | `<order>.EXCHANGE` | 市場別       |      |
|   period    |  `<order>.PERIOD`  | 盤別         |      |
| order_flag  |   `<order>.FLAG`   | 交易類型     |      |
|   buysell   |  `<order>.ACTION`  | 買賣別       |      |
|    price    |      `float`       | 委託價格     |      |
|     qty     |       `int`        | 委託數量     |      |
| price_type  |  `<order>.PRICE`   | 委託價類型   |      |
| trade_type  |  `<order>.TRADE`   | 交易單別     |      |


```python
from eskmo import api, OrderSendSuccessResult

@api.event.order.send_success
def mitOrderSendSuccess(data: OrderSendSuccessResult):
    print("委託送出成功: ", data)
```

## PlacedMITOrderResult

MIT 委託成功或失敗後，會在事件中取得的 MIT 委託結果物件

|             屬性             |        型別         | 說明         | 備註 |
|:----------------------------:|:-------------------:|--------------|------|
|           account            |        `str`        | 下單帳戶     |      |
|            symbol            |        `str`        | 商品代碼     |      |
|           buysell            |   `<mit>.ACTION`    | 買賣別       |      |
|            price             |       `float`       | 委託價格     |      |
|             qty              |        `int`        | 委託數量     |      |
|        trigger_price         |       `float`       | 觸發價       |      |
|         trigger_dir          | `<mit>.TRIGGER_DIR` | 觸發價       |      |
|          order_flag          | `<mit>.ORDER_FLAG`  | 交易類型     |      |
|          price_type          | `<mit>.PRICE_TYPE`  | 價別         |      |
|          trade_type          | `<mit>.ORDER_TYPE`  | 單別         |      |
| is_pre_trade_risk_controlled |       `bool`        | 是否預風控   |      |
|         is_gtc_order         |       `bool`        | 是否長效單   |      |
|           gtc_date           |        `str`        | 長效到期日   |      |
|          gtc_end_by          | `<mit>.LONG_END_BY` | 長效停止條件 |      |

## MITOrderPlaceSuccessResult

MIT 委託成功後，會在事件中取得的委託結果物件

|   屬性    |                     型別                      | 說明         | 備註 |
|:---------:|:---------------------------------------------:|--------------|------|
| thread_id |                     `str`                     | 執行緒編號   |      |
|   order   | [PlacedMITOrderResult](#placedmitorderresult) | MIT 委託物件 |      |

```python
from eskmo import api, MITOrderPlaceSuccessResult

@api.event.mit_order.placed_success
def mitOrderSendSuccess(data: MITOrderPlaceSuccessResult):
    print("MIT 委託成功: ", data)
```

## MITOrderPlaceFailResult

MIT 委託失敗事件觸發可得

|    屬性    |                     型別                      | 說明         | 備註 |
|:----------:|:---------------------------------------------:|--------------|------|
|   order    | [PlacedMITOrderResult](#placedmitorderresult) | MIT 委託物件 |      |
|   errors   |                  `list[str]`                  | 錯誤訊息     |      |
| error_code |                     `str`                     | 錯誤代碼     |      |
| thread_id  |                     `str`                     | 執行緒編號   |      |

```python
@api.event.mit_order.placed_fail
def mitOrderPlacedFail(data: MITOrderPlaceFailResult):
    print("MIT 委託失敗: ", data)
```