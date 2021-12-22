 
 
 
function concatinate1(n)
{  
  if (n % 10 ==n)           //for n<10
  { 
    return n;
  }
  else
    
    
 return n%10+concatinate1(Math.floor(n/10))
     
}
 
//************************* */
// function superDigit(temp)
// {  if(temp.length==1)
//     {
//     // console.log(temp);
//     return temp;
//     }
//      var sum = 0;
//     for (let i = 0; i < temp.length;i++)
//     {
//         sum += Number(temp[i]);
//     }
//     temp = String(sum);
   
//     return superDigit(temp);
//  }
 
 
// function concatinate(n, k)
// {    
//   n = String(superDigit(n)*k);
//   if(n.length==1)
//   { 
//     console.log(n);
//     return n;
//   }
//   else
//   return concatinate(n, 1)
     
//  }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ");
    var n = arr[0];
    var k = +arr[1];

  //  concatinate(n,k);
  var N = concatinate1(Number(n))
   while(N>10)
   {
     N = concatinate1(N);
  }
  // console.log(N);
  N = concatinate1(N * k);
  while(N>10)
  {
    N = concatinate1(N);
  }
  console.log(N);
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 10000
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
  