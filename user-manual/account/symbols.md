---
outline: deep
---

# 獲取商品檔

Eskmo API 是以商品檔為中心的 API，因此取得商品檔是所有交易行為的第一步


## 商品檔列表

透過 `api.stocks` 取得證券商品檔列表

```python
from eskmo import api
api.logger.show = True

@api.start
def main():
    api.login(userId="A123456789", password="************")

    stocks = api.stocks　# [!code focus]
    print(stocks)          # [!code focus]

if __name__ == "__main__":
    main()
```

## 個別商品檔

若要對個別商品檔做操作，例如訂閱報價、下單，就需要透過字典方式取出個別商品檔

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    api.login(userId="A123456789", password="************")

    stock = api.stocks["2330"]　 # [!code focus]
    print(stock)                   # [!code focus]

if __name__ == "__main__":
    main()
```
