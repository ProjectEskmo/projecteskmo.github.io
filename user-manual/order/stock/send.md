---
outline: deep
---

# 送出委託

要送出一般證券委託委託非常容易，透過 `[商品檔].order(...).send()` 即可

如果你要指定證券帳號，就在 `send()` 中放入使用者 ID 

在還沒有 send 之前, 你會拿到 `PendingOrder`, Send 出去後會拿到的是 `Order`

```python
@eskmo.start
def main():
    Logger.show = True
    user: User = eskmo.login(userId="A123456789", password="*************", tag="me")

    stock: Stock = eskmo.stocks["2888"]
    order = stock.order(cst.ORDER.ACTION.BUY, 7.5, 1).send(user.id)
    
    print(f"order: {order}")
    print(f"order.price: {order.price}")
    print(f"order.status: {order.status}")
    print(f"order.qty: {order.qty}")
    print(f"order.deal_qty: {order.deal_qty}")
    print(f"order.remain_qty: {order.remain_qty}")
    print(f"order.canceled_qty: {order.canceled_qty}")
    
    
if __name__ == "__main__":
    main()
```


