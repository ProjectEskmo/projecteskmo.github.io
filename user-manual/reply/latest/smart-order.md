---
outline: deep
next:
  text: '最新智慧單回報'
  link: '/user-manual/reply/latest/smart-order'
---

# 最新智慧單回報

與一般委託相同，在送出智慧單之後，可透過委託物件查詢回報

也可以透過註冊事件捕捉最新回報，根據不同的智慧單類別，進行相應的查詢

這邊僅以 MIT 為例，其餘智慧單回報相關操作皆相同

## 透過 MIT 委託物件，查詢最新回報

藉由 MIT 委託物件 `MITOrder` 查詢，其中 `order.reply` 可以查詢到最新回報

```python
from eskmo import api
from eskmo import User, Stock, MITOrder, StockOrders
api.logger.show = True
cst = api.const

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")

    stock: Stock = api.stocks["2897"]
    order: MITOrder = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 8, 1, 8).send(user.id)
    reply = order.reply
    print(reply)

```

除了從送出的委託中取得回報，也可以透過商品檔 `mit_orders()` 取出該檔今日所有 MIT 委託

再從 MIT 委託中檢索，取出最新回報 `order.reply`

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
        print(order.reply)    
        # {'bstrUserID': 'A123456789', 'TradeKind': '8', 'MarketType': 'TS',
        #  'Type': '2', 'ExchangeCode': '0', 'SmartKeyNo': '16111290', 
        #  'PubSeqNo': '2', 'Broker': '****', 'Account': '*******', 
        #  'SubAccount': '0000000', 'ExchangeID': 'TSE', 'SeqNo': '1685200177616', 
        #  'OSeqNo': '1685000301839', 'OrderNo': '', 'StockNo': '2897', 
        #  'BuySell': 'B', 'OrderType': '0', 'OrderPriceMark': '7',
        #  'OrderPrice': '9', 'PriceType': '2', 'OrderCond': '0', 
        #  'Qty': '1', 'TriggerPrice': '9', 'TriggerTime': '', 'TriggerDir': '2',
        #  'DayTrade': '', 'CreateTime': 1735260936.0, 'SaleNo': '8890',
        #  'UserIP': '***.**.*.***', 'TradeSource': 'y', 'Staus': '40',
        #  'ErrorMsg': 'N', 'Message': '刪單', 'UpdateTime': 1735260931.0,
        #  'UniversalMsg': '', 'BasePrice': '0', 'MarketDealTrigger': '',
        #  'PreRiskFlag': '0', 'SplitFlag': '0', 'serialNumber': 6, 
        #  'buyOrSell': '買'}

```



## 註冊事件取得最新回報

另一個獲取最新回報的方式是透過註冊事件 `@api.event.mit_order.notify` 來獲得回報

```python
from eskmo import api
from eskmo import MITOrderNotifyResult
api.logger.show = True

@api.event.mit_order.notify
def onMITOrderNotify(result: MITOrderNotifyResult):
    print(f"最新 MIT 回報: {result}")
    # MITOrderNotifyResult(count=8, 
    #     order=SmartOrderStatus(reply=SmartReply(user_id='A123456789', 
    #     trade_kind='8', market='TS', type='1', exchange_code='0', 
    #     smart_key_no='16114354', pub_seq_no='2', broker='****', 
    #     account='*******', sub_account='0000000', exchange_id='TSE', 
    #     seq_no='1685200179612', o_seq_no='1685200179612', order_no='', 
    #     symbol='2897', buysell_str='B', order_type='0', order_price_mark='7', 
    #     order_price='9', price_type='2', order_cond='0', qty='1', 
    #     trigger_price='9', trigger_time='', trigger_dir='2', day_trade='',
    #     created=datetime.datetime(1970, 1, 21, 10, 1, 2, 444000), 
    #     sale_no='8890', user_ip='***.**.*.***', trade_source='y', status='34',
    #     error_msg='N', message='已加入洗價', 
    #     updated=datetime.datetime(1970, 1, 21, 10, 1, 2, 438000), 
    #     universal_msg='', base_price='0', market_deal_trigger='',
    #     num=8, buysell='買'), is_closed=False, price='9', volume=1000,
    #     volume_remain=1000, volume_cancel=0, volume_deal=0))

@api.start
def main():
    api.login(userId="A123456789", password="*************")
```