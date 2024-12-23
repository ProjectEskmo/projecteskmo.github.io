---
outline: deep
---
# 即時最佳五檔

訂閱最佳五檔後，會取得 `Best5` 物件包含成交明細資訊

```python
from eskmo import api
from eskmo import Stock, Best5

api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    stock: Stock = api.stocks["2330"]
    stock.subscribe_best5() 

@api.event.best5.notify
def onBest5Notify(tick: Best5):
    print(f"Best5: {best5}")

if __name__ == '__main__':
    main()

```

### 最佳五檔資訊

`Tick` 包含：
| 項目     | 欄位                      | 備註 |
|----------|---------------------------|------|
| 代號     | code: str                 |      |
| 委賣盤   | bid: list[OrderBookLevel] |      |
| 委買盤   | ask: list[OrderBookLevel] |      |
| 是否緩搓 | simulate: bool            |      |

其中 `OrderBookLevel` 為該檔報價資訊:

| 項目 | 欄位         | 備註 |
|------|--------------|------|
| 價格 | price: float |      |
| 數量 | qty: int     |      |
