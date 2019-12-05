// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//
//     let max = -Infinity;
//     let temp;
//
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//
//         if (temp > max) {
//             max = temp;
//         }
//     }
//
//     return max;
// }

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    
    if (arr.length < num) {
        return null;
    }
    
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubarraySum([4, 2, 1, 6], 1))
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubarraySum([], 4))
