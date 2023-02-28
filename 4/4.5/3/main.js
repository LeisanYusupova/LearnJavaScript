function Accumulator(stringValue) {
    this.value = stringValue;
    this.read = function() {
        this.value += prompt('Введите число', 0);
    };
}

let accumulator = new  Accumulator(2);
accumulator.read();
accumulator.read();
alert(accumulator.value);
