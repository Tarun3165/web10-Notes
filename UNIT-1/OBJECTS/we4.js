var square = {
    side: 4,       // keys
    area: function(){
       
        console.log( this.side * this.side);  // this is used to call a key inside an object
    },
    perimeter: function(){    // functions are methods
        
        return this.side * 4
    }
};
square.area();

square.side = 8;
square.area();
console.log(square.perimeter());
console.log(typeof(console));   // console is a object
console.log(typeof([1,2]));   // array is a object