// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var factorial = 1;

for (var i = 1; i <= 12; i++){
    factorial *= i;
}

console.log(factorial);
