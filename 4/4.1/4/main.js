let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
function getSum(obj) {
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

let result = getSum(salaries);
console.log(result);



