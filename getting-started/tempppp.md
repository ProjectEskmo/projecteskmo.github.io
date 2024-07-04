---
outline: deep
---

# 訂閱行情

## 準備

請參考 [環境設置](/) 進行券商開戶、簽署 API 同意書、安裝 Skcom API 與憑證

```bash
pip install eskmo
```

## 登入
::: code-group
```python{6} [0.1.0]
from eskom.api import api as eskmo

@eskmo.start
def main():
    eskmo.logger.show = True
    eskmo.login(userId="A123456789", password="**********") # [!code focus]
```

```python{6} [0.0.1]
from eskom.api import api as eskmo

@eskmo.start
def main():
    eskmo.logger.show = True
    eskmo.login(userId="A123456789", password="**********") # [!code focus]
```
:::