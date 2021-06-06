/**
 * 手写Promise.allSettled()
 * - 返回promise对象
 * - 1.声明变量ret, 计数器count
 * - 2.迭代
 *      - a.thenable, 填入ret
 *      - b.rejected, 填入rest
 *      - c.达到最后一个promise，完成则resolve，拒绝则reject
 * @param {Promise<string>[]} promiseList 
 */
Promise._allSettled = function(promiseList){
    return new Promise((resolve, reject) => {
        var ret = [], count = 0;
        ret.length = promiseList.length;
        for(let i in promiseList){
            promiseList[i].then(res => {
                ret[i] = { status: 'fulfilled', value: res };
                count ++;
                if (count === promiseList.length){
                    resolve(ret);
                }
            }).catch(err =>{
                ret[i] = { status: 'rejected', value: err };
                count ++;
                if (count === promiseList.length){
                    reject(ret);
                }
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
    setTimeout(rjc, Math.random() * 200, 'p3');
})
var p4 = new Promise((rsv,rjc) => {
    setTimeout(rjc, Math.random() * 200, 'p4');
})

Promise._allSettled([p1,p2,p3,p4]).then(res => {
    console.log('res=',res)
}).catch(err => {
    console.log('err=',err)
})