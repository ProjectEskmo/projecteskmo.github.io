---
outline: deep
---

# 安裝

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


## 配置 Python 開發環境

若需要配置開發環境中文教學，請見 [開發環境建置](https://hackmd.io/@peterju/SyPue7x_3)

如果您對 Python 一無所知，以下是免費的 Python 中文學習資源：

- [Python 官方教學 (文章)](https://docs.python.org/zh-tw/3/tutorial/index.html) : 具有基本程式開發能力的人，可以快速上手
- [廖雪峰的 Python 教程 (文章)](https://www.liaoxuefeng.com/wiki/1016959663602400) : 方便無基礎的人從 0 開始
- [給資料科學家的 Python 基礎課 (影音)](https://www.youtube.com/watch?v=uzInb5gbl4M) : 方便熟練數據分析、Excel 的人學習

## 安裝 Python 套件 Eskmo

```bash
pip install eskmo
```

若您有特定策略王 API 版本需求，請依照 [群益 API 對應表](/overview/version#群益-api-對應表) 安裝對應的 Eskmo 的最新版本

## 安裝 SKCOM 元件

#### 方法 1. 指令安裝 (建議)

當您安裝好 eskmo Python 套件，也會為您註冊了指令 `eskmo`

透過在 **命令行視窗** 輸入指令即可安裝最新的券商 API，以群益 SKCOM 元件為例

```bash
eskmo install skcom
```

輸入後，需要以系統管理員身分執行，同意後會看到 DLL 檔註冊成功：

![](/assets/images/install-skcom.png)


#### 方法 2. 手動安裝

請到 [群益 API下單](https://www.capital.com.tw/web/#/download/ApiTrading/ApiTradinginfo) 下載群益 SKCOM 元件，並依據指示安裝 SKCOM API

在該頁面下方也有 **Python 使用說明**, **API 元件使用說明** 可以下載閱讀

