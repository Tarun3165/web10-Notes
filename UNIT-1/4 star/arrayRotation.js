// 4 star question

rotateArrayLeft = function (arr, K)
{
  
  if (K < arr.length) {
    var temp = "";
    for (let i = K; i < arr.length; i++) {
      temp += arr[i] + " ";
    }

    for (let i = 0; i < K; i++) {
      temp += arr[i] + " ";
    }
    console.log( temp);
  
  }

  else {
    var L = K % arr.length;
    rotateArrayLeft(arr, L);
  }
    
}

rotateArrayRight=function(arr,K)
{
  k = K % arr.length ;
  
  var newarr = [];      // we can fill an empty arr at any position
  // newarr[6] = 6;
  // newarr[4] = 4;
  // console.log(newarr);

  for (let i = 0; i < arr.length;i++)
  {
    if ((i + k) < arr.length) {
      newarr[i + k] = arr[i]; 
    }

    else
    newarr[i + k - arr.length] = arr[i];
     
  }
   
console.log(newarr.join(" "));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
      
    var arr = newInput[1].trim().split(" ").map(Number);
      
    console.log(arr);
  
    rotateArrayLeft(arr, K);
  
    rotateArrayRight(arr,K);
  
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6 4
    1 2 5 4 0 6 `);
     
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
  