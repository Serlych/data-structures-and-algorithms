// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values
// flattened.

function flatten(arr) {
    let res = [];
    
    for (let item of arr) {
        if (typeof item === 'number') {
            res.push(item);
        } else {
            res.push(...flatten(item));
        }
    }

    return res;
}

console.log('\n', flatten([1, [2, 3], 4, 5 ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
