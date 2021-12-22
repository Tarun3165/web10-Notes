// 4 star question
 

function checkspaces(str)
{ 
    var countSpace = 0;
  for (let i = 0; i < str.length;i++){
    if (str[i] == " ")
      countSpace++;
  }
  return countSpace;
   
} 
 
function removeSpaces(str)
{    var temp = "";
for (let i = 0; i < str.length;i++)
{
    if (str[i] != " ")
        temp += str[i];

      }
      return temp; 
    }
    
    function checkanagram1(string1, string2)      // without using any in built function
    {
      var actualLength1 = string1.length - checkspaces(string1);
      var actualLength2 = string2.length - checkspaces(string2);
    
      if (actualLength1 == actualLength2)
      {     var count = 0;
        for (let i = 0; i < string1.length; i++) {
          for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]) {
              count++;
              break;
            }
          }
        }
      
        if (count == string1.length)
          console.log("True");
        else
          console.log("False");
      }
      else
      console.log("False");
}
    

function checkanagram2(string1, string2) {         // using sort function
 
  if (string1.split("").sort().join("") == string2.split("").sort().join(""))
     console.log("True");
  else
    console.log("False"); 

}



function runProgram(input) {
  
  var newInput = input.split("\n");
  var string1 = newInput[0].trim();
  
  // one method
  // var string2 = newInput[1].trim();
  // checkanagram1(string1, string2);
  
  // optimized method
  var string2 = removeSpaces(newInput[1].trim());
 
  checkanagram2(string1,string2);
   
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`anagram
    nag a ram`);
     
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
  