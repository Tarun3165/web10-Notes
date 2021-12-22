var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 6],
  [7, 8, 9, 9],
  [2, 4, 1, 3],
];
 
 
var sumDiagonal1 = 0;
var sumDiagonal2 = 0;
for (let i = 0; i < matrix.length;i++)
{
    for (let j = 0; j < matrix[i].length;j++)
    {
        if (i == j)
            sumDiagonal1 += matrix[i][j];
        else if (i + j == matrix.length - 1)
            sumDiagonal2 += matrix[i][j];

    }
}
console.log(sumDiagonal1- sumDiagonal2 );