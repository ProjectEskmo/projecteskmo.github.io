---
outline: deep
---

# 資料結構



## `@frozen_dataclass`

針對所有的註冊事件回傳物件，Eskmo 採用 `dataclasses` 搭配 `frozen=True` 提供，以避免修改到事件回傳的結果

```python
from dataclasses import dataclass

def frozen_dataclass(cls):               
    return dataclass(frozen=True)(cls)   

@frozen_dataclass
class EventResult:
    pass
```