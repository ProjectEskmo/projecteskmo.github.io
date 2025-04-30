---
outline: deep
---

# 回報事件

## 證券委託

下表為證券委託回報事件：

| 事件         | 註冊方式                                                             | 回傳物件                                      |
|--------------|----------------------------------------------------------------------|-----------------------------------------------|
| 一般委託通知 | [@api.event.order.notify](/user-manual/reply/latest/order)           | [OrderNotifyResult](#OrderNotifyResult)       |
| MIT 委託通知 | [@api.event.mit_order.notify](/user-manual/reply/latest/smart-order) | [MITOrderNotifyResult](#MITOrderNotifyResult) |

## OrderNotifyResult

委託通知事件，收到最新回報後委託收到更新，就會觸發獲得

| 屬性  |            型別             | 說明         | 備註                         |
|:-----:|:---------------------------:|--------------|------------------------------|
| count |            `int`            | 委託流水號   | Eskmo 自定義，可判斷委託先後 |
| order | [OrderStatus](#orderstatus) | 委託當前狀態 |                              |

count: int = 0
    order: OrderStatus = None

```python
@api.event.order.notify
def onOrderNotify(data: OrderNotifyResult):
    print("委託通知: ", data)
```

## OrderStatus

委託當前狀態，在委託通知事件觸發後可得

|     屬性      |      型別       | 說明       | 備註 |
|:-------------:|:---------------:|------------|------|
|     reply     | [Reply](#reply) | 最新回報   |      |
|   is_closed   |     `bool`      | 是否結束   |      |
|    volume     |      `int`      | 原始委託數 |      |
| volume_remain |      `int`      | 剩餘委託數 |      |
| volume_cancel |      `int`      | 刪除委託數 |      |
|  volume_deal  |      `int`      | 成交委託數 |      |

回傳結果中的委託數量以股數計

## Reply

單筆委託可能有多次狀態更新，每次狀態變動都會對應到一個回報物件

|             屬性              |                  型別                   | 說明                 | 備註                                                                       |
|:-----------------------------:|:---------------------------------------:|----------------------|----------------------------------------------------------------------------|
|              num              |                  `int`                  | Eskmo 自編序號       | 根據 API 取得順序遞增                                                      |
|            key_no             |                  `str`                  | 原始13碼委託序號     |                                                                            |
|            market             |                  `str`                  | 市場別               |                                                                            |
|             type              |                  `str`                  | 回報類型             | `N` 委託 `C` 取消 `U` 改量 `P` 改價 `D` 成交 `B` 改價改量 `S` 動態退單     |
|            status             |                  `str`                  | 回報狀態             | `Y` 失敗 `T` 逾時 `N`正常                                                  |
|            broker             |                  `str`                  | 分公司代號           |                                                                            |
|            cust_no            |                  `str`                  | 交易帳號             |                                                                            |
|         buysell_info          |                  `str`                  | 證逐筆資訊           | 請見 SKCOM 文件                                                            |
|          exchange_id          |                  `str`                  | 交易所               |                                                                            |
|            symbol             |                  `str`                  | 商品代碼             |                                                                            |
|         strike_price          |                  `str`                  | 履約價               |                                                                            |
|            book_no            |                  `str`                  | 委託書號             |                                                                            |
|             price             |                  `str`                  | 價格                 | 委託回報為委託價，成交回報為成交價                                         |
|           numerator           |                  `str`                  | 分子                 | 海外期貨回報用                                                             |
|          denominator          |                  `str`                  | 分母                 | 海外期貨回報用                                                             |
|          price_lags           |     [list[ReplyPrice]](#replyprice)     | 觸發價格             |                                                                            |
|            volume             |                  `int`                  | 股數                 | 委託回報為委託量，成交回報為成交量，改量回報為減量數，刪單回報為原委託剩量 |
|          before_qty           |                  `int`                  | 異動變更前量         | 參考欄位，刪單為空值                                                       |
|           after_qty           |                  `int`                  | 異動變更後量         | 參考欄位，刪單為空值                                                       |
|           date_str            |                  `str`                  | 交易日期             |                                                                            |
|           time_str            |                  `str`                  | 交易時間             | 含冒號，例如: `HH:MM:SS`                                                   |
|            ok_seq             |                  `str`                  | 成交序號             | 請以 `execution_no` 為主                                                   |
|            sub_id             |                  `str`                  | 子帳帳號             |                                                                            |
|            sale_no            |                  `str`                  | 營業員編號           |                                                                            |
|             agent             |                  `str`                  | 委託介面             |                                                                            |
|          trade_date           |                  `str`                  | 委託日期             | 僅提供海外委託，國內尚未提供                                               |
|            msg_no             |                  `str`                  | 回報流水號           |                                                                            |
|           pre_order           |                  `str`                  | 預約單別             | `A` 盤中單 `B` 預約單                                                      |
|        commodity_lags         | [list[ReplyCommodity]](#replycommodity) | 商品回報資訊         |                                                                            |
|         execution_no          |                  `str`                  | 成交序號             |                                                                            |
|         price_symbol          |                  `str`                  | 下單期標             |                                                                            |
|           reserved            |                  `str`                  | T 盤別               | `A` T 盤  `B` T+1 盤<br />(僅國內期、選委託)                               |
|        order_effective        |                  `str`                  | 有效委託日           |                                                                            |
|           call_put            |                  `str`                  | 選擇權類型           | `C` 買權 `P` 賣權                                                          |
|           order_seq           |                  `str`                  | 交易所單號           | 依海外交易所實際提供為主，又稱上手單號                                     |
|           error_msg           |                  `str`                  | 委託單錯誤訊息       | 當 `status` 為 `Y` 時                                                      |
| cancel_order_mark_by_exchange |                  `str`                  | 交易所動態退單代碼   | 見下方 [動態退單說明](#動態退單說明)                                       |
|      exchange_tandem_msg      |                  `str`                  | 交易所或後台退單訊息 | 見下方 [動態退單說明](#動態退單說明)                                       |
|            seq_no             |                  `str`                  | 13碼序號             |                                                                            |
|            buysell            |                  `str`                  | 證逐筆資訊-買賣別    | 見下方 [證逐筆資訊說明](#證逐筆資訊)                                       |
|          trade_type           |                  `str`                  | 證逐筆資訊-交易別    | 見下方 [證逐筆資訊說明](#證逐筆資訊)                                       |
|          order_type           |                  `str`                  | 證逐筆資訊-單別      | 見下方 [證逐筆資訊說明](#證逐筆資訊)                                       |
|          price_type           |                  `str`                  | 證逐筆資訊-價別      | 見下方 [證逐筆資訊說明](#證逐筆資訊)                                       |

### 動態退單說明

被「動態退單」的委託，會收到委託回報、取消回報與動態退單回報，若有成交部位還會有成交回報。
- 買進委託：可能成交價格 > 即時價格區間上限 → 退單
- 賣出委託：可能成交價格 < 即時價格區間下限 → 退單

即時價格區間上、下限計算公式
- 即時價格區間上限 = 退單價＋退單點數
- 即時價格區間下限 = 退單價－退單點數
- 退單點數: 每日盤前計算完成(盤中固定)

### 證逐筆資訊說明

證券回報會以五碼中英文字提供四項委託資訊，例如 `B04R2`

可拆解成 `B` + `04` + `R` + `2`，對應則為 `買進`, `融券`, `ROD`, `限價`

，Eskmo 對其轉換為四個欄位：
- 買賣別 `buysell`
- 交易別 `trade_type`
- 單別 `order_type`
- 價別 `price_type`

可以不管 `buysell_info` 字串，等價於上面四個欄位

## ReplyPrice

回報價格分子分母物件

|    屬性     | 型別  | 說明 | 備註 |
|:-----------:|:-----:|------|------|
|    price    | `str` | 價格 |      |
|  numerator  | `str` | 分子 |      |
| denominator | `str` | 分母 |      |

## ReplyCommodity

商品期貨選擇權的回報物件

|     屬性     | 型別  | 說明         | 備註 |
|:------------:|:-----:|--------------|------|
|    com_id    | `str` | 商品 ID      |      |
|  year_month  | `str` | 期貨結算年月 |      |
| strike_price | `str` | 選擇權履約價 |      |