function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

let test = sumTo(4);

console.log(test);

function sumTo(n) {
    if (n==1) {
        return n;
    }
    else {
        return n + sumTo(n-1);
    }
}

console.log(sumTo(4));

function sumTo(n) {
    return n*(1+n)/2;
}

console.log(sumTo(4));