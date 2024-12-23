---
outline: deep
---

# 即時行情

在最近一檔價量、成交價與成交量三者其中一個產生變動時，就會有行情數據

行情不會包含詳細的成交明細與五檔資訊，包含的欄位請見 [商品檔行情資訊](/user-manual/symbol/information.html#商品檔行情資訊)

> [!NOTE]
> 1. 在訂閱商品檔行情時，就會主動觸發一筆當前最新行情
>
> 2. 後續每次收到的即時行情，沒有改變的欄位會以 0 提供

```python
from eskmo import api
from eskmo import Stock, Quote

api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    stock: Stock = api.stocks["2330"]
    stock.subscribe_quote() 

# 即時行情
@api.event.quote.bidask_changed
def onBidAskChanged(data: Quote):
    print(f"[ALL] Quote: {data}")

@api.event.quote.price_changed
def onPriceChanged(data: Quote):
    print(f"onPriceChanged: Quote: {data}")

@api.event.quote.tick_changed
def onTickChanged(data: Quote):
    print(f"onTickChanged: Quote: {data}")

if __name__ == '__main__':
    main()

```