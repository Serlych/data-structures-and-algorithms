// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values
// flattened.

function flatten(arr) {
    let res = [];
    let copy = Array.from(arr);
    
    function getValue(subarr, item) {
        console.log(subarr)
        if (subarr.length) {
            if (typeof item === 'number') {
                res.push(item);
                getValue(subarr, subarr.pop());
            } else {
                console.log(item)
                let cpy = Array.from(item);
                getValue(cpy, cpy.pop());
            }
        }
        
        return res;
    }

    getValue(copy, copy.pop());
    return res;
}

console.log('\n', flatten([1, [2, 3], 4, 5 ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
