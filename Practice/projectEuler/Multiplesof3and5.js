var N = 1000;
var sum = 0;
for (let i = 1; i < N;i++)
{  
    if (i % 3 == 0 || i % 5 == 0)
        sum += i;
}
console.log(sum);