
function isPalindrome(value:any) {
    // Convert value to string
    let val = value.toString();

    // Reverse the string
    let reversedVal = val.split("").reverse().join("");

    // Check if the reversed string is equal to the original string
    if (reversedVal === val) {
        return true; // It's a palindrome
    } else {
        return false; // It's not a palindrome
    }
}

module.exports = isPalindrome;