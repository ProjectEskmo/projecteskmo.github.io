---
outline: deep
---

# 日誌

Eskmo 提供不同等級的運行日誌可以讀取

## 顯示日誌

透過 `logger.show` 來控制是否要啟用日誌

```python
from eskmo.api import api as eskmo

Logger = eskmo.logger

@eskmo.start
def main():
    Logger.show = True
    eskmo.login(userId="A123456789", password="**************", tag="me")

if __name__ == "__main__":
    main()
```

## 日誌紀錄

使用者也能使用日誌進行不同級別的日誌記錄

```python{9-12}
from eskmo.api import api as eskmo

Logger = eskmo.logger

@eskmo.start
def main():
    eskmo.login(userId="A123456789", password="**************", tag="me")
    
    Logger.debug("Debug!")
    Logger.info("Info!")
    Logger.warning("Warning!")
    Logger.error("Error!")

if __name__ == "__main__":
    main()
```