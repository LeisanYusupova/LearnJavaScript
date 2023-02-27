let calc = {
    read() {
        this.first = +prompt('a?', 0);
        this.second = +prompt('b?', 0);
    },
    sum() {
        return this.first+this.second;
    },
    mul() {
        return this.first+this.second;
    }
}

calc.read();
alert(calc.sum());
alert(calc.mul());