//determine if inputed number is prime
function prime(num) {
    pArray = []
    for (i = 2; i <= num; i++) {
        if (num % i === 0) {
            // console.log(i);
            pArray.push(i);
        }
    }
    if (pArray.length === 1) {
        return true;
    }
    else {
        return false;
    }
}


//finds the highest prime factor in start number
function pFactors(start) {
    var n = start;
    var loop = true;
    do {
        if (prime(n)!= false && (start % n) === 0) {
            return n;
            loop = false;
        }
        n--;
    }
    while (loop == true);
}

console.log(pFactors(13195));