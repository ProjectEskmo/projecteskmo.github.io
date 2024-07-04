---
outline: deep
next:
  text: '登入'
  link: '/user-manual/account/login'
---

# 帳戶

Eskmo 中的帳戶結構如下：

| 級別       | 識別符                          | 主要用途             |
|------------|---------------------------------|----------------------|
| User       | user_id  (身份證字號、統一編號) | API 登入、訂閱報價   |
| Account    | acconut_id (證券帳戶號碼)       | 下單、帳務與庫存查詢 |
| Subaccount | subaccount_id                   |                      |

Eskmo 支持多帳戶，可以有多個 `User` 同時登入

一般情況下，`User` 會有 2 個帳戶：分別是 (1) **證券帳戶** 和 (2) **期貨帳戶**