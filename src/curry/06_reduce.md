Array.proptotype.recude

es6规范如下
- 1.声明变量`o`,将`this.value`转为`Object`类型
- 2.声明变量`len`，表示数组长度
- 3.callback不存在，则跑出异常`TypeError`
- 4.`len=0`或`initialValue`不存在，则抛出异常
- 5.声明变量`k=0`;
- 6.声明变量累加器`accumulator = undefined`
- 7.如果初始值`initialValue`存在，则累加器默认值为`initialValue`
- 8.`initialValue`不存在的情况
  - a.`kPresent`设置为false
  - b.只要`k< len`就迭代
    - (1)