import trim from './index';

describe('test trim', () => {
  const obj1 = {name: ' zhangsan ', age: 12, info: {id: '122', address: 'shiyuan'}, cars: ['byd', 'bmw']};
  expect(trim(obj1)).toBe({name: 'zhangsan', age: 12, info: {id: '122', address: 'shiyuan'}, cars: ['byd', 'bmw']});
});