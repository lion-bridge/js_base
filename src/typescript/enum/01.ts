 enum TransportStatusEnum {
    待提 = '3',
    承运在途 = '4',
    已签收 = '6,7,8,9',
    已撤单 = '11',
}



const res = Object.entries(TransportStatusEnum).find(([key, value]) => {
    // console.log(`key=${key}`)
        // console.log('value=',value)
        return value.indexOf('7') >= 0
})
console.log(res![0])

