var n = 10;
countPrime = 0;
var i = 0;
var sum = 0;
 
 while(i<n)  
 {
     i++;
     checkPrime(i);
     
}
console.log(sum);
 

function checkPrime(N)
{
    var count = 0;
    for (let i = 2; i*i <= N; i++)
    {
        if(N%i==0)
        {
            count ++;
        }
    
    }
    if (count<1&&i!=1)
    sum += N;
    
 }
 