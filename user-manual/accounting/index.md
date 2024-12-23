---
outline: deep
next:
  text: '未實現損益'
  link: '/user-manual/accounting/unrealized-pnl'
---

# 帳務

在 Eskmo 中，帳務資料有兩塊：回報試算 與 券商查詢 兩種

**回報試算帳務** 指透過委託回報，Eskmo 依商品檔彙總試算，得到當下的部位與成本

此不受到 API 請求限制且永遠為最新，但資訊較少

**券商查詢帳務** 有查詢時間限制，沒有查詢就不會更新，但有更多帳務資訊（如交易稅、股息等）

本章節帳務主要是指 **券商查詢帳務** 部分，**回報試算帳務** 請見 [商品檔 > 帳務資訊](/user-manual/symbol/balance)

其中券商查詢帳務分成 未實現損益 (Unrealized)、已實現損益 (Realized) 兩類查詢

## 群益策略王 API

> [!WARNING]
> 群益策略王 API 帳務查詢時有 5 秒的間隔限制，須等 5 秒後才能進行下一個帳務查詢

除了已實現與未實現損益外，群益策略王 API 還提供現股當沖損益 <small>(comming soon)</small> 查詢

