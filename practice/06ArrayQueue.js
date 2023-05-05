/**
 * 基于数组实现队列
*/

class ArrayQueue {
    #nums;// 存储队列的数组
    #front = 0;//队首
    #queSize = 0;// 队列长度

    constructor(capacity) {
        this.#nums = new Array(capacity);
    }

    get capacity() {
        return this.#nums.length;
    }

    get size() {
        return this.#queSize;
    }

    empty() {
        return this.#queSize === 0;
    }

    push(num) {
        if (this.size == this.capacity) {
            console.log('队列已满');
            return;
        }

        const rear = (this.#front + this.size) % this.capacity;
        this.#nums[rear] = num;
        this.#queSize++;
    }

    pop() {
        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;
        this.#queSize--;
        return num;
    }

    peek() {
        if (this.empty()) throw new Error('队列为空');
        return this.#nums[this.#front];
    }

    toArray() {
        const arr = new Array(this.size);
        for (let i = 0, j = this.#front; i < this.size; i++, j++) {
            arr[i] = this.#nums[j % this.capacity];
        }
        return arr;
    }
}