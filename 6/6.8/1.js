// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         console.log(current);
//         current++;
//     }, 1000)
// }

// console.log(printNumbers(5, 8));

function printNumbers(from, to) {
  
    let timerID = setTimeout(function tick() {
      if (from <= to) {
        console.log(from++);
        timerID = setTimeout(tick, 1000);
      } else {
        clearTimeout(timerID);
      }
    }, 1000);
    
  }
  
  printNumbers(1, 5);
