/**
 * 柯里化
 * @param {Function} fn 
 */
 function curry(fn) {
    let cache = [];
    var next = function(){
        cache = cache.concat([].slice.call(arguments))
        return cache.length >= fn.length ? fn.apply(fn, cache) : next;
    }
    return next;
}

// 测试
const sum = function (a,b,c,d){
    return a + b + c + d;
}
const sumCry = curry(sum);

console.log(sumCry(1)(2)(3)(4))

