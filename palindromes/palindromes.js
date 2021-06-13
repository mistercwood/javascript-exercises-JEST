const palindromes = function (str) {
    const cleanArr = Array.from(str).filter(char => char.match(/[a-z]/i)); 
    const revArr = [...cleanArr].reverse();
    return (cleanArr.join('').toLowerCase() === revArr.join('').toLowerCase()) ? true : false;
};

module.exports = palindromes;

// * Create array from string with all punctuation and spaces removed, reduced to lowercase.
// * Make copy of array, and reverse it
// * Ternary to return true if both arrays are the same and false if they are not.