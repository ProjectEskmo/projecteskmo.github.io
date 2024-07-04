---
outline: deep
---

# 安裝憑證

## 開戶作業

請先確定您已經在群益開戶完成，若沒有的話，請至 [群益證券官網](http://www.capital.com.tw)：

1. 完成開戶作業，若需要期貨功能則需要再多開期貨帳戶
2. 簽署 API 同意書

## 安裝憑證

Eskmo 預設會自動安裝群益 API，您只需要安裝憑證即可。

憑證為電子交易憑證的簡稱，申請以一年為一期，由群益官方進行發放與驗證交易身分。

因此登入群益 API 除了檢驗帳戶密碼之外，也會檢驗憑證。

> [!CAUTION]
> 請避免在陌生或公開電腦中安裝憑證，或隨意轉發分享憑證檔案，避免憑證被盜用造成交易損失

請到 [憑證專區](https://www.capital.com.tw/web/#/certificate/ap) 點選 **立即申請/展延**，下載 **RAWinApp.exe**

打開　**RAWinApp.exe** 並登入後，點選申請即可，憑證申請完成應顯示如下圖：

![](/assets/images/install-ca.png)

> [!TIP]
> 如果要使用指定的群益 API 版本，請根據 [群益 API 版本對應表](#) 安裝對應的 Eskmo 版本


## 安裝 Eskmo

```bash
pip install eskmo
```