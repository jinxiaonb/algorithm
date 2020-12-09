/*
 * 循环队列
 */

class Queue {
    constructor(items) {
        this.items = items || [];
    }

    enqueue(ele) {
        this.items.push(ele);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    clear() {
        this.items = [];
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return !this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}


class LoopQueue extends Queue {
    constructor(items) {
        super(items);
    }

    getIndex(index) {
        const length = this.items.length;
        return index > length ? (index % length) : index;
    }

    find(index) {
        return !this.isEmpty ? this.items[this.getIndex(index)] : null;
    }
}

const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
console.log(loopQueue.size, loopQueue.isEmpty) // 4 false
loopQueue.print();

console.log(loopQueue.find(26)) // 'Evan'
console.log(loopQueue.find(87651)) // 'Alice'