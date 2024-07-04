---
outline: deep
---

# 下單

藉由 [商品檔](/) 物件建立委託並送出，以此來達到下單功能，更多請見 [下單](/)

```python{10-11}
from eskom.api import api as eskmo

action = eskmo.const.ORDER.ACTION

@eskmo.start
def main():
    Logger.show = True
    eskmo.login(userId="A123456789", password="**********")

    stock = eskmo.stocks["2330"]
    order = stock.order(action.BUY, 700, 1).send()

if __name__ == "__main__":
    main()    
```