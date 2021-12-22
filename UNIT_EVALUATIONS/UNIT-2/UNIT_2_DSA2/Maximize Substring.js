function longestSubstring2(S) {
 
  var LC = "abcdefghijklmnopqrstuvwxyz";
  var index1 = 0;
  var index2 = 0;
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < LC.length; j++) {
      if (S[i] == LC[j]) {
        if (j > index1)
          {index1 = j;
          index2 = i;
          }
        }
       }
     }

  var arr = [];
  var temp;
   console.log(index);
    for (let j = index; j < S.length; j++) {
       temp= S.substr(index,j);
       if(temp[0]==LC[index])
       {
         arr.push(temp);
        }
      }
 
  arr = arr.sort();
  //  console.log(arr);
console.log(arr[arr.length-1]);
  }
 

function longestSubstring1(S)
{   var LC = "abcdefghijklmnopqrstuvwxyz";
var index = 0;
for (let i = 0; i < S.length; i++) {
  for (let j = 0; j < LC.length; j++) {
    if (S[i] == LC[j]) {
      if (j > index)
        index = j;
      }
     }
   }
//     console.log(LC[index])    
   var arr = [];
     for (let i = 0; i < S.length;i++)
      { 
         for (let j = i; j < S.length;j++)
          {
              var temp = "";
              for (let k=i; k <= j;k++)
              {
                  temp += S[k]; 
              }
           
              if(temp[0]==LC[index])
              {
                arr.push(temp);
              }
          }
      }
  
      arr = arr.sort();
      // console.log(arr);
    console.log(arr[arr.length-1]);

}

function runProgram(input) {
  
    var newInput = input.split("\n");
  var S = newInput[1].trim();
 
  // longestSubstring1(S);
  longestSubstring2(S); 
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`105
    boocrboocvboochboocbbooctboocsboocbboocwboocsboocqboocqboockbooceboocgboocaboocebooctboocyboocxboocbbooci
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
  