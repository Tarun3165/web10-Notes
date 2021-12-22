var arr = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

for (let i = 0; i < arr.length;i++)
{
    var sum = 0;
    for (let j = 0; j < arr[i].length;j++)
    {
        sum += arr[j][i];   // to go for columns

    }
    console.log(sum);
}