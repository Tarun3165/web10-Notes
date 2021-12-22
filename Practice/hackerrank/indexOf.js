// indexOF

function strstr(s, x) {
    var flag=0;
   
    for (let i = 0; i < s.length;i++)
    {   
        if (s[i] == x[0])
        {
            if (x.length == 1)
            {    flag = 1; 
                return i;
            }
            
            else  
                for (let j = 1; j < x.length; j++) {
                    if (s[i + j] == x[j])
                        flag = 1;
                    else
                        flag = 0;
                }
            if (flag == 1)
                return i;
            
        } 
    }

    if (flag == 0) 
    return -1;
}


console.log(strstr("MasaiSchool", "Sc"));   // without in built in function


// console.log("MasaiSchool".indexOf("Sch"));  // built in function


 