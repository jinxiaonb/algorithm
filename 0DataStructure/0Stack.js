/**
 * 栈：先进后出
*/
class Stack {
    constructor(){
        this.items = [];
    }

    // 入栈
    push(ele){
        this.items.push(ele);
    }

    // 出栈
    pop(){
        return this.items.pop();
    }

    // 末位
    get peek(){
        return this.items[this.items.length-1];
    }

    // 是否为空栈
    get isEmpty(){
        return !this.items.length;
    }

    // 尺寸
    get size(){
        return this.items.length;
    }

    // 清空栈
    clear(){
        this.items = [];
    }

    // 打印栈数据
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty);

stack.push(1);
stack.push(2);

stack.print();
console.log(stack.peek);
stack.push(5);
console.log(stack.size);
console.log(stack.isEmpty);
console.log(stack.pop());