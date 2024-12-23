---
outline: deep
---

# 商品檔資券餘額

藉由 `stock.info` 了解商品檔資券餘額相關資訊

> [!NOTE]
> 每個帳戶查詢到的資券餘額可能不會相同

```python{10-13}
from eskmo import api
from eskmo import Stock, StockMarginInfo

api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    code = "2330"
    stock: Stock = api.stocks[code]
    print(stock.info)
    # StockMarginInfo(stock_no='2330', financing_flag='0', financing_limit='9999', financing_ratio='60.000', short_selling_flag='0', short_selling_limit='21', short_selling_ratio='90.000', day_trade_flag='1', down_grade_flag='0', flat_position_short_sell_flag='1', full_settlement_flag='0', warning_flag='0', disposition_stock_flag='0', watch_stock_flag='0', restricted_stock_flag='0', abnormal_promotion_flag='0', special_abnormal_flag='0', single_order_share_limit='0', multiple_order_share_limit='0', cash_security_precollection_ratio='0', login_id='***********', account_no='***********')

if __name__ == '__main__':
    main()
```
### 資券餘額資訊

 `StockMarginInfo` 包含：

| 項目             | 欄位                          | 數值                                                                                 |
|------------------|-------------------------------|--------------------------------------------------------------------------------------|
| 商品代號         | symbol: str                   |                                                                                      |
| 融資標記         | margin_purchase: str          | 見 [`SYMBOL.MARGIN_PURCHASE`](/user-manual/prerequisites/constant#融資標記)          |
| 融資限量         | margin_purchase_limit: str    | 見 [`SYMBOL.MARGIN_PURCHASE_LIMIT`](/user-manual/prerequisites/constant#融資限量)    |
| 融資比率         | margin_purchase_ratio: str    |                                                                                      |
| 融券標記         | short_sale: str               | 見 [`SYMBOL.SHORT_SALE`](/user-manual/prerequisites/constant#融券標記)               |
| 融券限量         | short_sale_limit: str         | 見 [`SYMBOL.SHORT_SALE_LIMIT`](/user-manual/prerequisites/constant#融券限量)         |
| 融券比率         | short_sale_ratio: str         |                                                                                      |
| 當沖標記         | day_trade: str                | 見 [`SYMBOL.DAY_TRADE`](/user-manual/prerequisites/constant#當沖標記)                |
| 被降成標記       | down_grade: str               | 見 [`SYMBOL.DOWN_GRADE`](/user-manual/prerequisites/constant#被降成標記)             |
| 平盤放空標記     | flat_short: str               | 見 [`SYMBOL.FLAT_SHORT`](/user-manual/prerequisites/constant#平盤放空標記)           |
| 全額交割標記     | fullcash_delivery: str        | 見 [`SYMBOL.FULLCASH_DELIVERY`](/user-manual/prerequisites/constant#全額交割標記)    |
| 警示標記         | alerting: str                 | 見 [`SYMBOL.ALERTING`](/user-manual/prerequisites/constant#警示標記)                 |
| 處置股票標記     | disposition: str              | 見 [`SYMBOL.DISPOSITION`](/user-manual/prerequisites/constant#處置股票標記)          |
| 注意股票標記     | attention: str                | 見 [`SYMBOL.ATTENTION`](/user-manual/prerequisites/constant#注意股票標記)            |
| 受限股票標記     | restricted: str               | 見 [`SYMBOL.RESTRICTED`](/user-manual/prerequisites/constant#受限股票標記)           |
| 異常推介標記     | unusally_recommended: str     | 見 [`SYMBOL.UNUSALLY_RECOMMENDED`](/user-manual/prerequisites/constant#異常推介標記) |
| 特殊異常標記     | specific_abnormally: str      | 見 [`SYMBOL.SPECIFIC_ABNORMALLY`](/user-manual/prerequisites/constant#特殊異常標記)  |
| 單筆委託張數限制 | single_order_qty_limit: str   |                                                                                      |
| 多筆委託張數限制 | multiple_order_qty_limit: str |                                                                                      |
| 款券預收成數     | advance_collection_ratio: str |                                                                                      |

