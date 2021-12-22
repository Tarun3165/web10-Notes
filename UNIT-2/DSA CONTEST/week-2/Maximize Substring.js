// **Time Complexity** O(N^2)   .space complexity will be `O(1)`

function longestSubstring1(S) {
  
  var temp = "a";
  var arr = [];
  var index = 0;
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) > temp)
    {
      temp = S.charAt(i);
      index = i;
    } 
  } 
  
  
  for (let j = index; j < S.length; j++) {
     
      temp = S.substr(j, S.length); 
      arr.push(temp);
    
  }
   
  arr = arr.sort(); 
  // console.log(arr);
  console.log(arr[arr.length - 1]);
  
}

function longestSubstring(S) {
  // brute force approach
  var arr = [];
  for (let i = 0; i < S.length;i++)
  {
    for (let j = i ; j < S.length;j++)
    {
      var temp = "";
      for (let k = i; k <= j;k++) 
      {
        temp += S[k];
         
      }
      console.log(temp);
      // arr.push(temp);
       
    }
  }
  arr = arr.sort();
  // console.log(arr);
  console.log(arr[arr.length - 1]);
}
  
// function longestSubstring3(S) {
 
//   var LC = "abcdefghijklmnopqrstuvwxyz";
//   var index1 = 0;
//   var index2 = 0;
//   for (let i = 0; i < S.length; i++) {
//     for (let j = 0; j < LC.length; j++) {
//       if (S[i] == LC[j]) {
//         if (j > index1)
//           {index1 = j;
//           index2 = i;
//           }
//         }
//        }
//      }

//   var arr = [];
//   var temp;
//   //  console.log(index1);
//     for (let j = index2; j < S.length; j++) {
//        temp= S.substr(index2,j);
//        if(temp[0]==LC[index1])
//        {
//          arr.push(temp);
//         }
//       }
 
//   arr = arr.sort();
 
//   console.log(arr[arr.length - 1]);
  
// }
  
function runProgram(input) {
  
    var newInput = input.split("\n");
  var S = newInput[1].trim();
   
  longestSubstring(S); 
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`
    tarun
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
  