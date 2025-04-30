---
outline: deep
next:
  text: 'MIT 刪單'
  link: '/user-manual/order/stock/mit/cancel'
---

# MIT 送單

MIT 送單與一般委託類似，透過 `[商品檔].smartOrder.mit(...).send()` 操作

填入 `[商品檔].smrtOrder.mit` 即會自動提示需要填入的欄位

如果你要指定證券帳號，就在 `send()` 中放入使用者 ID 

在 Send 之前與之後，都透過 `MITOrder` 對委託進行操作

> [!NOTE]
>
> 請注意智慧單的最後收單時間，避免遇到送單錯誤

```python
api.logger.show = True

@api.event.mit_order.changed
def onMITOrderChanged(data: MITOrderChangedResult):
    print("MIT Order Changed", data)

@api.start
def main():
    user: User = api.login(userId="A123456789", password="*************", tag="me")

    stock: Stock = api.stocks["2888"]
    smartOrder = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 8, 1, 8).send(user.id)
    print(smartOrder)
    # MITOrder(status='Placed', seqNo='16038835')
    # or
    # MITOrder(status='Error', 
    #          errors='["'2888' MIT 委託失敗: 國內證券超光速MIT最後收單時間
    #                    為13:25:00,超過收單時間或非交易時間請確認!"]')
    
    
if __name__ == "__main__":
    main()
```

由於智慧單委託會先由中台收單後，根據條件觸發再將委託送至交易所，因此智慧單狀態較多

請透過註冊事件 `@api.event.mit_order.changed` 取得最新智慧單委託狀態，包含送單是否成功

