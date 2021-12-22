var data = [
    [1, 2, 3],
    [5, 6 ,7],
    [7 ,8 ,9]
];

var sum = 0;
for (var i = 0; i < data.length;i++)
{
    for (let j = 0; j < data[i].length;j++)
    {
        sum += data[i][j];

    }
}
console.log(sum);

// print diagonal elements
// var Principlediagonal = [];
// for (var i = 0; i < data.length;i++)
// {
//     for (let j = 0; j < data[i].length;j++)
//     {  if(i==j)
//        Principlediagonal.push(data[i][j])
//     }
// }
// console.log(Principlediagonal);
 
 