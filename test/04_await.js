const request = async() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}

const getData = async() => {
    const res = await request();
    return res + 'zhangsan';
}

async function test(){
    const res1 = await getData()
    console.log('res1=',res1)
}
test()