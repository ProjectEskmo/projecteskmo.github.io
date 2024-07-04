---
outline: deep
---

# API 測試

藉由執行 API 測試來確認是否正確安裝了相應套件

```python
from eskmo.api import api as eskmo

@eskmo.start
def main():

    result = eskmo.api_testing()
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