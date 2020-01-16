// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the
// value exists. Otherwise, return -1.
function binarySearch(arr, val) {
    function getMid (num1, num2) {
        return Math.round((num1 + num2) / 2);
    }

    let min = 0;
    let max = arr.length - 1;
    let mid = getMid(min, max);

    if (val > arr[max]) {
        return -1;
    } else if(val === arr[min]) {
        return min;
    } else if(val === arr[max]) {
        return max;
    }

    while (val !== arr[mid]) {
        if (val > arr[mid]) {
            min = mid;
        } else if (val < arr[mid]) {
            max = mid;
        }

        mid = getMid(min, max);

        if (min === mid || max === mid) {
            return -1;
        }
    }

    return mid;
}

// Refactor
function binarySearch(arr, val) {
    const getMid = (num1, num2) => Math.floor((num1 + num2) / 2);

    let start = 0;
    let end = arr.length - 1;
    let mid = getMid(start, end);

    while (val !== arr[mid] && start <= end) {
        if (val > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = getMid(start, end);
    }

    if (val === arr[mid]) {
        return mid;
    }

    return -1;
}

// Cleanup
const binarySearch = (arr, val) => {
    const getMid = (num1, num2) => Math.floor((num1 + num2) / 2);
    let start = 0, end = arr.length - 1, mid = getMid(start, end);
    
    while (val !== arr[mid] && start <= end) {
        val > arr[mid] ? start = mid + 1 : end = mid - 1;
        mid = getMid(start, end);
    }
    
    return val === arr[mid] ? mid : -1;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99];

console.log(binarySearch(arr1, 2)); // 1
console.log(binarySearch(arr1, 3)); // 2
console.log(binarySearch(arr1, 5)); // 4
console.log(binarySearch(arr1, 6)); // -1
console.log(binarySearch(arr2, 10)); // 2
console.log(binarySearch(arr2, 85)); // -1
console.log(binarySearch(arr2, 95)); // 16
console.log(binarySearch(arr2, 100)); // -1
