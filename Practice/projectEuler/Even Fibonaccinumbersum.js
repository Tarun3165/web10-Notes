 
var a = 1;
var b = 2;
var sum = 0;
var temp = [1, 2];
var count = 1;  
 while(sum<4000000)   //  but temp last element will come greater than 4 million so dont count it
{ sum = a + b;
    temp.push(sum);
    a = b;
     b = sum;
     count++;
}

var evenSum = 0;
for (let i=0; i < count;i++)
{
    if (temp[i] % 2 == 0)
        evenSum += temp[i]; 

}
console.log(evenSum);