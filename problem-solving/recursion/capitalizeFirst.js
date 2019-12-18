// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each
// string in the array.

function capitalizeFirst(arr) {
    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1);
    }

    if (arr.length === 1) {
        return [capitalize(arr[0])];
    }
    
    const res = capitalizeFirst(arr.slice(0, -1));
    const string = capitalize(arr.slice(arr.length - 1)[0]);
    
    res.push(string);
    
    return res;
}

console.log(capitalizeFirst(['car','taco','banana','cat'])); // ['Car','Taco','Banana','Cat']
