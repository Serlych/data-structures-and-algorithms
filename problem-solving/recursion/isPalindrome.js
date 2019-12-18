// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    function checkPalindrome(s) {
        if (!s.length) {
            return '';
        }
        
        return s[s.length - 1] + checkPalindrome(s.slice(0, -1));
    }
    
    return str === checkPalindrome(str);
}

console.log(isPalindrome('a'))
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
