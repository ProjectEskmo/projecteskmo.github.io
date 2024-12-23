---
outline: deep
---

# 系統事件

## 錯誤處理

下表為錯誤處理有關事件：

| 事件         | 註冊方式                                                               | 回傳物件                                        |
|--------------|------------------------------------------------------------------------|-------------------------------------------------|
| API 執行錯誤 | [@api.event.api.execute_error](/user-manual/system/error#api-執行錯誤) | [APIExecuteErrorResult](#APIExecuteErrorResult) |

## APIExecuteErrorResult

API 執行錯誤事件，可能因為各種 API 操作觸發。

|    屬性    |    型別     | 說明            | 備註                                                                  |
|:----------:|:-----------:|-----------------|-----------------------------------------------------------------------|
|   event    |    `str`    | 事件名稱        |                                                                       |
|   phase    |    `str`    | API 執行階段    | 分別為執行前、執行中與執行後三個階段<br />見 [api.const.API.PHASE](#) |
|  function  |    `str`    | 執行的 API 函數 |                                                                       |
| error_code |    `str`    | API 錯誤代碼    | 見各券商文件定義                                                      |
|   errors   | `list[str]` | 錯誤訊息 (中文) |                                                                       |


```python
@api.event.api.execute_error
def onUpdateSymbols(data):
    print("API 執行錯誤: ", data)
```

## 日誌管理

下表為日誌管理有關事件：

| 事件          | 註冊方式                                             | 回傳物件 |
|---------------|------------------------------------------------------|----------|
| 日誌-除錯訊息 | [@api.event.log.debug](/user-manual/system/logger)   | `str`    |
| 日誌-資訊訊息 | [@api.event.log.info](/user-manual/system/logger)    | `str`    |
| 日誌-警告訊息 | [@api.event.log.warning](/user-manual/system/logger) | `str`    |
| 日誌-錯誤訊息 | [@api.event.log.error](/user-manual/system/logger)   | `str`    |
| 日誌-嚴重錯誤 | [@api.event.log.fatal](/user-manual/system/logger)   | `str`    |

關於日誌事件回傳字串，請見 [日誌格式](/user-manual/system/logger#日誌格式) 