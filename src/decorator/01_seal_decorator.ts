function seal (contructor: Function) {
    Object.seal(contructor);
    Object.seal(contructor.prototype);
}

@seal
class Greater {
    name: string;
    constructor(){
        this.name = 'zhangsan';
    }
}

// const greater = new Greater();
// console.log(greater)

