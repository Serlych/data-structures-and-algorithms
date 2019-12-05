function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const freqCount = {};
    
    for (let letter of str1) {
        freqCount[letter] ? freqCount[letter] += 1 : freqCount[letter] = 1;
    }
    
    for (let letter of str2) {
        if (!freqCount[letter]) {
            return false;
        } else {
            freqCount[letter] -= 1;
        }
    }
    
    return true;
}

console.log(validAnagram('ab', 'ba')) //true
