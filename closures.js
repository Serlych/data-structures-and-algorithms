function outer() {
    const a = 1;
    return function middle() {
        const b = 2;
        return function inner() {
            const c = 3;
            console.log(a, b, c)
        }
    }
}

const X = outer()()();
