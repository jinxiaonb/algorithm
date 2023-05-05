/**
 * js 没有内置的栈类，以Array当做栈来使用
*/

const stack = [];

// 入栈
stack.push(1);
stack.push(2);

// 访问栈顶
const peek = stack[stack.length - 1];

// 出栈
const pop = stack.pop();

// 获取栈的长度
const size = stack.length;

// 判断是否为空
const is_empty = stack.length === 0;