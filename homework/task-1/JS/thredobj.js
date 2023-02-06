let Cat = {
    name: 'Bars',
    color: 'Grey',
    age: 5,

    play: function(name, color){
        let myPet;
        if(this.name === name && this.color === color){
            myPet = 'This is my Cat, May be';
        }
        else if(myPet === 'This is my Cat!'){
            if(this.age === age){
                console.log('OMG its my Cat. Beautiful!');
            }
            else{
                console.log('This is not my cat');
            }
        }
        else{
            console.log('The has the wrong color and he is not distracted by the name');
        }
    }
}
