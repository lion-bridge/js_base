var res = [{ x: 2 }, { x: 22 }, { x: 42 }].reduce((acc, cur) => {
    console.log(`acc=${acc}, cur=${cur}`)
    return Math.max( acc.x, cur.x )
});
console.log(res)