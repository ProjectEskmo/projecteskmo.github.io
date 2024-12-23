---
outline: deep
---

# 商品檔基本資訊

> [!NOTE]
> 目前僅支援 **上市**, **上櫃** 與 **興櫃** 的商品檔

在登入之後，透過 `api.stocks` 可以查詢所有證券相關的商品檔

只要放入指定的商品代號，取得的為 `Stock` 物件

藉由 `stock.quote` 可了解商品檔行情相關基本資訊

```python{10-15}
from eskmo import api
from eskmo import Stock, Quote

api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    code = "2330"
    stock: Stock = api.stocks[code]
    print(stock.quote)
    # Quote(idx=(0, 29567), market='Stock', decimal=2, sector=24, symbol='2330', name='台積電', high=0.0, open=0.0, low=0.0, close=0.0, tick_qty=0, ref=951.0, bid=0.0, bid_qty=0, ask=0.0, ask_qty=0, bid_total_qty=0, ask_total_qty=0, future_oi=0, qty_total=0, qty_yesterday=24319, up=1045.0, down=856.0, simulate=False, day_trade_type=2, trading_day=20240823) 

if __name__ == '__main__':
    main()
```
### 商品檔行情資訊

 `Quote` 包含：

| 項目             | 英文名稱             | 備註                                                                  |
|------------------|----------------------|-----------------------------------------------------------------------|
| 商品自定索引代號 | idx: tuple[int, int] |                                                                       |
| 市埸代碼         | market: str          |                                                                       |
| 小數位數         | decimal: int         |                                                                       |
| 類股別           | sector: int          | EX: (證券)類股別 1 水泥, 2 食品…etc.                                  |
| 商品代碼         | symbol: str          | EX: 1101 為台泥, TX12 為台指期12月…etc.                               |
| 商品名稱         | name: str            |                                                                       |
| 最高價           | high: float          |                                                                       |
| 開盤價           | open: float          |                                                                       |
| 最低價           | low: float           |                                                                       |
| 收盤價           | close: float         |                                                                       |
| 成交量           | tick_qty: int        |                                                                       |
| 參考價           | ref: float           | 為昨收價，除權息時是平盤價                                            |
| 買價             | bid: float           |                                                                       |
| 買量             | bid_qty: int         |                                                                       |
| 賣價             | ask: float           |                                                                       |
| 賣量             | ask_qty: int         |                                                                       |
| 買盤量           | bid_total_qty: int   | 即外盤量                                                              |
| 賣盤量           | ask_total_qty: int   | 即內盤量                                                              |
| 期貨未平倉       | future_oi: int       |                                                                       |
| 總成交量         | qty_total: int       |                                                                       |
| 昨日成交量       | qty_yesterday: int   |                                                                       |
| 漲停價           | up: float            |                                                                       |
| 跌停價           | down: float          |                                                                       |
| 試算揭示         | simulate: bool       | 見 [`SYMBOL.SIMULATE`](/user-manual/prerequisites/constant#試算揭示)  |
| 當沖類別         | day_trade_type: int  | 見 [`SYMBOL.DAY_TRADE`](/user-manual/prerequisites/constant#當沖類別) |
| 交易日           | trading_day: str     | 格式為 `YYYYMMDD`<br/>當日非交易日時, 資料為前一交易日                |