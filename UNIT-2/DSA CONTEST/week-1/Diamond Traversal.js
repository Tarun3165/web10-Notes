
function diamondTraversal(matrix, N) {     // N is odd
  var t1 = (N - 1) / 2;
  var t2 = N - 1;
  var temp = "";
  if(N==1)
  {
      console.log(1);
      return;
  }
  while (t1 != 0) {
      temp += matrix[t1][t2] + " ";
      t1--;
      t2--;
  }
  
  while (t2 != 0) {
      temp += matrix[t1][t2] + " ";
      t1++;
      t2--;
  }

  while (t1 != N-1) {
      temp += matrix[t1][t2] + " ";
      t1++;
      t2++;
  }

  while (t2 != N-1) {
      temp += matrix[t1][t2] + " ";
      t1--;
      t2++;
  }
  console.log(temp);
   
}
 

// function diamondTraversal1(matrix, N)     
//  {  if(N==1)
//    {
//      console.log(1);
//    return;
//     }
//      var temp = "";
//      var r1 = (N - 1) / 2;
//      for (let i = N - 1; i >= 0;i--)
//      {
//          if (r1 != 0) {
//              temp += matrix[r1][i] + " ";
//              r1--;
       
//          }
//          else
//              break;
//      }
//      var r1 = (N - 1) / 2;
//      for (let i = 0; i < N - 1;i++)
//      {
//          if (r1 != 0) {
//              temp += matrix[i][r1] + " ";
//              r1--;
//          }
//          else
//          break;
//         }
//      var r1 = (N - 1) / 2;
//      for (let i = 0; i < N - 1;i++)
//         {  if (r1 != N-1) {
//             temp += matrix[r1][i] + " ";
//          r1++;
//         }
//         else
//         break;
//         }
//      var r1 = (N - 1);
//      for (let i = (N-1)/2; i <=N-1;i++)
//         {
//          if (i != N - 1) {
                
//              temp += matrix[r1][i] + " ";
//              r1--;
//          }
//          else
//              break;
//      }
//      console.log(temp);
//  }
 
     
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim() ;
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();    // N is always odd
        count++;
        var matrix = [];
        for (let j = count; j < count + N;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        diamondTraversal(matrix,N);
        count += N;

    }   
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
    1
    1 
    `);
     
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  