---
outline: deep
---

# 系統事件

## 錯誤處理

下表為錯誤處理有關事件：

| 事件         | 註冊方式                            | 回傳物件                                        |
|--------------|-------------------------------------|-------------------------------------------------|
| API 執行錯誤 | [@eskmo.event.api.execute_error](/) | [APIExecuteErrorResult](#APIExecuteErrorResult) |

## APIExecuteErrorResult

API 執行錯誤事件，可能因為各種 API 操作觸發。

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.api.execute_error
def onUpdateSymbols(data):
    print("API 執行錯誤: ", data)
```

## 日誌管理

下表為日誌管理有關事件：

| 事件          | 註冊方式                      | 回傳物件                                    |
|---------------|-------------------------------|---------------------------------------------|
| 日誌-除錯訊息 | [@eskmo.event.log.debug](/)   | [LoggerMessageResult](#LoggerMessageResult) |
| 日誌-資訊訊息 | [@eskmo.event.log.info](/)    | [LoggerMessageResult](#LoggerMessageResult) |
| 日誌-警告訊息 | [@eskmo.event.log.warning](/) | [LoggerMessageResult](#LoggerMessageResult) |
| 日誌-錯誤訊息 | [@eskmo.event.log.error](/)   | [LoggerMessageResult](#LoggerMessageResult) |
| 日誌-嚴重錯誤 | [@eskmo.event.log.fatal](/)   | [LoggerMessageResult](#LoggerMessageResult) |

## LoggerMessageResult

日誌管理訊息事件，可能因為日誌管理器操作而觸發。

| 屬性 | 型別 | 說明 | 備註 |
|:----:|:----:|------|------|
|      |      |      |      |

```python
@eskmo.event.log.info
def onInfoLog(data):
    print("Info log: ", data)
```