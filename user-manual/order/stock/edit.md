---
outline: deep
---

# 修改委託

證券委託修改可以 **改價** 與 **改量**，只需要調用 `order` 底下的函數操作

若要獲取改價改量的通知，請註冊回報事件 `@api.event.order.notify` 取得

更多請見 [註冊事件取得最新回報](/user-manual/reply/latest/order#註冊事件取得最新回報) 章節

## 改量

透過 `order.decrease_qty()` 即可改量，對於證券整股，單位是 `張`，只能減量

其中注意 `order.qty` 為委託原始量，委託成功後就不會改變

因此要確認減量後的剩餘委託量，需使用 `order.remain_qty`



```python
from eskmo import api
from eskmo import User, Stock

api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*********", tag="me")

    stock: Stock = api.stocks["2897"]
    order = stock.order(cst.ORDER.ACTION.BUY, 8.75, 5).send(user.id)
    
    print(f"目前的委託股數: {order.remain_qty}") # 目前的委託股數: 5000
    order.decrease_qty(3)
    print(f"新的委託股數: {order.remain_qty}") # 新的委託股數: 2000
    
    
if __name__ == "__main__":
    main()
```

## 改價

透過 `order.modify_price()` 即可改價，價格需在當日漲跌幅範圍內

```python
from eskmo import api
from eskmo import User, Stock

api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*********", tag="me")

    stock: Stock = api.stocks["2897"]
    order = stock.order(cst.ORDER.ACTION.BUY, 8.75, 1).send(user.id)
    
    print(f"目前的委託價: {order.price}") # 目前的委託價: 8.7500
    order.modify_price(8.8)
    print(f"新的委託價: {order.price}") # 新的委託價: 8.8000
    
    
if __name__ == "__main__":
    main()
```
