---
outline: deep
---

# 帳戶餘額

在初次登入時，會有登入時點的帳戶餘額，後續需要透過

## 查詢帳戶餘額

```python
@eskmo.start
def main():
    Logger.show = True
    user = eskmo.login(userId="F128052937", password="*********")

    print(f"Balance: {user.account.balance}") 
    print(f"Summary: {user.account.balance.summary}")
    print(f"Unrealized: {user.account.balance.summary.unrealized}")
    print(f"Updated: {user.account.balance.updated}")
```

## 更新帳戶餘額

```python
@eskmo.start
def main():
    Logger.show = True
    user = eskmo.login(userId="F128052937", password="apple790831")

    account.balance.update(type="summary", pnl="unrealized")
    print(f"Summary: {account.balance.summary.unrealized}")
    print(f"Updated: {account.balance.updated}")
```