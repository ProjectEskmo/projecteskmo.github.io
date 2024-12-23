---
outline: deep
---

# 帳務資訊

商品檔帳務資訊，依 **現股**, **融資**, **融券** 與 **先賣** 四個交易類別分類

每類包含 **昨餘**, **委買**, **買成**, **委賣**, **賣成** 4 項即時庫存

與 **平均成本**, **當沖FIFO均價**, **FIFO均價**, **FIFO已實現** 4 項即時損益資料

透過商品檔物件 `stock.position(user.id)` 取得指定帳戶該商品檔的即時庫存與損益

> [!NOTE]
>
> 此商品檔帳務查詢非群益 API 直接提供，為基於回報計算的結果，可能與實踐有所差異
>
> 若要進行詳細驗證與確認，請透過 [帳務](/user-manual/accounting/) 章節，透過 API 查詢獲得


```python
from eskmo import api
from eskmo import Stock, StockBalance
api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    stock: Stock = api.stocks["2888"]
    balance: StockBalance = stock.position(user.id)
    print(f"現股: {balance.stock}")
    print(f"融資: {balance.margin}")
    print(f"融券: {balance.short}")
    print(f"先賣: {balance.daytrade_short}")
    # 現股: {'昨餘': 0, '委買': 0, '買成': 0, '委賣': 0, '賣成': 0, '平均成本': 0, '當沖FIFO均價': 0, 'FIFO均價': 0, 'FIFO已實現': 0}
    # 融資: {'昨餘': 0, '委買': 0, '買成': 0, '委賣': 0, '賣成': 0, '平均成本': 0, '當沖FIFO均價': 0, 'FIFO均價': 0, 'FIFO已實現': 0}
    # 融券: {'昨餘': 0, '委買': 0, '買成': 0, '委賣': 0, '賣成': 0, '平均成本': 0, '當沖FIFO均價': 0, 'FIFO均價': 0, 'FIFO已實現': 0}
    # 先賣: {'昨餘': 0, '委買': 0, '買成': 0, '委賣': 0, '賣成': 0, '平均成本': 0, '當沖FIFO均價': 0, 'FIFO均價': 0, 'FIFO已實現': 0}

if __name__ == '__main__':
    main()
```