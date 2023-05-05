/**
 * 基于链表实现的栈
*/

/**
 * 链表节点
*/
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);// 节点值
        this.next(next === undefined ? null : next);//指向下一个节点的引用
    }
}

class LinkedListStack {
    #stackPeek;// 头结点视为栈顶
    #stkSize = 0;//

    constructor() {
        this.#stackPeek = null;
    }

    get size() {
        return this.#stkSize;
    }

    isEmpty() {
        return this.size == 0;
    }

    push(num) {
        const node = new ListNode(num);
        node.next = this.#stackPeek;
        this.#stackPeek = node;
        this.#stkSize++;
    }

    pop() {
        const num = this.peek();
        this.#stackPeek = this.#stackPeek.next;
        this.#stkSize--;
        return num;
    }

    peek() {
        if (!this.#stackPeek) throw new Error('栈为空');
        return this.#stackPeek.val;
    }

    toArray() {
        let node = this.#stackPeek;
        const res = new Array(this.size);
        const len = res.length;
        for (let i = len - 1; i >= 0; i--) {
            res[i] = node.val;
            node = node.next;
        }
    }
}