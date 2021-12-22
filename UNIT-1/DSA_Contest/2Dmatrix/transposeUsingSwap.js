// transpose using swap mathod . swap method only valid for  rows=columns

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i+1; j < matrix.length; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  
  // print
  for (let i = 0; i < matrix.length;i++)
  {
      var res = "";
      for (let j = 0; j < matrix.length;j++)
      {
          res += matrix[i][j] + " ";
  
      }
      console.log(res);
  }