---
outline: deep
---

# 下單事件

## 證券委託

證券委託相關下單事件：

| 事件                              | 註冊方式                                                         | 回傳物件                                            |
|-----------------------------------|------------------------------------------------------------------|-----------------------------------------------------|
| 委託送出開始                      | [@api.event.order.send_start](/user-manual/order/stock/send)     | [OrderSendStartResult](#OrderSendStartResult)       |
| 委託送出失敗                      | [@api.event.order.send_fail](/user-manual/order/stock/send)      | [OrderSendFailResult](#OrderSendFailResult)         |
| 委託送出成功<br/>(不代表委託成功) | [@api.event.order.send_success](/user-manual/order/stock/send)   | [OrderSendSuccessResult](#OrderSendSuccessResult)   |
| 委託失敗                          | [@api.event.order.placed_fail](/user-manual/order/stock/send)    | [OrderPlaceFailResult](#OrderPlaceFailResult)       |
| 委託成功                          | [@api.event.order.placed_success](/user-manual/order/stock/send) | [OrderPlaceSuccessResult](#OrderPlaceSuccessResult) |
| 刪單失敗                          | [@api.event.order.cancel_fail](/user-manual/order/stock/cancel)  | [OrderCancelFailResult](#OrderCancelFailResult)     |

## OrderSendStartResult

委託送出開始事件，其中 `<order>` 指下單常數 `api.const.order`

|    屬性    |        型別        | 說明         | 備註 |
|:----------:|:------------------:|--------------|------|
| callbackId |       `int`        | 下單自編註記 |      |
|  account   |       `str`        | 下單帳戶     |      |
|   symbol   |       `str`        | 商品代碼     |      |
|  exchange  | `<order>.EXCHANGE` | 市場別       |      |
|   period   |  `<order>.PERIOD`  | 盤別         |      |
| order_flag |   `<order>.FLAG`   | 交易類型     |      |
|  buysell   |  `<order>.ACTION`  | 買賣別       |      |
|   price    |      `float`       | 委託價格     |      |
|    qty     |       `int`        | 委託數量     |      |
| price_type |  `<order>.PRICE`   | 委託價類型   |      |
| trade_type |  `<order>.TRADE`   | 交易單別     |      |


```python
from eskmo import api, OrderSendStartResult

@api.event.order.send_start
def orderSendStart(data: OrderSendStartResult):
    print("委託送出開始: ", data)
```

## OrderSendFailResult

委託送出失敗事件，其中 `<order>` 指下單常數 `api.const.order`

|    屬性    |        型別        | 說明         | 備註 |
|:----------:|:------------------:|--------------|------|
|   errors   |    `list[str]`     | 錯誤訊息     |      |
| error_code |       `str`        | 錯誤代碼     |      |
| callbackId |       `int`        | 下單自編註記 |      |
|  account   |       `str`        | 下單帳戶     |      |
|   symbol   |       `str`        | 商品代碼     |      |
|  exchange  | `<order>.EXCHANGE` | 市場別       |      |
|   period   |  `<order>.PERIOD`  | 盤別         |      |
| order_flag |   `<order>.FLAG`   | 交易類型     |      |
|  buysell   |  `<order>.ACTION`  | 買賣別       |      |
|   price    |      `float`       | 委託價格     |      |
|    qty     |       `int`        | 委託數量     |      |
| price_type |  `<order>.PRICE`   | 委託價類型   |      |
| trade_type |  `<order>.TRADE`   | 交易單別     |      |

```python
from eskmo import api, OrderSendFailResult

@api.event.order.send_fail
def orderSendFail(data: OrderSendFailResult):
    print("委託送出失敗: ", data)
```

## OrderSendSuccessResult

委託送出成功事件， 其中 `<order>` 指下單常數 `api.const.order`

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
def orderSendSuccess(data: OrderSendSuccessResult):
    print("委託送出成功: ", data)
```

## PlacedOrderResult

委託成功或失敗後，會在事件中取得的委託結果物件

|    屬性    |        型別        | 說明       | 備註 |
|:----------:|:------------------:|------------|------|
|   seq_no   |       `str`        | 委託序號   |      |
| error_code |       `str`        | 錯誤代碼   |      |
|  account   |       `str`        | 下單帳戶   |      |
|   symbol   |       `str`        | 商品代碼   |      |
|  exchange  | `<order>.EXCHANGE` | 市場別     |      |
|   period   |  `<order>.PERIOD`  | 盤別       |      |
| order_flag |   `<order>.FLAG`   | 交易類型   |      |
|  buysell   |  `<order>.ACTION`  | 買賣別     |      |
|   price    |      `float`       | 委託價格   |      |
|    qty     |       `int`        | 委託數量   |      |
| price_type |  `<order>.PRICE`   | 委託價類型 |      |
| trade_type |  `<order>.TRADE`   | 交易單別   |      |

## OrderPlaceFailResult

委託失敗事件觸發可得

|    屬性    |                  型別                   | 說明       | 備註 |
|:----------:|:---------------------------------------:|------------|------|
|   errors   |               `list[str]`               | 錯誤訊息   |      |
| error_code |                  `str`                  | 錯誤代碼   |      |
| thread_id  |                  `str`                  | 執行緒編號 |      |
|   order    | [PlacedOrderResult](#placedorderresult) | 委託物件   |      |

```python
@api.event.order.placed_fail
def onOrderPlacedFail(data: OrderPlaceFailResult):
    print("委託失敗: ", data)
```

## OrderPlaceSuccessResult

委託成功事件觸發可得

|   屬性    |                  型別                   | 說明       | 備註 |
|:---------:|:---------------------------------------:|------------|------|
| thread_id |                  `str`                  | 執行緒編號 |      |
|   order   | [PlacedOrderResult](#placedorderresult) | 委託物件   |      |

```python
@api.event.order.placed_success
def onOrderPlacedSuccess(data: OrderPlaceSuccessResult):
    print("委託成功: ", data)
```

## OrderCancelFailResult

刪除委託失敗事件觸發可得

|         屬性         |    型別     | 說明         | 備註 |
|:--------------------:|:-----------:|--------------|------|
|     order_class      |    `str`    | 委託類型     |      |
|    cancel_action     |    `str`    | 刪單行為     |      |
|        seq_no        |    `str`    | 委託序號     |      |
| is_already_cancelled |   `bool`    | 是否已經刪除 |      |
|        errors        | `list[str]` | 錯誤訊息     |      |
|      error_code      |    `str`    | 錯誤代碼     |      |



```python
@api.event.order.cancel_failed
def onOrderCancelFailed(data: OrderCancelFailResult):
    print("刪單失敗: ", data)
```

