/**
 * 双向队列
 * 以双向链表为基础数据结构
*/
class ListNode {
    prev;
    next;
    val;

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedListDeque {
    #front;
    #rear;
    #queSize;

    constructor() {
        this.#front = null;
        this.#rear = null;
        this.#queSize = 0;
    }

    pushLast(val) {
        const node = new ListNode(val);
        if (this.#queSize === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            this.#rear.next = node;
            node.prev = this.#rear;
            this.#rear = node;
        }
        this.#queSize++;
    }

    pushFirst(val) {
        const node = new ListNode(val);
        if (this.#queSize === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            this.#front.prev = node;
            node.next = this.#front;
            this.#front = node;
        }
        this.#queSize++;
    }

    popLast() {
        if (this.#queSize === 0) {
            return false;
        }
        const value = this.#rear.val;
        let temp = this.#rear.prev;
        if (temp !== null) {
            temp.next = null;
            this.#rear.prev = null;
        }
        this.#rear = temp;
        this.#queSize--;

        return value;
    }

    popFirst() {
        if (this.#queSize === 0) {
            return false;
        }

        const value = this.#front.val;
        let temp = this.#front.next;
        if (temp !== null) {
            temp.prev = null;
            this.#front.next = null;
        }
        this.#front = temp;
        this.#queSize--;
        return value;
    }

    peekLast() {
        return this.#queSize === 0 ? false : this.#rear.val;
    }

    peekFirst() {
        return this.#queSize === 0 ? false : this.#front.val;
    }

    size() {
        return this.#queSize;
    }

    isEmpty() {
        return this.#queSize === 0;
    }

    print() {
        const arr = [];
        let temp = this.#front;
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }
        console.log(arr);
    }
}