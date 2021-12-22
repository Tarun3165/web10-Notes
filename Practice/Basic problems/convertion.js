  // reverse Number and String by converting them to array 

  var s=  "abcde";
// var s = Number(1234);
  
// console.log(typeof(s));
  
if(typeof(s)=="number") 
{ s=String(s);
 s=s.split("");
 s=s.reverse();
 s=s.join("");
 s=Number(s);
}

else  
{  s=s.split("");
s=s.reverse();
s=s.join("");
}
console.log(s);
 
 