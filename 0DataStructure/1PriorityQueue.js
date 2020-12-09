/**
 * 优先队列：基于优先级进出
*/

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(ele, priority){
        const queueEle = { ele, priority};

        if(this.isEmpty){
            this.items.push(queueEle);
        }else{
            const preIndex = this.items.findIndex((item) => queueEle.priority < item.priority);//数字越小优先级越高
            if(preIndex > -1){
                this.items.splice(preIndex, 0 , queueEle);//在preIndex位置插入queueEle
            }else{
                this.items.push(queueEle);
            }
            
        }
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
        console.log(this.items);
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Surmon', 3)
priorityQueue.enqueue('skyRover', 2)
priorityQueue.enqueue('司马萌', 1)
priorityQueue.print()

