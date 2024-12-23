---
outline: deep
---

# 刪除委託

刪除證券委託，只需要在委託送出後調用 `order.cancel()` 即可

若要獲取刪除委託通知，請註冊回報事件 `@api.event.order.notify` 取得

更多請見 [註冊事件取得最新回報](/user-manual/reply/latest/order#註冊事件取得最新回報) 章節

```python
from eskmo import api
from eskmo import Logger, User, Stock

cst = api.const

@api.start
def main():
    Logger.show = True
    user: User = api.login(userId="A123456789", password="*************", tag="me")
    stock: Stock = api.stocks["2888"]
    order = stock.order(cst.ORDER.ACTION.BUY, 7.5, 1).send(user.id)

    print(order)
    # Order(status='Placed', seqNo='4304081356311', reply='1010000649939')
    order.cancel() 
    print(order)
    # Order(status='Canceled', seqNo='4304081356311')
    
    
if __name__ == "__main__":
    main()
```
