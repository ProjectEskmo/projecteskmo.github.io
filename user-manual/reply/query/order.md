---
outline: deep
---

# 一般委託查詢

與查詢最新回報相同，就是在對應位置後綴 `.reply` 改成 `.replys` 進行查詢動作

## 透過委託物件，查詢歷史回報

藉由委託物件 `StockOrder` 查詢，其中 `order.replys` 可以查詢到歷史回報紀錄

```python
from eskmo import api
from eskmo import User, Stock, StockOrder, StockOrders
api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")

    stock: Stock = api.stocks["2897"]
    order: StockOrder = stock.order(cst.ORDER.ACTION.BUY, 9.13, 1).send(user.id)
    reply = order.replys
    print(replys)

```

除了從送出的委託中查詢回報，也可以透過商品檔取出該檔今日委託 `StockOrders`

再從委託中檢索，取出所有有關的回報 `order.replys`

```python
from eskmo import api
from eskmo import User, Stock, StockOrder, StockOrders
api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")
    stock: Stock = api.stocks["2897"]

    orders: StockOrders = stock.orders(user.id)
    for order in orders:
        for reply in replys:
            print(reply)    

```