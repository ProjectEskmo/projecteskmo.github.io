---
outline: deep
---

# 歷史 MIT 查詢

與查詢最新回報相同，就是在對應位置後綴 `.reply` 改成 `.replys` 進行查詢動作

## 透過 MIT 委託物件，查詢歷史回報

藉由委託物件 `MITOrder` 查詢，其中 `order.replys` 可以查詢到歷史 MIT 回報紀錄

```python
from eskmo import api
from eskmo import User, Stock, MITOrder, MITOrders
api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")

    stock: Stock = api.stocks["2897"]
    order: MITOrder = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 8, 1, 8).send(user.id)
    reply = order.replys
    print(replys)

```

除了從送出的 MIT 委託中查詢回報，也可以透過商品檔取出該檔今日 MIT 委託 `MITOrders`

再從委託中檢索，取出所有有關的回報 `order.replys`

```python
from eskmo import api
from eskmo import User, Stock, MITOrder, MITOrders
api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")
    stock: Stock = api.stocks["2897"]

    orders: MITOrders = stock.mit_orders(user.id)
    for order in orders:
        for reply in order.replys:
            print(reply)    
            # {'bstrUserID': 'A123456789', 'TradeKind': '8', 'MarketType': 'TS',
            #  'Type': '2', 'ExchangeCode': '0', 'SmartKeyNo': '16153641',
            #  'PubSeqNo': '2', 'Broker': '****', 'Account': '*******', 
            #  'SubAccount': '0000000', 'ExchangeID': 'TSE', 'SeqNo': '1685000013539',
            #  'OSeqNo': '1685200001587', 'OrderNo': '', 'StockNo': '2897', 
            #  'BuySell': 'B', 'OrderType': '0', 'OrderPriceMark': '7', 
            #  'OrderPrice': '9', 'PriceType': '2', 'OrderCond': '0', 'Qty': '1', 
            #  'TriggerPrice': '9', 'TriggerTime': '', 'TriggerDir': '2', 
            #  'DayTrade': '', 'CreateTime': 1735606556.0, 'SaleNo': '8890',
            #  'UserIP': '110.28.0.158', 'TradeSource': 'y', 'Staus': '40', 
            #  'ErrorMsg': 'N', 'Message': '刪單', 'UpdateTime': 1735606555.0,
            #  'UniversalMsg': '', 'BasePrice': '0', 'MarketDealTrigger': '', 
            #  'PreRiskFlag': '0', 'SplitFlag': '0', 'serialNumber': 3,
            #  'buyOrSell': ' 買'}

```