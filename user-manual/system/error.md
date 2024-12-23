---
outline: deep
---

# 錯誤處理



## 註冊失敗事件

在 Eskmo 中，大多數的正常與成功事件，也會伴隨失敗事件，例如：

| 事件                                                               | 說明     |
|--------------------------------------------------------------------|----------|
| [@api.event.quote.login_fail](/user-manual/account/login)          | 登入失敗 |
| [@api.event.quote.subscribe_fail](/user-manual/quote/live/quote)   | 訂閱失敗 |
| [@api.event.quote.unsubscribe_fail](/user-manual/quote/live/quote) | 解訂失敗 |
| [@api.event.order.send_fail](/user-manual/order/stock/send)        | 下單失敗 |
| [@api.event.order.placed_fail](/user-manual/order/stock/send)      | 掛單失敗 |
| [@api.event.order.cancel_fail](/user-manual/order/stock/cancel)    | 刪單失敗 |
| ...                                                                | ...      |

透過註冊這些失敗事件，當發生時在予以個別處理

對於初學者，建議顯示日誌 `api.logger.show = True` 以便發生失敗訊息沒有捕捉到而忽略

## API 執行錯誤

當執行 API 函數遇到錯誤時，將會觸發 `@api.event.api.execute_error` 事件

透過註冊該事件，來捕捉 API 端錯誤的發生

### 群益 SKCOM API

舉例來說，在不輸入帳號密碼的情況下登入：

```python
from eskmo import api

@api.event.api.execute_error
def apiError(data):
    print(f"API 發生錯誤: {data}")
    # API 發生錯誤: 
    # APIExecuteErrorResult(event='SkcomExecFail', phase='AfterExec',
    # function='SKCenterLib_Login', error_code=602, errors=['未知 Error: 602'])

@api.start
def main():
    api.login(userId="A123456789", password="**********")
   

if __name__ == "__main__":
    main()
```

會觸發事件發生，通常會有 API 錯誤代碼 `error_code` ，就可以進一步到券商 API 文件中查詢

而錯誤代碼 `602` 就可以在 `策略王COM元件使用說明.docx` ([下載](https://www.capital.com.tw/CapitalGWAPI/srvcms/api/File/1861)) 發現是指帳號密碼錯誤

## 注意事項

券商 API 錯誤非 Eskmo 可控制與管理，建議對官方 API 更新保持關注