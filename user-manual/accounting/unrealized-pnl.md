---
outline: deep
---

# 未實現損益

未實現損益分為 **彙總 (Summary)** 與 **明細 (Details)** 兩種損益類型可供查詢

> [!INFO]
> 在登入時，會自動先取得帳戶的未實現損益彙總一次

相關帳務功能都會在 `user.account.balance.unrealized` 底下操作

## 查詢帳戶未實現損益彙總

彙總不需要填入任何參數，透過 `update_summary()` 進行查詢

再由事件 `@api.event.pnl.unrealized_summary` 獲得查詢結果

```python
api.logger.show = True

@api.event.pnl.unrealized_summary
def on_pnl_udated(result: PnLUnrealizedSummaryResult):
    Logger.info(f"P&L Summary:: {result}")

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    user.account.balance.unrealized.update_summary()
```

## 查詢帳戶未實現損益明細

彙總查詢不需要填入任何參數，透過 `update_details()` 進行查詢即可

並由事件 `@api.event.pnl.unrealized_details` 觸發獲得查詢結果

```python
api.logger.show = True

@api.event.pnl.unrealized_details
def on_pnl_udated(result: PnLUnrealizedDetailsResult):
    Logger.info(f"P&L Details:: {result}")    

@api.start
def main():
    user = api.login(userId="A123456789", password="**********")
    user.account.balance.unrealized.update_details()
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