---
outline: deep
---

# 帳務事件

下表為帳務相關事件：

| 事件                     | 註冊方式                                                                                  | 回傳物件                                                        |
|--------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 未實現損益彙總更新       | [@api.event.pnl.unrealized_summary](/user-manual/accounting/unrealized-pnl)               | [PnLUnrealizedSummaryResult](#pnlunrealizedsummaryresult)       |
| 未實現損益明細更新       | [@api.event.pnl.unrealized_details](/user-manual/accounting/unrealized-pnl)               | [PnLUnrealizedDetailsResult](#pnlunrealizeddetailsresult)       |
| 已實現損益彙總更新       | [@api.event.pnl.realized_summary](/user-manual/accounting/realized-pnl)                   | [PnLRealizedSummaryResult](#pnlrealizedsummaryresult)           |
| 已實現損益明細更新       | [@api.event.pnl.realized_details](/user-manual/accounting/realized-pnl)                   | [PnLRealizedDetailsResult](#pnlrealizeddetailsresult)           |
| 已實現損益依股號彙總更新 | [@api.event.pnl.realized_summary_by_symbol](/user-manual/accounting/realized-pnl)         | [PnLRealizedStockSummaryResult](#pnlrealizedstocksummaryresult) |
| 帳務查詢完成通知         | [@api.event.pnl.update_finished](/user-manual/accounting/unrealized-pnl#帳務查詢完成事件) | `dict`，為空字典 `{}`                                           |

## PnLUnrealizedSummaryResult

帳務查詢未實現損益彙總後，取得的查詢結果物件

|        屬性         | 型別 | 說明                  | 備註                                            |
|:-------------------:|:----:|-----------------------|-------------------------------------------------|
|     stock_name      | str  | 股票名稱              |                                                 |
|     symbol_code     | str  | 股票代號              |                                                 |
|      currency       | str  | 幣別                  |                                                 |
|     trade_type      | str  | 交易種類              |                                                 |
|      position       | str  | 庫存股數              |                                                 |
|     mark_price      | str  | 市價                  |                                                 |
| price_changed_today | str  | 今日市價漲跌          |                                                 |
|    market_value     | str  | 市值                  |                                                 |
|         nav         | str  | 淨值                  |                                                 |
|         pnl         | str  | 損益                  |                                                 |
|      avg_price      | str  | 平均買進(券賣)成本    |                                                 |
|        cost         | str  | 付出成本              |                                                 |
|     deal_price      | str  | 成交價金              |                                                 |
|         fee         | str  | 手續費                |                                                 |
|    fee_estimated    | str  | 預估手續費            |                                                 |
|         tax         | str  | 交易稅                |                                                 |
|    tax_estimated    | str  | 預估交易稅            |                                                 |
|    margin_funds     | str  | 融資自備款/融券保證金 |                                                 |
|     collateral      | str  | 融資金/擔保品         |                                                 |
| dividend_estimated  | str  | 預估利息              |                                                 |
|      dividend       | str  | 股息                  |                                                 |
|  return_estimated   | str  | 試算報酬率            |                                                 |
|  unknown_stock_qty  | str  | 未知成本股數          |                                                 |
|        note         | str  | 備註                  |                                                 |
|     has_details     | str  | 有無詳細資料          | `Y`: 有資料, `N`: 無資料                        |
|     sorting_id      | str  | 排序序號              |                                                 |
|   trade_type_code   | str  | 交易種類代號          | 0:現股  3:融資(自) 4:融券(自) 8:券差 9:無券賣出 |
|      breakeven      | str  | 損益兩平點            | 此欄只提供交易種類為現股之交易                  |
|      login_id       | str  | LOGIN_ID              |                                                 |
|     account_no      | str  | ACCOUNT_NO            |                                                 |

```python
@api.event.pnl.unrealized_summary
def onPnL(data: PnLUnrealizedSummaryResult):
    print("未實現損益彙總: ", data)
```

## PnLUnrealizedDetailsResult

帳務查詢未實現損益明細後，取得的查詢結果物件

|       屬性       | 型別 | 說明                  | 備註                                           |
|:----------------:|:----:|-----------------------|------------------------------------------------|
|    stock_name    | str  | 股票名稱              |                                                |
|   symbol_code    | str  | 股票代號              |                                                |
|    deal_date     | str  | 成交日期              |                                                |
|    trade_type    | str  | 交易種類              |                                                |
|     purchase     | str  | 買進股數              |                                                |
|    offsetable    | str  | 可沖股數              |                                                |
|    avg_price     | str  | 單價                  |                                                |
|    deal_price    | str  | 成交價金              |                                                |
|       pnl        | str  | 損益                  |                                                |
|   return_rate    | str  | 試算報酬率            |                                                |
|       fee        | str  | 手續費                |                                                |
|  fee_estimated   | str  | 預估手續費            |                                                |
|       tax        | str  | 交易稅                |                                                |
|  tax_estimated   | str  | 預估交易稅            |                                                |
|   margin_funds   | str  | 融資自備款/融券保證金 |                                                |
|    collateral    | str  | 融資金額/擔保品金額   |                                                |
| lending_interest | str  | 融資/融券利息         |                                                |
|    short_fee     | str  | 融券手續費            |                                                |
|     payment      | str  | 收付金額              |                                                |
|     dividend     | str  | 股息                  | 目前此欄無值                                   |
|       note       | str  | 備註                  |                                                |
|     book_no      | str  | 委託書號              |                                                |
| trade_type_code  | str  | 交易種類代號          | 配合第4欄交易種類 0:現股 3:融資(自) 4:融券(自) |
|     login_id     | str  | LOGIN_ID              |                                                |
|    account_no    | str  | ACCOUNT_NO            |                                                |

```python
@api.event.pnl.unrealized_details
def onPnL(data: PnLUnrealizedDetailsResult):
    print("未實現損益明細: ", data)
```

## PnLRealizedSummaryResult

帳務查詢已實現損益彙總後，取得的查詢結果物件


markdown
複製程式碼
|      屬性       | 型別 | 說明         | 備註                                                                        |
|:---------------:|:----:|--------------|-----------------------------------------------------------------------------|
|   trade_type    | str  | 交易種類     | 現股、 融資(代) 、融券(代)、 融資(自) 、融券(自) 、無券、 現沖 、券差、股息 |
| trade_type_code | str  | 交易種類代號 | 0:現股1:融資(代) 2:融券(代) 3:融資(自) 4:融券(自) 5:無券 6:現沖 8:券差      |
|      date       | str  | 日期         | 民國年月日                                                                  |
| subsidiary_code | str  | 營業單位代碼 |                                                                             |
|     account     | str  | 證券帳號     |                                                                             |
|    stock_no     | str  | 股票代號     |                                                                             |
|       qty       | str  | 股數         |                                                                             |
|      price      | str  | 成交價格     |                                                                             |
|       pnl       | str  | 損益         |                                                                             |
|   return_rate   | str  | 報酬率       |                                                                             |
|      note       | str  | 備註         |                                                                             |
|   has_details   | str  | 詳細資料     | Y:有資料 N:無資料                                                           |
|  book_no_sell   | str  | 委託書號(賣) |                                                                             |
|   seq_no_sell   | str  | 序號(賣)     |                                                                             |
|   stock_name    | str  | 股票名稱     |                                                                             |
|    currency     | str  | 幣別         |                                                                             |
|   investment    | str  | 投資額       |                                                                             |
|    login_id     | str  | LOGIN_ID     |                                                                             |

```python
@api.event.pnl.realized_summary
def onPnL(data: PnLRealizedSummaryResult):
    print("已實現損益彙總: ", data)
```

## PnLRealizedDetailsResult

帳務查詢已實現損益明細後，取得的查詢結果物件

|      屬性       | 型別  | 說明         | 備註 |
|:---------------:|:-----:|--------------|------|
|      date       | `str` | 日期         |      |
|   trade_type    | `str` | 交易類型     |      |
|    stock_no     | `str` | 股票代號     |      |
|   stock_name    | `str` | 股票名稱     |      |
|     book_no     | `str` | 帳本編號     |      |
|     buysell     | `str` | 買賣類型     |      |
|       qty       | `str` | 數量         |      |
|    avg_price    | `str` | 平均價格     |      |
|   deal_price    | `str` | 成交價格     |      |
|       fee       | `str` | 手續費       |      |
|       tax       | `str` | 稅金         |      |
|  margin_funds   | `str` | 保證金       |      |
|   collateral    | `str` | 抵押品       |      |
| margin_interest | `str` | 保證金利息   |      |
|    short_fee    | `str` | 融券費用     |      |
|     payment     | `str` | 支付金額     |      |
|   offset_qty    | `str` | 可沖銷數量   |      |
|      note       | `str` | 備註         |      |
| trade_type_code | `str` | 交易類型代碼 |      |
|    login_id     | `str` | 登錄ID       |      |
|   account_no    |  str  | 帳戶號碼     |      |

```python
@api.event.pnl.realized_details
def onPnL(data: PnLRealizedDetailsResult):
    print("已實現損益明細: ", data)
```

## PnLRealizedStockSummaryResult

帳務查詢已實現損益依股號彙總後，取得的查詢結果物件

|      屬性       | 型別 | 說明         | 備註 |
|:---------------:|:----:|--------------|------|
|   trade_type    | str  | 交易類型     |      |
| trade_type_code | str  | 交易類型代碼 |      |
| subsidiary_code | str  | 子公司代碼   |      |
|     account     | str  | 帳戶         |      |
|   symbol_code   | str  | 股票代碼     |      |
|       qty       | str  | 數量         |      |
|       pnl       | str  | 損益         |      |
|   return_rate   | str  | 回報率       |      |
|    currency     | str  | 貨幣         |      |
|    login_id     | str  | 登錄ID       |      |

```python
@api.event.pnl.
def onPnL(data: PnLRealizedStockSummaryResult):
    print("已實現損益依股號彙總: ", data)
```