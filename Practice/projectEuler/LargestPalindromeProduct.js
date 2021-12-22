// largest palindrome formned by  multiplication of two 3 digit numbers

var N = 999;
var product = 1;
var flag = 0;
var largest=0;
var palin = 0;
for (let i = N; i >= N/2;i--)
{
    for (let j = N; j >= N/2;j--)
    {
        product = i * j;
       
        palin = checkPalindrome(product);
        
        if (palin > largest)
            largest = palin; 

    } 
}
console.log(largest);

function checkPalindrome(n)
{
    var str = String(n);
    var res = "";
    for (let i = str.length - 1; i >= 0;i--)
    {
        res += str[i];
        
    }
    if (res == str) {
        return n;
    }
    else return -1;
       
}