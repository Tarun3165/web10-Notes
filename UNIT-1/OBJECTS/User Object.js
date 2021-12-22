var User = { 
    name : "Ironman",
    year_of_birth: 1974,
    printAge: function (presentYear)
    {
        return presentYear - this.year_of_birth;
        
        }
};

console.log(User.printAge(2021));