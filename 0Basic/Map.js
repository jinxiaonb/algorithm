var mapDemo = () => {
    const map = new Map();
    map.set("aaa", 100);
    map.set("bbb", 20);

    console.log(map);
    console.log(map.size);

    console.log(map.get("aaa"));

    console.log(map.has("aaa"));

    map.delete("aaa");

    console.log(map.has("aaa"));

    console.log(map);

    map.clear();

    console.log(map);
}

var mapDemo2 = () => {
    const map = new Map();
    map.set("aaa", 100);
    map.set("bbb", 20);

    console.log("======keys()======");
    for (let key of map.keys()) {
        console.log(key);
    }

    console.log("======values()======");
    for (let value of map.values()) {
        console.log(value);
    }

    console.log("======entries()======");
    for (let item of map.entries()) {
        console.log(item);
    }

    console.log("======forEach()======");
    map.forEach((e, i) => {
        console.log(e, i);
    });

    map.forEach(e => {
        console.log(e);
    });
}

// mapDemo();
mapDemo2();

// Map转对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap);


// 对象转Map
// 方法1
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));

// 方法2
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

objToStrMap({
    yes: true,
    no: false
})