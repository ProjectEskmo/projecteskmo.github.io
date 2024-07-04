---
outline: deep
---

# 帳戶事件

下表為帳戶有關事件：

| 事件         | 註冊方式                                     | 回傳物件                                       |
|--------------|----------------------------------------------|------------------------------------------------|
| 開始登入     | [@eskmo.event.user.login_start](/)           | [LoginStartResult](#loginstartresult)          |
| 登入失敗     | [@eskmo.event.user.login_fail](/)            | [LoginFailResult](#loginstartresult)           |
| 登入成功     | [@eskmo.event.user.login_success](/)         | [LoginSuccessResult](#loginstartresult)        |
| 登入進度通知 | [@eskmo.event.user.login_progress_notify](/) | [LoginProgressNotifyResult](#loginstartresult) |

## LoginStartResult

登入開始事件，包含登入設置資訊

|    屬性    | 型別  | 說明       | 備註 |
|:----------:|:-----:|------------|------|
|    type    | `str` | 登入類型   |      |
| connection | `int` | 登入連線數 |      |

```python
@eskmo.event.user.login_start
def onLoginStart(data):
    print("登入開始: ", data.type, data.connection)
    # 登入開始: MultiLogin 2
```

## LoginFailResult

登入失敗事件，包含登入失敗資訊

|     屬性     |    型別     | 說明                           | 備註 |
|:------------:|:-----------:|--------------------------------|------|
| auto_relogin |   `bool`    | 登入失敗是否有再次自動重新登入 |      |
|   user_id    |    `str`    | 登入失敗的用戶 ID              |      |
|  error_code  |    `str`    | 登入失敗錯誤代碼               |      |
|    errors    | `list[str]` | 登入失敗錯誤訊息               |      |

```python
@eskmo.event.user.login_fail
def onLoginFail(data):
    print("登入失敗: ", data)
```

## LoginSuccessResult

登入成功事件，包含成功登入資訊

## LoginProgressNotifyResult

登入進度通知事件，可獲得當前登入進度資訊