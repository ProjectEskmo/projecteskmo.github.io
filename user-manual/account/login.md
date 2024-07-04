---
outline: deep
---

# 用戶登入

要使用 Eskmo API，首先必須登入

## 登入

若多帳戶登入下，用戶登入可以指定 `tag` 以便區分，預設為 `user_id`

```python
from eskmo.api import api as eskmo

@eskmo.start
def main():
    tag1 = "用戶 1"
    user1 = eskmo.login(userId="A123456789", password="**********", tag=tag1)
    print(user1)

    tag2 = "用戶 2"
    user2 = eskmo.login(userId="B987654321", password="**********", tag=tag2)
    print(user2)

if __name__ == "__main__":
    main()
```

::: info
若要多用戶登入，請記得要安裝好所有用戶的憑證
:::

## 用戶列表

可藉由 `eskmo.users` 取得所有登入的用戶，並透過 `tag` 取得

```python
from eskmo.api import api as eskmo

@eskmo.start
def main():
    tag1 = "用戶 1"
    eskmo.login(userId="F128052937", password="apple790831", tag=tag1)
  
    user1 = eskmo.users[tag1]　 # [!code focus]
    print(user1)　　　　　　　　 # [!code focus]

if __name__ == "__main__":
    main()
```

