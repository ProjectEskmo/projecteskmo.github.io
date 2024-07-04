---
outline: deep
---

# 註冊事件

在 Eskmo 中有許多的 [事件](/)，透過 [裝飾器語法](/) 處理當事件發生時的行為

```python{7-13}
from eskom.api import api as eskmo

@eskmo.start
def main():
    eskmo.login(userId="A123456789", password="**********")

@eskmo.event.user.login_success
def onLoginSuccess(result):
    print("登入成功!")

@eskmo.event.user.login_fail
def onLoginFail(result):
    print("登入失敗... 原因是:", result)    


if __name__ == "__main__":
    main()     
```