interface IUser {
    email: string;
    name: string;
    age: number;
    sex: '男' | '女'
}
type IUserType = 'sex' | 'age';
interface IUser4 extends Pick<IUser, 'sex'> {
    id: string;
}

const per1: IUser4 = {
    id: '',
    sex: '男',
}

