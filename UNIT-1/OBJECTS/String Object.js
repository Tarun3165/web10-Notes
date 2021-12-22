var object1 = {
    
    item: "FireFox",

    vowelsCount: function () {
        var vovalCount = 0;
        for (let i = 0; i < object1.item.length; i++) {
            if (object1.item[i] == "a" || object1.item[i] == "a" || object1.item[i] == "e" || object1.item[i] == "i" || object1.item[i] == "o" || object1.item[i] == "u")
                vovalCount++; 
        }
        return vovalCount;
    },

    reverse: function () {
        var temp = "";
        for (let i = object1.item.length - 1; i >= 0; i--) {
            temp += object1.item[i]; 
        }
        return temp;
    },

    changeCase: function () {
        var UC_item = object1.item.toUpperCase();
        var LC_item = object1.item.toLowerCase();
        var newCase = "";
        for (let i = 0; i < object1.item.length; i++) {
           
                if (object1.item[i] == UC_item[i])
                    newCase += LC_item[i];

                else if (object1.item[i] == LC_item[i])
                    newCase += UC_item[i];
           
        }
        return newCase;
    }
};

console.log(object1.vowelsCount());
console.log(object1.reverse());
console.log(object1.changeCase());