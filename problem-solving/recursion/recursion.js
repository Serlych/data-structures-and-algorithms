// my first recursive function!
function countdown(num) {
    if (num <= 0) {
        console.log('I am done!');
        return;
    }
    
    console.log(num);
    num--;
    countdown(num);
}

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    
    return num + sumRange(num - 1);
}

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}
