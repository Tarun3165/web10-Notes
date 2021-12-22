// 4 star question

function firstNotRepeatingCharacter(s) {
    var obj = {};
    obj[s[0]] = 1;
    
    for (let i = 1; i < s.length; i++)
    { 
        flag = 0;
         
      for(key in obj)
      {
          if (key == s[i]) {
              obj[key]++;
              flag = 1;
 
          } 
          
        }
        if(flag==0)
        obj[s[i]] = 1;
         
    }
    flag = 0;
     
    for(k in obj)
    {   
        if (obj[k] == 1)
            {console.log(k);
        flag = 1;
            break;
        }
    }
    if(flag==0)
    console.log("_");
    
}


 

var s = "acbcfa";
firstNotRepeatingCharacter(s);
 