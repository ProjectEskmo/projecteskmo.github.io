---
outline: deep
---

# 帳戶事件

下表為帳戶有關事件：

| 事件         | 註冊方式                                                            | 回傳物件                                       |
|--------------|---------------------------------------------------------------------|------------------------------------------------|
| 開始登入     | [@api.event.user.login_start](/user-manual/account/login)           | [LoginStartResult](#loginstartresult)          |
| 登入失敗     | [@api.event.user.login_fail](/user-manual/account/login)            | [LoginFailResult](#loginstartresult)           |
| 登入成功     | [@api.event.user.login_success](/user-manual/account/login)         | [LoginSuccessResult](#loginstartresult)        |
| 登入進度通知 | [@api.event.user.login_progress_notify](/user-manual/account/login) | [LoginProgressNotifyResult](#loginstartresult) |

## LoginStartResult

登入開始事件，包含登入設置資訊

|    屬性    | 型別  | 說明       | 備註 |
|:----------:|:-----:|------------|------|
|    type    | `str` | 登入類型   |      |
| connection | `int` | 登入連線數 |      |

```python
from eskmo import LoginStartResult

@api.event.user.login_start
def onLoginStart(data: LoginStartResult):
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
from eskmo import LoginFailResult

@api.event.user.login_fail
def onLoginFail(data: LoginFailResult):
    print("登入失敗: ", data)
```

## LoginSuccessResult

登入成功事件，包含成功登入資訊

|  屬性  | 型別  | 說明           | 備註 |
|:------:|:-----:|----------------|------|
| event  | `str` | 登入成功事件   |      |
|  api   | `str` | 登入的券商 API |      |
| userId | `str` | 登入的帳戶     |      |

```python
from eskmo import LoginSuccessResult

@api.event.user.login_success
def onLoginSuccess(data: LoginSuccessResult):
    print("登入成功: ", data)
```

## LoginProgressNotifyResult

登入進度通知事件，可獲得當前登入進度資訊

|    屬性     | 型別  | 說明         | 備註 |
|:-----------:|:-----:|--------------|------|
|    event    | `str` | 登入通知事件 |      |
|  progress   | `int` | 進度計數     |      |
| description | `str` | 進度描述     |      |

```python
from eskmo import LoginProgressNotifyResult

@api.event.user.login_progress_notify
def onLoginSuccess(data: LoginProgressNotifyResult):
    print("登入進度: ", data)