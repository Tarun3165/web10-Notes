//  4 star question (vary  tough and challenging)

function runProgram(input) {
  var data = input;

  var temp = data[0];
  var result = "";
  var count = 1;
  for (let  i = 1; i <data.length;i++)
  {
      if (data[i] == temp)
          count++;
      else
      {   if(count%2==1)
        result += temp;
        
          temp = data[i];
          count = 1; 
      }
}

if(count%2==1)
 { result += temp ;
 }
 console.log(result);

}

// function runProgram(input) {       // other approach
  
//   var data = input;
//   var temp = data[0];
//   var result = "";
//   var count = 1;
//   for (let i = 1; i < data.length;i++)
//   {
//       if (temp == data[i])
//           count++;
//       else if (count % 2 == 0 && count > 1)
//       {
//           temp = data[i];
//           count = 1; 
//       } 
//       else {
//           result += temp ;
//           temp = data[i];
//           count = 1; 
//       } 
//   }
// if(count%2!=0)
//   result += temp ;
// else if(!result)
//     result="Empty String"; 
//   console.log(result);
   
// }

if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`aaabccdddd`);
   
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
