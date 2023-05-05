const queue = [];

queue.push(1);
queue.push(3);

const peek = queue[0];

const pop = queue.shift();//O(n)

const size = queue.length;

const empty = queue.length === 0;