var newObject = {
    length: 12,
    breadth: 8,
    area: function ()
    {
        return this.length * this.breadth;
    },

    perimeter: function ()
    {
        return 2*(this.length + this.breadth);
    },
    
};

console.log(newObject.area());
console.log(newObject.perimeter());