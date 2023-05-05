
/**
 * 基于链表实现队列
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

class LinkedListQueue {
    #front;//头结点
    #rear;//尾结点
    #queSize = 0;

    constructor() {
        this.#front = null;
        this.rear = null;
    }

    get size() {
        return this.#queSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(num) {
        const node = new ListNode(num);

        if (!this.#front) {
            this.#front = node;
            this.#rear = node;
        } else {
            this.#rear.next = node;
            this.rear = node;
        }
        this.#queSize++;
    }

    pop() {
        const num = this.peek();
        this.#front = this.#front.next;
        this.#queSize--;
        return num;
    }

    peek() {
        if (this.size === 0) throw new Error('队列为空');
        return this.#front.val;
    }

    toArray() {
        let node = this.#front;
        const res = new Array(this.size);
        for (let i = 0; i < res.length; i++) {
            res[i] = node.val;
            node = node.next;
        }
        return res;
    }
}