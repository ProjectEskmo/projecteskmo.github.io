---
outline: deep
---

# 即時成交明細

訂閱成交明細後，會取得 `Tick` 物件包含成交明細資訊

```python
from eskmo import api
from eskmo import Stock, Tick

api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="***********")

    stock: Stock = api.stocks["2330"]
    stock.subscribe_tick() 

@api.event.tick.notify
def onTickNotify(tick: Tick):
    print(f"Tick: {tick}")

if __name__ == '__main__':
    main()

```

### 成交明細資訊

`Tick` 包含：

| 項目     | 欄位             | 備註                    |
|----------|------------------|-------------------------|
| 流水號   | count: int       |                         |
| 交易日期 | date_str: str    | 格式為 `YYYYMMDD`       |
| 交易時間 | time_str: str    | 格式為 `HHMMSS`         |
| 毫秒     | ms_str: str      |                         |
| 時間戳記 | timestamp: float |                         |
| 時間     | time: datetime   |                         |
| 商品代碼 | symbol: str      |                         |
| 買價     | bid: float       |                         |
| 賣價     | ask: float       |                         |
| 成交價   | close: float     |                         |
| 成交量   | qty: int         |                         |
| 是否緩搓 | simulate: int    | 0: 一般揭示 1: 試算揭示 |