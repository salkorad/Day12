// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN === endN) {
        return [startN];
    } else if (startN > endN) {
        return "The starting number will always be less then or equal to the ending number";
    } 
    else {
        const countArray = rangeOfNumbers(startN, endN - 1);
        countArray.push(endN);
        return countArray;
    }
}
// Only change code above this line

console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;