// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
    let i = 0;
    let j = 1;
    
    while (i < nums.length) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        } else {
            j++;
        }
        
        if (nums[j] === undefined) {
            i++;
            j = i+1;
            
            if (i === nums.length - 1) {
                break;
            }
        }
    }
    
    return [];
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 3], 6));
// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([0, 4, 3, 0], 0));
// console.log(twoSum([8, 12, 1, 4], 74));
