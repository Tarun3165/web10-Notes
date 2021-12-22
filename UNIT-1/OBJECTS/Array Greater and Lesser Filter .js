var object = {
    
    numbers: [1, 2, 6, 7, 3, 4, 9, 0],

    lessThanItems: function (parameter1) {
        var temp = "";
        for (let i = 0; i < object.numbers.length; i++)
        {
            if (object.numbers[i] < parameter1)
                temp += object.numbers[i] + " ";
        }
        return temp;
    },

    greaterThanItems: function (parameter2) {
        var temp = "";
        for (let i = 0; i < object.numbers.length; i++)
        {
            if (object.numbers[i] > parameter2)
                temp += object.numbers[i] + " ";
        }
            return temp;
    }
};

console.log(object. lessThanItems(4) );
console.log(object.greaterThanItems(6));