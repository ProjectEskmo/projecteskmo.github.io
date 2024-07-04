---
outline: deep
---

# 證券智慧單刪單

## 依智慧單物件刪單

透過送單的 order 刪單

```python
cst = eskmo.const

@eskmo.start
def main():
    Logger.show = True
    user: User = eskmo.login(userId="F128052937", password="**********")

    stock: Stock = eskmo.stocks["2888"]
    smartOrder = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 7.5, 1, 7.5).send(user.id)

    smartOrder.cancel()
    print(smartOrder)
    # MITOrder(status='Canceled', seqNo='11755516')
    
    
if __name__ == "__main__":
    main()
```

## 依智慧單單號刪單

```python
stock.smartOrder.cancel(orderId)
# 或
stock.smartOrder.cancelMany([orderId1, orderId2])
```