var arr = [2,3,4,5]
// arr.map(function(v,i, ary){

// },arr)

Array.prototype.map = function(cb, _this){
    let res = []
    for(let i = 0; i < this.length; i ++){
        const item = cb(this[i], i, this)
        res.push(item);
    }
    return res;
}

var arr1 = arr.map((v,i,ary) => {
    return ++v;
})
console.log('arr1=',arr1)