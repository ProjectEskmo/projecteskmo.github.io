---
outline: deep
---

# 系統日誌

## 日誌管理器

Eskmo 內建提供日誌管理器，除了輸出在命令行外，也會保存在目錄下的 `Logs`

檔名以日期時間組成 `LOG_YYYYMMDDhhmmss_SSS.txt` ，每次啟動都會建立新的檔案

## 日誌等級

日誌事件包含 5 個等級：`debug`, `info`, `warning`, `error`, `fatal`

透過監控 5 個等級的日誌事件來獲得 Eskmo API 日誌相關資訊

```python
@api.event.log.debug
def onDebugLog(data):
    print("Debug log:", data)

@api.event.log.info
def onInfoLog(data):
    print("Info log:", data)

@api.event.log.warning
def onWarningLog(data):
    print("Warning log:", data)

@api.event.log.error
def onErrorLog(data):
    print("Error log:", data)

@api.event.log.fatal
def onFatalLog(data):
    print("Fatal log:", data)

@api.start
def main():
    api.login(userId="A123456789", password="**********", tag="me")

if __name__ == "__main__":
    main()    
```

## 日誌格式

日誌格式以 `%` 開頭，為 `[確認碼] [等級] [日期時間] | [進程用途] | [進程PID] | [日誌內容]`

範例如下：

```log
%ZU INFO  2024-12-18 16:26:49.172760 | API  | 38124 |The API 'SKCOM_f795df' has started successfully.
```

由於 Eskmo 涉及多進程運行，日誌行序不保證為紀錄順序，請以時間進行排列

其中確認碼 (兩碼) 是以後面日誌內容進行加密而得，因此若有人竄改 LOG 將會無法通過驗證 

後續會提供驗證 LOG 檔案的功能
