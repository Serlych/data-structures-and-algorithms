// function countUniqueValues(arr) {
//     if (!arr.length) {
//         return 0;
//     }
//
//     let left = 0;
//     let right = 1;
//     let counter = 0;
//
//     while (arr[left] < arr.length + 3) {
//         if (arr[left] === arr[right]) {
//             right++;
//         } else {
//             left++;
//             counter++;
//             arr[left] = arr[right];
//         }
//     }
//
//     return arr.slice(0, counter).length;
// }

// refactor
function countUniqueValues(arr) {
    if (!arr.length) {
        return 0;
    }
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
