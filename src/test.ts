const str = `www${false}`
console.log(str)

const p1 = Promise.resolve(1)
const p2 = Promise.reject(12)
const p3 = Promise.resolve(13)

// Promise.allSettled([p1,p2,p3]).then(res => {
//     console.log('allSettled=', res)
// })

Promise.any([p1,p2,p3]).then(res => {
    console.log('allSettled=', res)
})