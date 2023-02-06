let Calculate = {
    firstNumber: 0, 
    secondNumber: 0,


    read: function () {
        let first = prompt('Введите первое число: ');
        let second = prompt('Введите второе число: ');

        this.firstNumber = parseInt(first);
        this.secondNumber = parseInt(second);
    },

    sum: function () {
        return this.firstNumber + this.secondNumber;
    },

    multiply: function () {
        return this.firstNumber * this.secondNumber;
    },
}



Calculate.read();
alert(Calculate.sum());
alert(Calculate.multiply());