---
outline: deep
---

# Eskmo API

Eskmo API 函式庫是可用的台灣證券交換或交換類別的集合。 每個類別都實作特定台灣證券交換的公共和私有 API。 所有交換都派生自基本 Exchange 類，並共用一組通用方法。 若要從 Eskmo API 庫存取特定交換，您需要建立對應交換類別的實例。 支援的交易所經常更新，並定期添加新的交易所。

```md
                                 User
    +-------------------------------------------------------------+
    |                          Eskmo API                          |
    +------------------------------+------------------------------+
    |            Public            |           Private            |
    +=============================================================+
    │                              .                              |
    │                    The Unified Eskmo API                    |
    │                              .                              |
    |       loadMarkets            .           fetchBalance       |
    |       fetchMarkets           .            createOrder       |
    |       fetchCurrencies        .            cancelOrder       |
    |       fetchTicker            .             fetchOrder       |
    |       fetchTickers           .            fetchOrders       |
    |       fetchOrderBook         .        fetchOpenOrders       |
    |       fetchOHLCV             .      fetchClosedOrders       |
    |       fetchStatus            .          fetchMyTrades       |
    |       fetchTrades            .                deposit       |
    |                              .               withdraw       |
    │                              .                              |
    +=============================================================+
    │                              .                              |
    |                     Custom Exchange API                     |
    |         (Derived Classes And Their Implicit Methods)        |
    │                              .                              |
    |       publicGet...           .          privateGet...       |
    |       publicPost...          .         privatePost...       |
    |                              .          privatePut...       |
    |                              .       privateDelete...       |
    |                              .                   sign       |
    │                              .                              |
    +=============================================================+
    │                              .                              |
    |                            SKCOM                            |
    │                              .                              |
    +=============================================================+
```

為所有交換實作了完整的公有和私有 HTTP REST API。 Eskmo API Pro 提供 JavaScript、PHP、Python 中的 WebSocket 實現，Eskmo API Pro 是 Eskmo API 的專業插件，支援 WebSocket 串流。

- Exchanges
- Markets
- Implicit API
- Unified API
- Public API
- Private API
- Error Handling
- Troubleshooting
- Eskmo API Pro

## Social

- `<<<<Twitter>>>>` Follow us on Twitter
- `<<<<Medium>>>>>` Read our blog on Medium
- `<<<<Discord>>>>` Join our Discord
- `<<<<Telegram Channel>>>>` Announcements Eskmo API Channel on Telegram (important announcements)
- `<<<<Line Group>>>>` Announcements Eskmo API Channel on Telegram (important announcements)
- `<<<<Telegram Chat>>>>` Eskmo API Chat on Telegram (technical support)

### SKCOM API

TBD

## Authentication

## API Keys Setup

## Credential Validation

### Rate Limit

```python
exchange = Eskmo API.binance(config)
exchange.set_sandbox_mode(True)  # enable sandbox mode

```
## Naming Consistency

### Notes On Naming Consistency

### Questions On Naming Consistency

## Naming Conventions

## How To Passing Parameters To API

## API Method Naming Conventions

## Synchronous vs Asynchronous Calls

## Working With Datetimes And Timestamps

## Notes On XXXX Structure

## Notes On Latency

## Understanding The Orders API Design

```python
    | price  | amount
----|----------------
    |  1500 | 200
    |  1400 | 300 <------------------------------------------------------------------------------+
  a |  1300 | 100 <--- it will close your position at market price above 1300                    |
  s |  1200 | 200        when your takeProfitPrice is reached from below                         |
  k |  1100 | 300   or it will be executed at your limit price higher than your takeProfitPrice -+
    |  1000 | 100 <-  you bought to enter a long position here at 1000
    |   900 | 100
----|---------------- last price is 900
    |   800 | 100
    |   700 | 200
  b |   600 | 100
  i |   500 | 300
  d |   400 | 200
    |   300 | 100
    |   200 | 100
```

## Exceptions Upon Canceling Orders

## Loading Markets

## Symbols And Market Ids

## Fees

## Error Handling

```python
# try to call a unified method
try:
    response = await exchange.fetch_order_book('ETH/BTC')
    print(response)
except Eskmo API.NetworkError as e:
    print(exchange.id, 'fetch_order_book failed due to a network error:', str(e))
    # retry or whatever
except Eskmo API.ExchangeError as e:
    print(exchange.id, 'fetch_order_book failed due to exchange error:', str(e))
    # retry or whatever
except Exception as e:
    print(exchange.id, 'fetch_order_book failed with:', str(e))
    # retry or whatever
```

## Troubleshooting
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```


Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
