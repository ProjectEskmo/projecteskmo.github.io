---
outline: deep
---

# 訂閱行情

訂閱行情後就能持續取得市場報價，建立邏輯分析市場走勢，更多細節請見 [行情](/)

```python{8-9}
from eskom.api import api as eskmo

@eskmo.start
def main():
    Logger.show = True
    eskmo.login(userId="A123456789", password="**********")

    stock = eskmo.stocks["2609"]
    stock.subscribe_quote() 

@eskmo.event.quote.price_changed
def onPriceChanged(data):
    if data.close == data.up:
        print(data.symbol, "漲停了!")  

if __name__ == "__main__":
    main()          
```

