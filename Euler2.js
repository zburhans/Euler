var fib = 1;
var x = [];
var evens = 0;

for (i = 1; i <= 89; i += fib) {
    fib += i;
    x.push(i);
    x.push(fib);
}
for (l = 0; l < x.length; l++) {
    if (x[l] % 2 === 0) {
        evens += x[l];
    }
}
console.log(x);
console.log(evens);