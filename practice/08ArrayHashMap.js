class Entry {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

// 基于数组简易实现的哈希表
class ArrayHashMap {
    #buckets;
    constructor() {
        this.#buckets = new Array(100).fill(null);
    }

    #hashFunc(key) {
        return key % 100;
    }

    //
    get(key) {
        let index = this.#hashFunc(key);
        let entry = this.#buckets[index];
        if (entry === null) return null;
        return entry.val;
    }

    set(key, val) {
        let index = this.#hashFunc(key);
        this.#buckets[index] = new Entry(key, val);
    }

    //
    delete(key) {
        let index = this.#hashFunc(key);
        this.#buckets[index] = null;
    }

    //
    entries() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) {
                arr.push(this.#buckets[i]);
            }
        }
        return arr;
    }

    //
    keys() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) {
                arr.push(this.#buckets[i]?.key);// ?. 为可选链 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining
            }
        }
        return arr;
    }

    //
    values() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) {
                arr.push(this.#buckets[i]?.val);
            }
        }
        return arr;
    }

    /* 打印哈希表 */
    print() {
        let entrySet = this.entries();
        for (const entry of entrySet) {
            if (!entry) continue;
            console.info(`${entry.key} -> ${entry.val}`);
        }
    }
}