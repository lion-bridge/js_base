/**
 * 手写Promise.all()
 * - 返回promise
 * - 1.声明变量ret,i,j
 * - 2.迭代
 *      - a.thennable, 决议结果填入到ret中，i++,如果所有promise全部决议完成，执行resolve
 *      - b.reject, 返回第一个拒绝的promise结果
 * @param {Promise<string>[]} promiseList 
 */
Promise._all = function(promiseList){
    return new Promise((resolve, reject) => {
        var ret = [], i = 0, j = 0;
        ret.length = promiseList.length;
        for(let index in promiseList){
            promiseList[index].then(res => {
                ret[index] = res;
                i ++;
                if (i === promiseList.length)(
                    resolve(ret)
                )
            }).catch(err => {
                if (j < 1) {
                    reject(err)
                }
                j ++;
                
            })
        }
    })
}



// 测试 node src/promise/12_promise.any.write.js 
var p1 = new Promise((rsv,rjc) => {
    setTimeout(rsv, Math.random() * 200, 'p1');
})
var p2 = new Promise((rsv,rjc) => {
    setTimeout(rsv, Math.random() * 200, 'p2');
})
var p3 = new Promise((rsv,rjc) => {
    setTimeout(rsv, Math.random() * 200, 'p3');
})
var p4 = new Promise((rsv,rjc) => {
    setTimeout(rsv, Math.random() * 200, 'p4');
})

Promise._all([p1,p2,p3,p4]).then(res => {
    console.log('res=',res)
}).catch(err => {
    console.log('err=',err)
})