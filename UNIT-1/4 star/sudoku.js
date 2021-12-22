var sudoku = [    
  [
    [
      [3, 9, 4],
      [1, 5, 7],
      [2, 8, 6],
    ],
    [
      [1, 7, 2],    
      [3, 8, 6],
      [9, 4, 5],
    ],
    [
      [5, 8, 6],
      [2, 4, 9],
      [7, 1, 3],
    ],
  ],
  [
    [
      [5, 3, 8],
      [9, 4, 1],
      [7, 6, 2],
    ],
    [
      [7, 9, 4],
      [2, 6, 3],
      [8, 5, 1],
    ],
    [
      [6, 2, 1],
      [8, 7, 5],
      [3, 9, 4],
    ],
  ],
  [
    [
      [4, 1, 3],
      [6, 2, 9],
      [8, 7, 5],
    ],
    [
      [5, 2, 8],
      [4, 3, 7],
      [6, 1, 9],
    ],
    [
      [9, 6, 7],
      [1, 5, 8],
      [4, 3, 2],
    ],
  ],
];

var str = "123456789";
var flag = 1; // if flag=1 then correct

function boxCheck() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      var arr = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          arr.push(sudoku[i][j][k][l]);
        }
      }
      // console.log(arr);
      if (arr.sort().join("") != str)
        flag = 0;
    }
  }
}

function rowCheck() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      var arr = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          arr.push(sudoku[i][k][j][l]);
        }
      }
      // console.log(arr);
      if (arr.sort().join("") != str)
        flag = 0;
    }
  }
}
  
function columnCheck() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      var arr = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          arr.push(sudoku[k][i][l][j]);
        }
      }
      // console.log(arr);
      if (arr.sort().join("") != str)
        flag = 0;
    }
  }
}
   

function sort(a, b) {
  return a - b;
}


boxCheck();
rowCheck();
columnCheck();

if (flag == 0)
  console.log("WRONG");
  else
  console.log("CORRECT");






// to create empty sudoku
// for (let i = 0; i < 3; i++) {
//   sudoku[i] = [];
//   for (let j = 0; j < 3; j++) {
//     sudoku[i][j] = [];
//     for (k = 0; k < 3; k++) {
//       sudoku[i][j][k] = [];
//     }
//   }
// }

// console.log(sudoku);
