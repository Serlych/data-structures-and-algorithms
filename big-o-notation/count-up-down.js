// O(n)
function countUpAndDown(n) {
  console.log("going up");
  
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  
  console.log("im at the top, let's go down");
  
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
  
  console.log("at the bottom");
}

// O(n^2)
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  
  return total;
}

// O(n)
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    
    return newArr;
}
