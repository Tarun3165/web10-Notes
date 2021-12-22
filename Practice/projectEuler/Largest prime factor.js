
var n = 97;
var temp = [];
var i = 2;
 
 
while (n >1) {
    flag = 0;
    if (n % i == 0) {
 

        for (let j = 0; j < temp.length;j++)
        {
            if (i == temp[j])
            {
                flag = 1;
                break;
            }
            
        }

        if (flag == 0)
            temp.push(i);
       
        n = n / i;
        
    }

    else 
        i = i + 1;
    
 
        
   
   
       
}
console.log(temp);
    
    
 
 