---
outline: deep
---

# 日誌

日誌 (Logging) 指的是程式在運行時的各種通知訊息，蒐集保存以便疑難排解

Eskmo 提供不同等級的運行日誌可以讀寫，包含 `info`, `warning`, `error` 

可以根據使用需求設置需要顯示和保存多少級別以上的日誌訊息

## 顯示日誌

透過 `api.logger.show` 來控制是否要顯示日誌

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    api.login(userId="A123456789", password="**************", tag="me")

if __name__ == "__main__":
    main()
```

## 日誌紀錄

使用者也能使用日誌進行不同級別的日誌記錄

```python{7-9}
from eskmo import api

@api.start
def main():
    api.login(userId="A123456789", password="**************", tag="me")
    
    api.logger.info("Info!")
    api.logger.warning("Warning!")
    api.logger.error("Error!")

if __name__ == "__main__":
    main()
```