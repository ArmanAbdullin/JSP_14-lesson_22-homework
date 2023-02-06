let Cirle = {
    areaCircle: function(radius){
        // if(radius === undefined || radius < 0){
        //     alert('Введите число!');
        // }
        // else if(radius === null){
        //     alert('Вы нажали "Отмену"');
        // }
            return Math.PI * Math.pow(radius, 2);
    },

    lengthCircle: function(radius){
        return Math.PI * 2 * radius;
    },

    getRadius: function(radius){
        return radius;
    } 
}


let radius = prompt('Введите радиус:');
alert('Радиус: ' + Cirle.getRadius(radius));
alert('Площадь : ' + Cirle.areaCircle(radius));
alert('Длину окружности: ' + Cirle.lengthCircle(radius));



