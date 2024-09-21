let object = { name: 'Garbage' };

let collector = [object];

object = null; // 참조를 null로 덮어씀

console.log(JSON.stringify(collector[0])); // {"name":"Garbage"}

let obj2 = { name: 'Trash' };

let weakMap = new WeakMap();

weakMap.set(obj2, 'die');

obj2 = null; // 참조를 덮어씀

console.log(typeof weakMap.get(obj2)); //undefined
