Array.prototype.reduce = function(cb, initialValue){
    let res;
    for(var i = 0; i < this.length; i ++) {
        res = cb(initialValue || this, this[i], i, this)
    }
    return res;
}

var ary= [
    {name: 'zhang', age: 13},
    {name: 'zhang1', age: 14},
    {name: 'zhang2', age: 15},
    {name: 'zhang3', age: 16},
    {name: 'zhang4', age: 17},
    {name: 'zhang5', age: 18},
    {name: 'zhang6', age: 19}
]
var ary1= ary.reduce((init,v,i) => {
    init[v.name] = v.age;
    return init;
}, {})
console.log(ary1)