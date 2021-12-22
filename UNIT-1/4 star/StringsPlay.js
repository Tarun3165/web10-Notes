// 4 star question 

function camelCase(str) {
  var temp = "";
    for (let i = 0; i < str.length; i++){

    if (i == 0) {
      temp += convertLowerCase(str[i]);
      continue;
    }

    if (str[i] == " ") {
      temp += "";
      continue;
    }

    if (str[i - 1] == " ") {
        
        for (let j = 0; j < LC.length; j++) {
          
            if (str[i] == LC[j])
                temp += convertUpperCase(LC[j]);
                 
            else if (str[i] == UC[j])
                temp += str[i];
        }        
    }
    else
            temp += convertLowerCase(str[i]);
        
}    
    console.log(temp);    
}


snakeCase=function(str)
{
    var temp = "";
    for (let i = 0; i < str.length;i++)
    {
        if (str[i] == " ")
            temp += "_";
        else
            temp += convertLowerCase(str[i]);

    }
    console.log(temp);
}

hypenCase=function(str)
{
    var temp = "";
    for (let i = 0; i < str.length;i++)
    {
        if (str[i] == " ")
            temp += "-";
        else
            temp += convertLowerCase(str[i]);

    }
    console.log(temp);
}


convertLowerCase = function (char) {
  var flag = 0;
for (let i = 0; i < UC.length; i++) {      
    if (char == UC[i]) {
      flag = 1;
      return LC[i];
    }
 }
    if (flag == 0)
        return char; // if already lowercase then return as it is

}


convertUpperCase = function (char) {

  var flag = 0;
    for (let i = 0; i < LC.length; i++) {      
    if (char == LC[i]) {
      return UC[i];
      flag = 1;
        }        
  }
    if (flag == 0)
        return char; //if already uppercase then return as it is
}

var input = "A quick BROWN fox Jumps oveR a LazY DOg";

var UC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 


console.log("camelCase =>");
camelCase(input);

console.log("snakeCase =>");
snakeCase(input);

console.log("hypenCase =>");
hypenCase(input);
