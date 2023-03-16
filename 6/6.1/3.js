// function fib(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     else {
//         fib(n - 1) + fib(n - 2);
//     }
// }

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fib(4));

