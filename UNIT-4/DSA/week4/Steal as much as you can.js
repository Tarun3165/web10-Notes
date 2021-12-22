function runProgram(input) {
  
  var newInput = input.split("\n");
  var C = +newInput[0].trim();
  var V = newInput[2].trim().split(" ").map(Number);
  var W = newInput[3].trim().split(" ").map(Number);
  let n = V.length-1;
 
 
  for (let i = 0; i< n;i++){
    
    for (let j = i; j < n;j++ ){
      
      if (V[j] / W[i] < V[j + 1] / W[j + 1]) {
        var temp = 0;
         temp = V[j];
        V[j] = V[j+1];
        V[j + 1] = V[j];
        
      
         temp = W[j];
        W[j] = W[j+1];
        W[j + 1] = W[j];
         
       }
    }
  }
  
  
  console.log(V);

  // let profit = 0;
  // let i = 0;
  // for (i = 0; i < obj.length; i++) {
  //   if (C > 0 && arr2[obj[i]] <= C) {
  //     C = C - arr2[obj[i]];
  //     profit += arr1[obj[i]];
  //   } else break;
  // }
  // if (C > 0) {
  //   profit += (arr1[obj[i]] * C) / arr2[obj[i]];
  // }
  // console.log(Math.round(profit));
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`520
  10
  206 377 199 189 244 58 118 297 132 181
  100 158 128 134 140 142 161 148 149 125
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
