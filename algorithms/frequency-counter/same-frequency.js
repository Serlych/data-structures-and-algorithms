// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2) {
    const no1 = num1.toString().split('');
    const no2 = num2.toString().split('');
    
    if (no1.length !== no2.length) {
        return false;
    }
    
    const freq = {};
    
    for (let i = 0; i < no1.length; i++) {
        let number = parseInt(no1[i]);
        number in freq ? freq[number]++ : freq[number] = 1;
    }
    
    for (let j = 0; j < no2.length; j++) {
        let number = parseInt(no2[j]);
        
        if (!freq[number]) {
            return false;
        } else {
            freq[number]--;
        }
    }

    return true;
}

console.log(sameFrequency(821, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(441222345, 543221244)) // true
console.log(sameFrequency(22, 222)) // false
