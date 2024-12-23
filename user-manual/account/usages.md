---
outline: deep
---

# 帳戶操作


## 帳戶列表

用戶登入後，透過帳戶列表取得對應帳戶，並對帳戶進行操作

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    user = api.login(userId="A123456789", password="************") # [!code focus]
    accounts = user.accounts  # [!code focus]
    print(accounts)           # [!code focus]
    
if __name__ == "__main__":
    main()
```

## 帳戶設定

用戶預設的帳戶 `user.account` 為證券帳戶

透過 `set_main_account` 可修改為其他帳戶（例如期貨帳戶）

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    # 預設帳戶                                                        # [!code focus]
    user = api.login(userId="A123456789", password="************") # [!code focus]
    account = user.account                                           # [!code focus]
    print(account)                                                   # [!code focus]

    # 修改預設帳戶                                                    # [!code focus]
    user.set_main_account(account.name)                              # [!code focus]
    print(user.account)                                              # [!code focus]

    # 修改帳戶名稱                                                    # [!code focus]
    account_info = ("************", "主帳戶")                         # [!code focus]
    user.update_account_name(*account_info)                          # [!code focus]
    account: StockAccount = user.accounts["主帳戶"]                  # [!code focus]
    
if __name__ == "__main__":
    main()
```

## 取得帳戶 ID

與下單有關的操作可能會需要帳戶 ID，透過用戶可取得所有帳戶 ID：

```python
from eskmo import api

api.logger.show = True

@api.start
def main():
    user = api.login(userId="A123456789", password="************") # [!code focus]
    accountIds = user.get_account_ids()                              # [!code focus]
    print(accountIds)                                                # [!code focus]
    
if __name__ == "__main__":
    main()
```

或是透過帳戶物件 `account.id` 取得：

```python
api.logger.show = True

@api.start
def main():
    user = api.login(userId="A123456789", password="*************")

    account = user.account # [!code focus]
    print(account.id) # [!code focus]

    
if __name__ == "__main__":
    main()
```