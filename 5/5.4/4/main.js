let arrNumber = [];
function sumInput() {
    let number, sum = 0;
        do {
            number = prompt('Введите число', 0);
                if (isFinite(number)) {
                    arrNumber.push(number);
                } else {
                    return 0;
                }
            } while (number !== null);

            for (let i = 0; i < arrNumber.length; i++) {
                sum += (+arrNumber[i]);
            }
            return sum;
        }
alert(sumInput());