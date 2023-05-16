//遍历键值对
function kv(map) {
    for (const [k, v] of map.entries()) {
        console.log(k, v);
    }
}

// 遍历键
function k(map) {
    for (const k of map.keys()) {
        console.log(k);
    }
}

// 遍历值
function v(map) {
    for (const v of map.values()) {
        console.log(v);
    }
}
