# 更新日誌

### 4.2.95 (2024-04-11)
- coinex: fetchOrderBook v2
- fix(coinbasePro): handle alias
- Added support for CSPR, VCHF, VEUR
- fix(gemini): parseMarket was parsing 'USDCUSD' as CUSD/USD. 
- fix(OrderBook.ts): add asks/bids/datetime/nonce/timestamp prop 
- errors autogeneration
- Okx replacing safeValue 
> 4.2.95 [b9a93b236d](http://github.com)

### 4.2.94 (2024-04-10)
- new method: fetchConvertQuote 
- fix(Kucoin): watchTickers topic should not be all if symbols passed 
- fix(cli): read pem secrets properly
- binance: fix fetchIndexOHLCV inverse pair parameter 
- binance: add POST /api/v3/orderList/oco
- new method: fetchConvertCurrencies 
- fix(Kucoin): read watchTicker's method from config 
> 4.2.94 [bc924c9772](http://github.com)

### 4.2.93 (2024-04-09)
- feat(probit): fetchDepositsWithdrawals 
- encode types 
- refactor(exchange): parseLeverageTiers accepts either a dictionary or an array
> 4.2.93 [d14da7def7](http://github.com)