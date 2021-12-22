var matrix1 = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var matrix2 = [
  [2, 1, 2],
  [1, 2, 1],
  [2, 1, 2],
]; 
 
var matrix3 = [];
for (let i = 0; i < matrix1.length;i++)
{
  var temp = [];
    
    for (let j = 0; j < matrix1[i].length;j++)
    {
        var sum = matrix1[i][j] + matrix2[i][j];
        temp.push(sum);
  
  }
  matrix3.push(temp);
}
console.log(matrix3);

 
 
 