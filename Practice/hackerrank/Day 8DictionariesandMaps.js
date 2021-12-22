// method 1************
// function runProgram(input) {
  
//     var newInput = input.split("\n");
//     var T = Number(newInput[0]);
    
//   var phoneBook = {
//     str:[]
    
//   };

//   for (let i = 1; i <= T;i++)
//   {   
//     var arr = newInput[i].trim().split(" "); 
//     phoneBook.str[i-1] = arr; 
//   }
//   // console.log(phoneBook);
 
//   for (let i = T+1; i <= 2*T;i++)
//   {
//     var flag = 0;
//     for (let j = 0; j < phoneBook.str.length ; j++)
//     {   
//         if (phoneBook.str[j][0] == newInput[i].trim())
//         {
//           console.log(phoneBook.str[j][0]+"="+phoneBook.str[j][1]);
//           flag=1
//           break;
//         } 
//     }
//     if (flag == 0)
//       console.log("Not found");
    
//   }

// method 2**********
function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = Number(newInput[0]);
  
  var phoneBook = {};

  for (let i = 1; i <=T;i++)
  {   
    var arr = newInput[i].trim().split(" ");
    var key = arr[0]; 
    // phoneBook.key = key;   // this is searching/creating  "key" in phoneBook and assigning it value key=arr[0]
    phoneBook[key] = arr[1];    // this is not creating "key " but creating value of key as a key ND aaigning key =arr[0].
  }
  // console.log(Object.values(phoneBook));

  for (let i = T + 1; i <= 2 * T; i++) {
    var flag = 0;
    for (key in phoneBook)    // here key is a variable
    {
      if (key == newInput[i].trim()) {
        console.log(key + "=" + phoneBook[key]);
        flag = 1;
      }
    }
    if(flag==0)
    console.log("Not found");
  } 
 
}
     
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    sam 99912222
    tom 11122222
    harry 12299933
    sam
    edward
    harry`); 
     
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
  