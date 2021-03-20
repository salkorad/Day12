// Only change code below this line
function sumFibonacci(num) {
    var a = 1;
    var b = 1;
    var sum = 1;
    if (num < 1) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
    while (b <= num) {
        if (b % 2 == 1) {
        sum += b;
    }
        var temp = b;
        b = a + b;
      a = temp;
    }
    return sum;
    }
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;