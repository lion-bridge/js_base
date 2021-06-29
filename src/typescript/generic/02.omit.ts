interface IUser1 {
    name: string;
    age: string;
    sex: '男' | '女';
    address: string;
    phone: number;
}

// 删除'sex'字段
interface User2 extends Omit<IUser1, 'sex'>{
    emial: string;
}

const p1233: User2  = {
    name: 'zhjangs',
    age: '15',
    emial: '44@153.com',
    address:'',
    phone:123
};
console.log(p1233);

type WithoutProps = 'address' | 'phone'
// 删除 address/phone
interface User3 extends Omit<IUser1, WithoutProps> {
    id: string;
}

const p2: User3 = {
    id: '111',
    name:'liu',
    age: '13',
    sex: '女',
}