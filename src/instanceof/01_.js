/**
 * instanceof原理是检查对象的原型链.
 * 使用`Object.getPrototypeOf()`
 */

var _instanceOf = function(_ins, obj){
    Object.getPrototypeOf(_ins)
}