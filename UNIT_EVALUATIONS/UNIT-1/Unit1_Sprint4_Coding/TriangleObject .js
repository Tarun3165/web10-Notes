// formula to calculate hypotenuse-- >
   
// side3 ** 2  = side1 ** 2 + side2 ** 2
// hypotenuse = side 3;


var triangle = {     // object

    side1: 3,
    side2: 4,
    hypotenuse: function () {
      
        var side3Square = this.side1 ** 2 + this.side2 ** 2;      // caling keys side1 and side2
        return side3Square ** (1 / 2);        // to calculate squareroot
    }
};

console.log(triangle.hypotenuse());   // printing hypotenuse 