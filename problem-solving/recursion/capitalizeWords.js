// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word
// capitalized.

function capitalizeWords(arr) {
    function capitalize(word) {
        return word.toUpperCase();
    }
    
    if (arr.length === 1) {
        return [capitalize(arr[0])];
    }
    
    const word = capitalizeWords(arr.slice(1));
    word.unshift(capitalize(arr.slice(0, -1)[0]));
    
    return word;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
