---
outline: deep
---

# 錯誤處理

## API 執行錯誤

當執行 API 函數遇到錯誤時，將會觸發事件發生

TBD

```python
from eskmo.api import api as eskmo

@eskmo.start
def main():
    user1 = eskmo.login(userId="A123456789", password="**********", tag=tag1)
    print(user1)

if __name__ == "__main__":
    main()
```
