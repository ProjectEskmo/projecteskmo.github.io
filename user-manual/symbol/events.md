---
outline: deep
---

# 商品檔事件

下表為商品檔有關事件：

| 事件         | 註冊方式                             | 回傳物件                                  |
|--------------|--------------------------------------|-------------------------------------------|
| 商品檔更新   | [@eskmo.event.symbol.update](/)      | [UpdateSymbolResult](#UpdateSymbolResult) |
| 資券餘額更新 | [@eskmo.event.smybol.marginlimit](/) | [MarginLimitResult](#MarginLimitResult)   |

## UpdateSymbolResult

商品檔更新事件，通常發生於登入後斷線重連

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.symbol.update
def onUpdateSymbols(data):
    print("商品檔更新: ", data)
```

## MarginLimitResult

資券餘額更新事件，透過 API `<symbol>.update.marginlimit` 呼叫

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.symbol.marginlimit
def onMarginLimit(data):
    print("資券餘額更新: ", data)
```