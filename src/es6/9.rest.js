const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
}

function test(params){
    const {
        a,
        ...rest // 剩余
    } = params;
    console.log('rest=',rest);
}
test(obj)