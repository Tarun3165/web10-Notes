var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
];

var row = matrix.length;
var column = matrix[0].length;

 
var transposeMatrix = [];
for (let i = 0; i < column; i++)
{
    var temp = [];
    for (let j = 0; j < row; j++)
    {
         temp.push(matrix[j][i]);
    }
    
  transposeMatrix.push(temp);
}
console.log(transposeMatrix);

 