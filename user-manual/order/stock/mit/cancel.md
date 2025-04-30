---
outline: deep
next:
  text: '證券 MIT 事件'
  link: '/user-manual/order/stock/mit/events'
---

# MIT 刪單

刪單透過 `order.cancel()` 即可刪單

若要獲取 MIT 刪單通知，請註冊回報事件 `@api.event.mit_order.changed` 取得

更多請見 [註冊事件取得最新回報](/user-manual/reply/latest/order#註冊事件取得最新回報) 章節



```python
from eskmo import api
from eskmo import Logger, User, Stock

api.logger.show = True
cst = api.const

@api.event.mit_order.changed
def onMITOrderChanged(data: MITOrderChangedResult):
    print("MIT Order Changed", data)

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")
    stock: Stock = api.stocks["2888"]
    order = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 8, 1, 8).send(user.id) 
    print(order)
    # MITOrder(status='Placed', seqNo='16038835')
    order.cancel()
    print(order)
    # MITOrder(status='Canceled', seqNo='16038835')
    
    
if __name__ == "__main__":
    main()
```
