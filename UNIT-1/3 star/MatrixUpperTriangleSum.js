var matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var sum = 0;
for (let i = 0; i < matrix.length;i++)
{   
    for (let j = 0; j < matrix[i].length;j++) 
    {
        if (i <= j)
            sum += matrix[i][j];
 
    }
}
console.log(sum);