---
outline: deep
next:
  text: '安裝'
  link: '/user-manual/prerequisites/installation'
---

# 環境配置

> [!TIP]
> 目前 Eskmo 僅支持 [群益策略王 API](https://www.capital.com.tw/web/#/download/ApiTrading/ApiTradinginfo)，各家券商將陸續支持
>
> 目前群益策略王 API 僅支持 Windows

## 群益 SKCOM

使用 Eskmo 在群益下單之前，您需要先：

1. 完成開戶作業
2. 安裝群益 API 憑證

完成後即可安裝 Eskmo API:

```bash
pip install eskmo
```

安裝 Eskmo 後，透過命令行安裝 SKCOM:

```bash
eksmo install skcom
```
