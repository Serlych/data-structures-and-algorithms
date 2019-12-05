// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//
//         arr2.splice(correctIndex, 1);
//     }
//
//     return true;
// }

// refactor
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    let freqCount1 = {};
    let freqCount2 = {};
    
    for (let val of arr1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    
    for (let val of arr2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    
    for (let key in freqCount1) {
        if (!(freqCount2.hasOwnProperty(key ** 2))) {
            return false;
        }
        
        if (freqCount2[key ** 2] !== freqCount1[key]) {
            return false;
        }
    }
    
    return true;
}

console.log(same([1,2,3], [1, 4, 9])) // true
