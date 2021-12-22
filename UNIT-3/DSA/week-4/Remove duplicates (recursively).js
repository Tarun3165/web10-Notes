function removeDuplicates2(S) {    //   recursion + for loop
  var temp = "";
  for (let i = 0; i < S.length;i++)
  { 
    if (i == 0) {
      if (S[i] != S[i + 1]) {
        temp += S[i];
      }
    } else if (i == S.length - 1) {
      if (S[i] != S[i - 1]) {
        temp += S[i];
      }
    } else if (i > 0 && i < S.length - 1) {
      if (S[i] != S[i - 1] && S[i] != S[i + 1]) {
        temp += S[i];
      }
    }
    
  }
  if(temp.length==0)
  {
    console.log("Empty String");
     return "Empty String";
  }
  else if(temp==S)
  {  
    console.log( S);
    return S;
  }
  else
  {
    return removeDuplicates2(temp);
  }
      

}

// function removeDuplicates(temp, S, i) {    // pure recursion
  
//   if (i == 0) {
//     if (S[i] != S[i + 1]) {
//       temp += S[i];
//     }
//   } else if (i == S.length - 1) {
//     if (S[i] != S[i - 1]) {
//       temp += S[i];
//     }
//   } else if (i > 0 && i < S.length - 1) {
//     if (S[i] != S[i - 1] && S[i] != S[i + 1]) {
//       temp += S[i];
//     }
//   }

//   if (i==S.length-1) { 
//     if ( S == temp)
//     {  console.log(S);
//       return S;
//     }
//     else if(temp=="")
//     {
//       console.log("Empty String");
//       return "Empty String";
//     }
//     else
//     {
//       S = temp;
//       temp = "";
//       i = -1;
//     }
//   }
//   return removeDuplicates(temp,S, i+1);

// }

function runProgram(input) {
  var newInput = input.split("\n");
  var T = +newInput[0].trim();
  for (let i = 1; i <= T; i++) {
    var S = newInput[i].trim();
 
    // removeDuplicates1("", S, 0);
    removeDuplicates2(S);
  }
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`4
  azxxxzy
  caaabbbaac
  gghhg
  aaaacddddcappp
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
