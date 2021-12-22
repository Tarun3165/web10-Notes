function minPlatform (arr2) {
  
  let arr4 = [];
  for (let i = 0; i < arr2.length;i++)
  {
    let temp = "";
    for (let j = 0; j < arr2[i].length;j++)
    {
      if(arr2[i][j]===":")
      temp += "."
      else
      temp += arr2[i][j]
    }
    arr4.push(Number(temp))
    
  }
  
  let count = 0;
  let arr3 = arr4.join(" ").split(" ").map(Number);
  arr3 = arr3.sort((a,b)=> {
    return a - b;
  })
 
  for (let i = 0; i < arr3.length; i++)
  {
    if (arr3[i] != arr4[i])
      count++;
  }
  console.log(count);
}

function runProgram(input) {
  
    let newInput = input.split("\n");
    let N = newInput[0].trim();
    let arr1 = newInput[1].trim().split(" "); 
  let arr2 = newInput[2].trim().split(" ");
  
   minPlatform(arr2)
  

}
  
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`6
  9:00 9:40 9:50 11:00 15:00 18:00
  9:10 12:00 11:20 11:30 19:00 20:00
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