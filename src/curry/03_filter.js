
Array.prototype.filter = function(cb, _this){
    var res = [];
    for(var i = 0; i < this.length; i ++){
        var _is = cb(this[i], i, this);
        if (_is) res.push(this[i]);
    }
    return res;
}

var ary1= [
    {name: 'zhang', age: 13},
    {name: 'zhang1', age: 14},
    {name: 'zhang2', age: 15},
    {name: 'zhang3', age: 16},
    {name: 'zhang4', age: 17},
    {name: 'zhang5', age: 18},
    {name: 'zhang6', age: 19}
]

var ary2 = ary1.filter((v) => v.age > 15)
console.log(ary2)

