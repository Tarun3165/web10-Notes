// 4 star question

function equalizeArr(arr)
{
  var largest = 0;
  var largestIndex = 0;
  var count1 = 0;
  var count2 = 0;
  var flag = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1])
      count2++; 
  }
 
  if (count2 == arr.length-1)
    flag = 1;
  
  while (!flag) {
    count1++;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > largest)
          {
            largest = arr[i];
            largestIndex = i;
          }
      }
      for (let i = 0; i < arr.length; i++) {
        if ( i!=largestIndex)
           arr[i]+=1;
  }
  count2 = 0;
      for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1])
      count2++; 
}
    if (count2 == arr.length-1)
      flag = 1;
  }

  console.log(count1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var n = Number(newInput[0]);
    var arr = newInput[1].trim().split(" ").map(Number);
    equalizeArr(arr);
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`7
    2 6 1 0 5 8 3`);
     
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
  