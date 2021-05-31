
/**
 * 柯里化。闭包存参数
 * @param {Function} fn 
 * @returns 
 */
const curry = function(fn){
    let params = []
    const next = function(){
        const args = [].slice.call(arguments);
        params = params.concat(args);
        return params.length >= fn.length ? fn.apply(fn, params) : next;
    }
    return next;
}

// 测试
const sum = function (a,b,c,d){
    return a + b + c + d;
}
const sumCry = curry(sum);

console.log(sumCry(1)(2)(3)(4))