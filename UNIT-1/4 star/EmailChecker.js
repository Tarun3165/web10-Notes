// 4 star question

emailChecker = function (str) {
    countRight = 0;
    countWrong = 0;
    wordAfterDot = 0;

    for (let i = 0; i < str.length;i++)
    {
        if (str[0] == "@"||str[0] == ".")
        { 
            countWrong++;
          
            break;
        }
        if ((str[i] == "@")&&str[i+1]==".")
        { 
            countWrong++;
            break;
        }
        
        if ((str[i] == ".") && (str[i + 1] == ".")) {
            countWrong++;
              break;
        }
        if (str[i] == "@")
            countRight++;
        
        if(str[i]==".")
        {
            for (let j = i; j < str.length; j++)
            {
                wordAfterDot++;
                } 
        }
        
        if (str[i] == "/" || str[i] == "*" || str[i] == "+" || str[i] == "'" || str[i] == ";" || str[i] == "?" || str[i] == "`" || str[i] == ","||str[i] == "(" ||str[i] == ")") {
            countWrong++;
            break;
        }
         
    } 
      
    if(countRight==1 && wordAfterDot>=3)
        console.log("Yes");
    else if (countWrong>1 || countRight<1 || wordAfterDot<3 )
        console.log("No");
                     
}

var str1 = "mysite@masaischool.com";  // yes
console.log("str1");
emailChecker(str1);

var str2 = "my.name@masaischool.org";  //yes
console.log("str2");
emailChecker(str2);

var str3 = "mysite@masai.school.net"; // yes
console.log("str3");
emailChecker(str3);

var str4 = "masai.school.com";          //No
console.log("str4");
emailChecker(str4);

var str5 = "masai@.com ";               //No
console.log("str5");
emailChecker(str5);

var str6 = "@masai.school.net ";        //No
console.log("str6");
emailChecker(str6);

var str7 = "name@gmail.b";              //No
console.log("str7");
emailChecker(str7);

var str8 = "name@.org.org ";             //No
console.log("str8");
emailChecker(str8);

var str9 = ".name@masaischool.org ";      //No
console.log("str9");
emailChecker(str9);

var str10 = "masaischool()*@gmail.com";   //No
console.log("str10");
emailChecker(str10);

var str11 = "name..1234@yahoo.com";        //No
console.log("str11");
emailChecker(str11);
