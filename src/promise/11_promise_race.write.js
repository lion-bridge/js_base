
/**
 * 手写Promise.race方法
 * 1.返回promise对象
 * 2.for循环创建变量i，只要promise决议，则i++
 * @param {Promise<string>[]} promiseList 
 */
Promise._race = function(promiseList = []) {
    return new Promise((resolve, reject) => {
        let i = 0;
        for (var p of promiseList) {
            p.then(res => {
                if (i < 1) {
                    
                    i ++;
                }
            }).catch(err => {
                if(i < 1) {
                    reject(err)
                    i ++;
                }
            })
        }
    })
    
}

// 测试 src/promise/11_promise_race.write.js
var p1 = new Promise((rsv,tjc) => {
    setTimeout(rsv, Math.random() * 200, 'p1');
})
var p2 = new Promise((rsv,tjc) => {
    setTimeout(tjc, Math.random() * 200, 'p2');
})
var p3 = new Promise((rsv,tjc) => {
    setTimeout(tjc, Math.random() * 200, 'p3');
})
var p4 = new Promise((rsv,tjc) => {
    setTimeout(rsv, Math.random() * 200, 'p4');
})

Promise._race([p1,p2,p3,p4]).then(res => {
    console.log('res=',res)
}).catch(err => {
    console.log('err=',err)
}).finally(f => {
    console.log('finally')
})
