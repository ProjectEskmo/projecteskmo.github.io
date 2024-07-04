---
outline: deep
---

# 系統日誌

## 日誌管理器

Eskmo 內建提供日誌管理器




## 日誌等級

日誌事件包含 5 個等級：`debug`, `info`, `warning`, `error`, `fatal`

透過監控 5 個等級的日誌事件來獲得 Eskmo API 日誌相關資訊

```python
@eskmo.event.log.debug
def onDebugLog(data):
    print("Debug log:", data)

@eskmo.event.log.info
def onInfoLog(data):
    print("Info log:", data)

@eskmo.event.log.warning
def onWarningLog(data):
    print("Warning log:", data)

@eskmo.event.log.error
def onErrorLog(data):
    print("Error log:", data)

@eskmo.event.log.fatal
def onFatalLog(data):
    print("Fatal log:", data)

@eskmo.start
def main():
    eskmo.login(userId="A123456789", password="**********", tag="me")

if __name__ == "__main__":
    main()    
```
