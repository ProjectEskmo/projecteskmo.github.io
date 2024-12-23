---
outline: deep
---

# 常數

交易有許多狀態、階段等離散條件需要判斷, 透過常數物件來輕鬆設定

## 基本操作

透過 `api.const.[大寫字]` 來使用, 後面中括號標示請填入大寫字位置來調用

例如市場別就可以透過 `[MARKET.STOCK]` 或 `[MARKET.ODD_LOTS]` 取得 :

```python
from eskmo import api

MARKET = api.const.MARKET

@api.start
def main():
    print(f"整股市場別為: {MARKET.STOCK}")
    print(f"零股市場別為: {MARKET.ODD_LOTS}")
    # 整股市場別為: Stock
    # 零股市場別為: OddLots

if __name__ == "__main__":
    main()
```

## 常數列表

### 商品檔常數

商品檔常數請透過 `api.const.SYMBOL` 來使用

```python
from eskmo import api
SYMBOL = api.const.SYMBOL
```

#### 試算揭示

以 `SYMBOL.SIMULATE` 表示

| 描述     | 常數                       |
|----------|----------------------------|
| 試算揭示 | `SYMBOL.SIMULATE.ENABLED`  |
| 一般揭示 | `SYMBOL.SIMULATE.DISABLED` |

#### 當沖類別

以 `SYMBOL.DAY_TRADE_TYPE` 表示

| 說明                                  | 常數                                       |
|---------------------------------------|--------------------------------------------|
| 禁現沖                                | `SYMBOL.DAY_TRADE_TYPE.DISABLED`           |
| 先買現沖 (可先買後賣現股當沖)         | `SYMBOL.DAY_TRADE_TYPE.BUY_THEN_SELL_ONLY` |
| 可現沖 (可先買後賣和先賣後買現股當沖) | `SYMBOL.DAY_TRADE_TYPE.ENABLED`            |

#### 融資標記

以 `SYMBOL.MARGIN_PURCHASE` 表示

| 說明         | 常數                               |
|--------------|------------------------------------|
| 正常         | `SYMBOL.MARGIN_PURCHASE.ENABLED`   |
| 停資         | `SYMBOL.MARGIN_PURCHASE.DISABLED`  |
| 取消信用交易 | `SYMBOL.MARGIN_PURCHASE.UNELGIBLE` |

#### 融資限量

以 `SYMBOL.MARGIN_PURCHASE_LIMIT` 表示

| 說明   | 常數                                 |
|--------|--------------------------------------|
| 無配額 | `SYMBOL.MARGIN_PURCHASE_LIMIT.EMPTY` |
| 無限制 | `SYMBOL.MARGIN_PURCHASE_LIMIT.NONE`  |

#### 融券標記

以 `SYMBOL.SHORT_SALE` 表示

| 說明         | 常數                          |
|--------------|-------------------------------|
| 正常         | `SYMBOL.SHORT_SALE.ENABLED`   |
| 停券         | `SYMBOL.SHORT_SALE.DISABLED`  |
| 取消信用交易 | `SYMBOL.SHORT_SALE.UNELGIBLE` |

#### 融券限量

以 `SYMBOL.SHORT_SALE_LIMIT` 表示

| 說明   | 常數                            |
|--------|---------------------------------|
| 無配額 | `SYMBOL.SHORT_SALE_LIMIT.EMPTY` |
| 無限制 | `SYMBOL.SHORT_SALE_LIMIT.NONE`  |

#### 當沖標記

以 `SYMBOL.DAY_TRADE` 表示

| 說明     | 常數                        |
|----------|-----------------------------|
| 可當沖   | `SYMBOL.DAY_TRADE.ENABLED`  |
| 不可當沖 | `SYMBOL.DAY_TRADE.DISABLED` |

#### 被降成標記

以 `SYMBOL.DOWN_GRADE` 表示

| 說明   | 常數                       |
|--------|----------------------------|
| 正常   | `SYMBOL.DOWN_GRADE.NORMAL` |
| 被降成 | `SYMBOL.DOWN_GRADE.DOWN`   |
| 被升成 | `SYMBOL.DOWN_GRADE.UP`     |

#### 平盤放空標記

以 `SYMBOL.FLAT_SHORT` 表示

| 說明         | 常數                         |
|--------------|------------------------------|
| 可平盤放空   | `SYMBOL.FLAT_SHORT.ENABLED`  |
| 不可平盤放空 | `SYMBOL.FLAT_SHORT.DISABLED` |

#### 全額交割標記

以 `SYMBOL.FULLCASH_DELIVERY` 表示

| 說明     | 常數                                |
|----------|-------------------------------------|
| 全額交割 | `SYMBOL.FULLCASH_DELIVERY.ENABLED`  |
| 正常     | `SYMBOL.FULLCASH_DELIVERY.DISABLED` |

#### 警示標記

以 `SYMBOL.ALERTING` 表示

| 說明             | 常數                       |
|------------------|----------------------------|
| 公司內部警示記號 | `SYMBOL.ALERTING.ENABLED`  |
| 正常             | `SYMBOL.ALERTING.DISABLED` |

#### 處置股票標記

以 `SYMBOL.DISPOSITION` 表示

| 說明         | 常數                                  |
|--------------|---------------------------------------|
| 正常         | `SYMBOL.DISPOSITION.DISABLED`         |
| 處置股票     | `SYMBOL.DISPOSITION.ENABLED`          |
| 再處置股票   | `SYMBOL.DISPOSITION.ENABLED_AGAIN`    |
| 彈性處置股票 | `SYMBOL.DISPOSITION.ENABLED_FLEXIBLE` |

#### 注意股票標記

以 `SYMBOL.ATTENTION` 表示

| 說明     | 常數                        |
|----------|-----------------------------|
| 正常     | `SYMBOL.ATTENTION.DISABLED` |
| 注意股票 | `SYMBOL.ATTENTION.ENABLED`  |

#### 受限股票標記

以 `SYMBOL.RESTRICTED` 表示

| 說明                   | 常數                         |
|------------------------|------------------------------|
| 正常                   | `SYMBOL.RESTRICTED.DISABLED` |
| 證券商委託申報受限股票 | `SYMBOL.RESTRICTED.ENABLED`  |

#### 異常推介標記

以 `SYMBOL.UNUSALLY_RECOMMENDED` 表示

| 說明         | 常數                                   |
|--------------|----------------------------------------|
| 正常         | `SYMBOL.UNUSALLY_RECOMMENDED.DISABLED` |
| 異常推介個股 | `SYMBOL.UNUSALLY_RECOMMENDED.ENABLED`  |

#### 特殊異常標記

以 `SYMBOL.SPECIFIC_ABNORMALLY` 表示

| 說明         | 常數                                  |
|--------------|---------------------------------------|
| 正常         | `SYMBOL.SPECIFIC_ABNORMALLY.DISABLED` |
| 特殊異常股票 | `SYMBOL.SPECIFIC_ABNORMALLY.ENABLED`  |