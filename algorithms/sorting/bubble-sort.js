// Not optimized, will loop over every item every time
function bubbleSort(arr) {
    const copy = [...arr];
    
    function swap(arr, i1, i2) {
        const temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    
    for (let i = 0; i < copy.length - 1; i++) {
        for (let j = 0; j < copy.length - 1; j++) {
            if (copy[j] > copy[j+1]) {
                swap(copy, j, j + 1);
            }
        }
    }
    
    return copy;
}

// Optimized for it to stop iterating over sorted elements and comparing out of range indexes
function bubbleSort(arr) {
    const copy = [...arr];
    
    function swap(arr, i1, i2) {
        const temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (copy[j] > copy[j+1]) {
                swap(copy, j, j + 1);
            }
        }
    }
    
    return copy;
}

// Another optimization, algorithm will stop if there were no swaps, which means the array is sorted.
// This works very well for arrays which are nearly sorted.
function bubbleSort(arr) {
    const copy = [...arr];
    let noSwaps = false;
    
    function swap(arr, i1, i2) {
        const temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        
        for (let j = 0; j < i - 1; j++) {
            console.log(copy, copy[j], copy[j+1])
            if (copy[j] > copy[j+1]) {
                noSwaps = false;
                swap(copy, j, j + 1);
            }
        }
        
        if (noSwaps) {
            break;
        }
    }
    
    return copy;
}



console.log(bubbleSort([5, 3, 4, 1, 2]));
// console.log(bubbleSort([10, 14, 28, 11, 7, 16, 30, 50, 25, 18]));
