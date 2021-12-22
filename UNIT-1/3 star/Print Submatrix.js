var matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var startRow=1; 
var startColumn=1;
var endRow=2;
var endColumn = 2;

for (let i = startRow; i <= endRow;i++)
{
    for (let j = startColumn; j <= endColumn;j++)
    {
        console.log(matrix[i][j]);
    }
}