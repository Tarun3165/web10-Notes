var anagram = {
    anagramDetector: function (str1, str2)
    {
         if(str1.split("").sort().join("") ==  str2.split("").sort().join(""))
             console.log("TRUE");
             
         else
             console.log("FALSE");
     }
};

anagram.anagramDetector("den","end");
anagram.anagramDetector ("hello","heloo");
 