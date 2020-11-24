var setDemo = () => {
    var set = new Set();

    set.add(1).add(2).add(2);

    console.log(set.size);
    console.log(set.has(1));
    console.log(set.has(2));
    console.log(set.has(3));
    console.log(set.delete(2));
    console.log(set.has(2));

    let set = new Set(['red', 'green', 'blue']);
    let arr = [...set];
    // ['red', 'green', 'blue']

    //数组去重
    let arr = [3, 5, 2, 2, 5, 5];
    let unique = [...new Set(arr)];
    // [3, 5, 2]

    //数组的map和filter也可以使用
    let setmap = new Set([1, 2, 3]);
    setmap = new Set([...setmap].map(x => x * 2));

    let setfilter = new Set([1, 2, 3, 4, 5]);
    setfilter = new Set([...setfilter].filter(x => (x % 2) == 0));

    //因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);
    //并集
    let union = new Set([...a, ...b]);

    //交集
    let intersect = new Set([...a].filter(x => b.has(x)));

    // (a相对于b的)差集
    let difference = new Set([...a].filter(x => !b.has(x)));

}

setDemo();