// Write a function called collectStrings which accepts an object and returns an array of all the values in the object
// that have a typeof string.

function collectStrings(obj) {
    let arr = [];
    
    for (let item in obj) {
        if (typeof obj[item] === 'string') {
            arr.push(obj[item]);
        } else if (typeof obj[item] === 'object' && obj[item].constructor === Object) {
            arr = arr.concat(collectStrings(obj[item]))
        }
    }
    
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))
