## Set的特性
* > 成员值是唯一的
* > 判断成员值是否唯一类似于==而不是===，所以NaN会相等
* > 可用于去除数组的重复成员，需用到Array.from()方法，该方法是将Set结构转为数组。
* > 可用于去除字符串中重复字符
* > 没有键名或者说键名和键值相同
* > 实例默认可遍历，意味着可以用for...of(源于Set.prototype[Symbol.iterator] === Set.prototype.values)

## Set的声明
* > new Set()
* > new Set([1,2,3,4,5])


## set的属性和方法
* > size:获取成员的数量
* > add(value):添加值(加入的两个对象是不相同的，会被视为两个值)
* > delete(value):删除某个值，返回一个布尔值，表示删除是否成功。
* > has(value):返回一个布尔值，表示该值是否为Set的成员。(和对象对比obj[pro])
* > clear():清除所有成员，没有返回值。

### Set实例的遍历方法有(同Map)

* > keys():返回键名的遍历器(效果同values())
* > values():返回键值的遍历器(效果同keys())
* > entries():返回所有成员的遍历器
* > forEach();遍历Set的所有成员
* > 扩展运算符(...)内部使用for...of循环


## WeakSet

### 和Set的区别
* > 成员只能是对象
* > 对象都是弱引用:即垃圾回收机制不考虑 WeakSet 对该对象的引用
* > 不可以遍历，所以没有size和forEach