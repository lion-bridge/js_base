import clone from './index';

interface TestCase1 {
  name: string;
  age: number;
  info: {
    id: string;
    address: string;
  };
  cars: string[];
}

const res = clone<TestCase1>({name: ' zhangsan ', age: 12, info: {id: '122', address: ' shiyuan'}, cars: [' byd', 'bmw ']})
console.log('res=',res)