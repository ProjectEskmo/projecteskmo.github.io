---
outline: deep
---

# 訂閱行情

訂閱行情後就能持續取得市場報價，建立邏輯分析市場走勢，更多細節請見 [行情](/user-manual/quote/)

```python{8-9}
from eskmo import api
api.logger.show = True

@api.start
def main():
    api.login(userId="A123456789", password="**********")

    stock = api.stocks["2609"]
    stock.subscribe_quote() 

@api.event.quote.price_changed
def onPriceChanged(data):
    if data.close == data.up:
        print(data.symbol, "漲停了!")  

if __name__ == "__main__":
    main()       
```

