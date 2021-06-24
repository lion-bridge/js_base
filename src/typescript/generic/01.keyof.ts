interface IUser {
    email: string;
    name: string;
    age: number;
    sex: '男' | '女'
}

type UserProps = keyof IUser;

const wuchao:IUser = {
    email:'33@qq.com',
    name: 'wuchao',
    age: 30,
    sex: '男'
};

function getValue<T , K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
type Keys = keyof IUser;


console.log('value=', getValue(wuchao, 'email'))