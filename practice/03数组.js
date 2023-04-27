/**
 * 向数组指定的位置插入数据
*/

function insert(array, num, index) {
    let len = array.length - 1;
    for (let i = len; i > index; i--) {
        array[i] = array[i - 1];
    }

    array[index] = num;
}

/**
 * 数组中删除指定位置的数据
*/
function remove(array, index) {
    let len = array.length - 1;
    for (let i = index; i < len; i++) {
        array[i] = array[i + 1];
    }
}

/**
 * 数组的查找
*/
function find(array, target) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}