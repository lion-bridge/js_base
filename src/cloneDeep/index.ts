
const isObject = (value: unknown): value is object => {
  return value != null && typeof value === 'object';
}

const trimJson = <T>(value: T): T => {
  if (!isObject(value)) return value;
  let result: any = Array.isArray(value) ? [] : {};
  for(let i in value) {
    result[i] = typeof value[i] === 'string' ? String.prototype.trim.call(value[i]) : trimJson(value[i]);
  }
  return result as T;
};
export default trimJson;


