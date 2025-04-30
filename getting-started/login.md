---
outline: deep
---

# 登入

## 準備

請參考 [安裝流程](/user-manual/prerequisites/installation) 並完成：
1. 券商開戶 
2. 簽署 API 同意書 
3. 安裝憑證

完成後安裝 Eskmo 與券商 API 套件：
```bash
pip install eskmo
eskmo install skcom
```

## 登入

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    api.login(userId="A123456789", password="**********")

if __name__ == "__main__":
    main()    
```
請將 `userId, password` 替換成您的身分證字號與密碼

帳號密碼與券商軟體或 App 登入帳號密碼相同
