function balanceBracket(S) {
  var stack = [];
  
    for (let i = 0; i < S.length; i++)
    {
      
      if (S[i] == "{" || S[i] == "(" || S[i] == "[")
        stack.push(S[i]);
    else
      {
        
        if (stack.length == 0)
        {
          console.log("not balanced");
          return;
        }
        
        var Z = stack.pop(); 
        if (isMatch(S[i], Z) == false)
        {   console.log("not balanced");
          return;
        }
       
       
      } 
       
  }
  if(stack.length==0)
    console.log("balanced");
  else
    console.log("not balanced"); 
  
}

function isMatch(input, Z) {
  
  if (input == "}" && Z == "{")
    return true;
  if (input == ")" && Z == "(")
    return true;
  if (input == "]" && Z == "[")
    return true;
  else
    return false;
}
   
 
function runProgram(input) {

  var newInput = input.split("\n");
  var T = +newInput[0].trim();

  for (let i = 1; i <= T; i++) {

    var S = newInput[i].trim();
    balanceBracket(S);
    
  }

}

if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`3
  {[(])}
  {[()]}
  {{[[(())]]}} 
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
