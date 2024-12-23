---
outline: deep
---

# 下單

藉由 [商品檔](/user-manual/symbol/) 物件建立委託並送出，以此來達到下單功能，更多請見 [下單](/user-manual/order/)

```python{10-11}
from eskmo import api

api.logger.show = True
action = api.const.ORDER.ACTION

@api.start
def main():
    api.login(userId="A123456789", password="**********")

    stock = api.stocks["2330"]
    order = stock.order(action.BUY, 700, 1).send()

if __name__ == "__main__":
    main()    
```