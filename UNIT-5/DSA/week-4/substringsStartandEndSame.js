//count no. of substrings that starts and ends with the same characters

let S = "abcab";

let count = 0;
for (let i = 0; i < S.length;i++)
{
    if (S[i] == "a")
        count++;
}
let res = count * (count + 1) / 2;
console.log(res);


//bruteforce
// count = 0; 
// for (let i = 0; i < S.length;i++)
// {  
//     for (let j = i; j < S.length;j++)
//     {
//         let temp = "";
//         for (let k = i; k <= j;k++)
//         {
//             temp += S[k];
        
//         }
//         // console.log(temp);
//         if (temp[0] == temp[temp.length - 1] && S[i]=="a")
//        count++

//     }
// }
// console.log(count);