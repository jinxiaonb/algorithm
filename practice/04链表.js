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


/**
 * 双向链表
*/
class DoubleListNode {
    val;
    next;
    prev;
    constructor(val, prev, next) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
    }
}


// 1 初始化节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 2 构建引用指向 
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;


/**
 * 插入数据
*/
function insert(n0, p) {
    const n1 = n0.next;
    p.next = n1;
    n0.next = p;
}

/**
 * 删除数据,删除某个节点后的首个节点
*/
function remove(n0) {
    if (!n0.next) return;
    const p = n0.next;
    const n1 = p.next;
    n0.next = n1;
}

/**
 * 访问索引为index的节点
*/
function access(head, index) {
    for (let i = 0; i < index; i++) {
        if (!head) {
            return null;
        }
        head = head.next;
    }
    return head;
}


/**
 * 在链表中查找值为target的首个节点
*/
function find(head, target) {
    let index = 0;
    while (head !== null) {
        if (head.val === target) {
            return index;
        }
        head = head.next;
        index += 1;
    }
    return -1;
}


