/**
 * 手写promise.any()
 * 只要有一个resolve，就返回结果；如果全部都是reject，则返回错误
 * - 1.返回promise对象
 * - 2.迭代，声明变量i,j
 *      - a.发现resolve，执行i++, j++
 *      - b.发现reject,执行i++
 *      - c.j<1时，promise状态改为``fullfilled
 *      - d.i=promiseList.length -1，触发reject
 * @param {Promise<string>[]} promiseList 
 */
Promise.any = function(promiseList){
    let i = 0, j = 0;
    return new Promise((resolve,reject) => {
        for(var p of promiseList){
            p.then(res => {
                if (j <1){
                    resolve(res);
                }
                i ++;
                j ++;
            }).catch(err => {
                if (i >= promiseList.length -1){
                    reject('AggregateError: No Promise in Promise.any was resolved')
                }
                i ++;
            })
        }
    })
}


// 测试 node src/promise/12_promise.any.write.js 
var p1 = new Promise((rsv,rjc) => {
    setTimeout(rjc, Math.random() * 200, 'p1');
})
var p2 = new Promise((rsv,rjc) => {
    setTimeout(rjc, Math.random() * 200, 'p2');
})
var p3 = new Promise((rsv,rjc) => {
    setTimeout(rjc, Math.random() * 200, 'p3');
})
var p4 = new Promise((rsv,rjc) => {
    setTimeout(rjc, Math.random() * 200, 'p4');
})

Promise.any([p1,p2,p3,p4]).then(res => {
    console.log('res=',res)
}).catch(err => {
    console.log('err=',err)
})