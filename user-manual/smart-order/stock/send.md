---
outline: deep
---

# 證券智慧單送單

證券智慧單送單與一般委託相似，只是 `.order` 換為智慧單的單別 `.smartOrder.mit`

```python
@eskmo.start
def main():
    Logger.show = True
    user: User = eskmo.login(userId="A123456789", password="********")

    stock: Stock = eskmo.stocks["2888"]
    smartOrder = stock.smartOrder.mit(cst.ORDER.ACTION.BUY, 8, 1, 8).send(user.id) 
    print(smartOrder) 
    
    # 送單成功則會收到:
    # MITOrder(status='Placed', seqNo='11755088', reply='11755088')
    
    # 送單失敗則會收到:
    # MITOrder(status='Error',
    #          errors='["'2888' MIT 委託失敗: 國內證券超光速MIT最後收單時間
    #                    為13:25:00,超過收單時間或非交易時間請確認!"]')
    
if __name__ == "__main__":
    main()
```