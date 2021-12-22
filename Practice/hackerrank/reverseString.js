// var reverseString = function(s) {
//     var temp=[];
//     var i=s.length-1;
//     fun(s,i); 
//     return temp;
//     function fun(s,i){
//         if(i<0)
//             {    console.log(temp);
//                 return temp;
//             }
//         else
//         temp.push(s[i])
//         fun(s,i-1)
//     }
// };

// reverseString(["h", "e", "l", "l", "o"]);
var reverseString = function (s,temp) {
   
    if(s.length==0)
    {   
        return temp;
    }
    var S = s.substr(1);
    reverseString(S,temp)
    temp.push(s[0]);
    
    
};

var temp = [];
reverseString("hello",temp)
console.log('temp:', temp)