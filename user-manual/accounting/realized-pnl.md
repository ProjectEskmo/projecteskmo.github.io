---
outline: deep
---

# 已實現損益

在給定 **起始日期** 到 **結束日期** 之下，可查詢已實現損益，方式如下：

1. 損益彙總
2. 損益彙總 (依商品檔)
3. 損益明細 (依委託)

以上三類可供查詢，未實現損益相似，以 `user.account.balance.realized` 進行操作

## 查詢帳戶已實現損益彙總

已實現損益彙總需要指定起始日期到結束日期，請放入 `datetime` 格式物件

並透過 `update_summary(start, end)` 進行查詢

再由事件 `@api.event.pnl.realized_summary` 獲得查詢結果

```python
api.logger.show = True

@api.event.pnl.realized_summary
def on_pnl_udated(result: PnLRealizedSummaryResult):
    Logger.info(f"P&L Summary:: {result}")

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    today = datetime.today()
    start_date = today - timedelta(days=100)
    user.account.balance.realized.update_summary(start=start_date, end=today)
```

## 查詢帳戶已實現損益彙總 (依商品檔)

依商品檔彙總查詢需指定要查詢的商品代號，以及起始與結束日期（`datetime` 物件）

並透過 `update_summary_by_symbol(symbol, start, end)` 進行查詢

並由事件 `@api.event.pnl.realized_summary_by_symbol` 觸發獲得查詢結果

```python
from datetime import datetime
from eskmo import api

cst = api.const
api.logger.show = True

@api.event.pnl.realized_summary_by_symbol
def on_pnl_udated(result: PnLRealizedStockSummaryResult):
    Logger.info(f"P&L Summary (by symbol):: {result}")    

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    today = datetime.today()
    start_date = today - timedelta(days=100)
    symbol = "2897"
    user.account.balance.realized.update_summary_by_symbol(symbol, start_date, today)
```

## 查詢帳戶已實現損益明細 (依委託)

依委託明細查詢需指定要查詢的委託資訊，包含 商品代號、交易類型、委託序號與書號

已實現損益彙總需要指定起始日期（不用指定結束日期）

並透過 `update_summary(symbol, start, trade_type, seq_no, book_no)` 進行查詢

並由事件 `@api.event.pnl.realized_details` 觸發獲得查詢結果

```python
from datetime import datetime
from eskmo import api

cst = api.const
api.logger.show = True

@api.event.pnl.realized_details
def on_pnl_udated(result: PnLRealizedDetailsResult):
    Logger.info(f"P&L Details:: {result}")    

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    start_date = datetime.today()
    symbol = "2897"
    trade_type = cst.TRADE.TYPE.STOCK
    seq_no="2313577968213"
    book_no="P00PD"
    user.account.balance.realized.update_details(symbol, start_date,
            trade_type, seq_no, book_no)
```

## 帳務查詢完成事件

當帳務查詢完成時，可透過 `@api.event.pnl.update_finished` 捕捉通知

請注意：如果沒有庫存與損益，依然會通知查詢完成

假若在 5 秒內重複查詢，則不會觸發此事件，而是會發生 [API 執行錯誤](/user-manual/system/error#api-執行錯誤) 事件

```python
api.logger.show = True

@api.event.pnl.update_finished
def on_pnl_update_finished(result):
    api.logger.info("PnL 查詢完畢")

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    user.account.balance.unrealized.update_summary()
```