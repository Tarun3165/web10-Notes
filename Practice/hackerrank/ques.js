// Sum square difference
// var N = 100;
// var sum = N * (N + 1) / 2;
// var sumOfSquare = N * (N + 1) * (2*N +1) / 6;
// console.log(sum ** 2 - sumOfSquare);

// 10001st prime

var countPrime = 0;
var i = 2;
var prime = 0;
while (countPrime < 10)
{
    if (checkprime(i) == 1)
    {
        countPrime++;
        prime = i;
    }
    
    i=i+1;
}
console.log(countPrime,prime);
    
    

function checkprime(N)
{  var count = 0;
   
    
    for (let i = 1; i <= N; i++)
    {
        if (N % i == 0)
            count++;
        
    }
    if (count == 2)
        return 1;
    else
        return 0;
}