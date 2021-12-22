var n = 10001;
countPrime = 0;
var i = 0;
var sum = 0;
 
 while(countPrime<=n)  
 {
     i++;
     checkPrime(i);
    if(countPrime==n)
    {
        console.log(i);
        break;
    }
    
}
  

function checkPrime(N)
{
    var count = 0;
    for (let i = 2; i*i <= N; i++)       // fast way
    {
        if(N%i==0)
        {
            count ++;
        }
    
    }
    if (count<1&&i!=1)
    countPrime++;
   

 }
 