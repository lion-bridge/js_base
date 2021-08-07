
var fn = function(){
  this.name = 'zhangsan';
  this.age = 21;
}

fn.prototype.id ='344444';
fn.prototype.wolk = function(){
  this.name='wuchao'
}

var obj = new fn();
for(let key in obj) {
  console.log('key=',key)// name,age, id, wolk
}
