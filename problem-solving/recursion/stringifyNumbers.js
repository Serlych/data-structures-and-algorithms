// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and
// converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    const res = {};
    
    for (let item in obj) {
        if (typeof obj[item] === 'number') {
            res[item] = obj[item].toString();
        } else if (typeof obj[item] === 'object' && obj[item].constructor === Object) {
            res[item] = stringifyNumbers(obj[item]);
        } else {
            res[item] = obj[item];
        }
    }
    
    return res;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
