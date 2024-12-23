---
outline: deep
---

# 註冊事件

在 Eskmo 中有許多的 **事件 (Events)**，透過 [裝飾器語法](https://www.geeksforgeeks.org/decorators-in-python/) 處理當事件發生時的行為

```python{8-14}
from eskmo import api
api.logger.show = False

@api.start
def main():
    api.login(userId="A123456789", password="************")

@api.event.user.login_success
def onLoginSuccess(result):
    print("登入成功!")

@api.event.user.login_fail
def onLoginFail(result):
    print("登入失敗... 原因是:", result)    


if __name__ == "__main__":
    main()   
```