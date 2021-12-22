var n = 7;

for (let i = 1; i < n; i++) {
    var temp = "";
   
    for (let j = 1; j <= n - 1; j++) {
        temp += "  ";
    }
 

    for (let k = 1; k <= 1; k++) {
        temp += "* ";
    }
    console.log(temp);

}
var temp = "";
for (let m = 1; m <= n ; m++) {
    temp += "* ";
}
console.log(temp);


// or

// for (let i = 1; i <= n; i++) {
//     var temp = "";
//     {
//         for (let j = 1; j <= n; j++) {
//             if (i == n || j == n)
//                 temp += "* ";
//             else
//                 temp += "  ";
//         }
//         console.log(temp);
//     }
// }