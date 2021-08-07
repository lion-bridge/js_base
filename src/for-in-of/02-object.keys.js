
var fn = function(){
  this.name = 'zhangsan';
  this.age = 21;
}

fn.prototype.id ='344444';
fn.prototype.wolk = function(){
  this.name='wuchao'
}

var obj = new fn();

var arr = ['a','c','f']

Object.keys(obj)