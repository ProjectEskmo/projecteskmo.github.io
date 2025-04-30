---
outline: deep
---

# API 測試

藉由執行 API 測試來確認是否正確安裝了相應套件

```python
from eskmo import api
api.logger.show = False

@api.start
def main():

    result = api.testing()
    print(result)
    # {'檢測項目': [('啟動多進程', '成功'),
    #              ('依賴套件初始化', '成功'),
    #              ('Eskmo 初始化', '成功'),
    #              ('Comtypes 初始化', '成功'),
    #              ('SKCOM 初始化', '成功')], 
    #  'Messages': ['SKCOM API 已就位，可以開始使用']}

if __name__ == "__main__":
    main()
```


> [!NOTE]
> 如果您在編輯器 (如 VSCode, PyCharm) 使用預設的執行功能 (例如 `Run`, `Debug`)
> 
> 並遇到中文顯示亂碼問題，可改由在命令行介面 (CMD) 執行 `python example.y` 來改善
> 