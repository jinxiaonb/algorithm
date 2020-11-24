## Map的特性
* > Set和Map都可以用来生成新的Map
* > 后声明的键会覆盖前面声明相同的键
* > 绑定的是内存地址-->对同一个对象的引用，Map结构才将视为同一个键 map.set(['a'],1);map.get(['a])=>undefined

## Map的声明
* > new Map();
* > new Map([['name':'tt'],['aa':'vv']])

## Map的属性和方法

* > size:获取成员的数量
* > set(key,value):设置成员key和value
* > get(key):获取成员属性值
* > has(key):判断成员是否存在
* > delete(key):删除成员 
* > clear():清空所有

### Map实例的遍历方法有(同Set)

* > keys():返回键名的遍历器
* > values():返回键值的遍历器
* > entries():返回所有成员的遍历器
* > forEach();遍历Map的所有成员

### Map结构转为数组结构
* > [...map.keys()]/[...map.values()]/[...map.entires()]/[...map]

### 数组转Map
* > new Map(array);

### Map转对象

### 对象转Map
* > Object.entries();例如 new Map(Object.entries(obj));

### Map转Json
* > 键名都是字符串
* > 键名有非字符串


### Json转Map
* > 键名都是字符串
* > 整个json是数组


## WeakMap

### 特性
* > 只接受对象作为键名
* > 键名所指的对象不计入垃圾回收机制

### 使用场景
* > 一般在DOM元素上添加数据