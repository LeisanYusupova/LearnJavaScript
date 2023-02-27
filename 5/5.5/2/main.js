function filterRange(arr, a, b) {
    let result = arr.filter(item => item>=a && a<=b);
    return result;
};

let array = [0, 1, 2, 3];
let result = filterRange(array, 1, 3);
console.log(array);