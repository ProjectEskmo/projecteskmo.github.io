---
outline: deep
---

# 商品檔事件

下表為商品檔有關事件：

| 事件         | 註冊方式                           | 回傳物件                                |
|--------------|------------------------------------|-----------------------------------------|
| 資券餘額更新 | [@api.event.smybol.marginlimit](/) | [MarginLimitResult](#MarginLimitResult) |

## MarginLimitResult

資券餘額更新事件，包含新的資券餘額查詢結果

回傳物件為 `StockMarginInfo`，參數請見 [資券餘額資訊](/user-manual/symbol/margin.html#資券餘額資訊)

```python
from eskmo import StockMarginInfo

@api.event.symbol.margin_limit
def onMarginLimit(data: StockMarginInfo):
    print("資券餘額更新: ", data)
```