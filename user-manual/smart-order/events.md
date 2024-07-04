---
outline: deep
---

# 智慧單事件


## MIT 智慧單

下表為 MIT 智慧單有關事件：

| 事件           | 註冊方式                                  | 回傳物件                                                  |
|----------------|-------------------------------------------|-----------------------------------------------------------|
| 開始送出智慧單 | [@eskmo.event.mit_order.send_start](/)    | [MITOrderSendStartResult](#MITOrderSendStartResult)       |
| 送出智慧單失敗 | [@eskmo.event.mit_order.send_fail](/)     | [MITOrderSendFailResult](#MITOrderSendFailResult)         |
| 送出智慧單成功 | [@eskmo.event.mit_order.send_success](/)  | [MITOrderSendSuccessResult](#MITOrderSendSuccessResult)   |
| 智慧單掛單成功 | [@eskmo.event.mit_order.place_success](/) | [MITOrderPlaceSuccessResult](#MITOrderPlaceSuccessResult) |
| 智慧單掛單失敗 | [@eskmo.event.mit_order.place_fail](/)    | [MITOrderPlaceFailResult](#MITOrderPlaceFailResult)       |
| 智慧單刪單失敗 | [@eskmo.event.mit_order.cancel_fail](/)   | [MITOrderCancelFailResult](#MITOrderCancelFailResult)     |
| 智慧單變動     | [@eskmo.event.mit_order.changed](/)       | [MITOrderChangedResult](#MITOrderChangedResult)           |

## MITOrderSendStartResult

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
```python
@eskmo.event.mit_order.send_start
def onMITSendStart(data):
    print("MIT 送單開始: ", data)
```