/**
 * * 笔试题* 实现Promise.all?  * 实现函数节流?   * 实现发布订阅 on emit off once?
 */
Promise.all = function (promiseList = []) {
    return new Promise((resolve, reject) => {
        const arr = [];
        arr.length = promiseList.length;
        let count = 0;
        for (let i = 0; i < promiseList.length; i ++){
            promiseList[i].then(res => {
                arr[i] = res;
                count ++
                if (count >= promiseList.length) {
                    resolve(arr)
                }
            }).catch(err => {
                arr[i] = res;
                count ++
                if (count >= promiseList.length) {
                    reject(arr)
                }
            })
        }
    });
}

var jieliu = function (fn,time) {
    var timer;
    return function () {
        if (timer) {
            timer = setTimeout(fn, time);
        }
        clearTimer(timer)
    }
}

var Subscriber = function () {
    var listeners = []
    var publish = function (params) {
        for (var i = 0; i < listeners.length; i ++) {
            listeners[i]()
        }
    }
    var subscribe = function (cb) {
        listeners.push(cb);
    }
    retturn {publish, subscribe}
}
