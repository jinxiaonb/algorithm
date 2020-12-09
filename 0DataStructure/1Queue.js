/**
 * 队列：先进先出
 * 
*/

class Queue {
    constructor(items){
        this.items = items || [];
    }

    enqueue(ele){
        this.items.push(ele);
    }

    dequeue(){
        return this.items.shift();
    }

    front(){
        return this.items[0];
    }

    clear(){
        this.items = [];
    }

    get size(){
        return this.items.length;
    }

    get isEmpty(){
        return !this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty);

queue.enqueue('jinxiao');
queue.enqueue("gentle");
queue.enqueue("30");
console.log(queue.size);
console.log(queue.isEmpty);

queue.print();
queue.dequeue();
queue.dequeue();
queue.print();