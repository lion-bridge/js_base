柯里化。闭包存参数
- 1. 声明变量cache
- 2. 声明函数`next`
  - a.获取next函数的参数，合并到`cache`中
  - b.定义返回结果`ret`
  - c.如果`cache.length>=fn.length`,执行`ret = fn.apply(fn, cache)`
    - 否则：`ret = next`
- 3. 返回函数next