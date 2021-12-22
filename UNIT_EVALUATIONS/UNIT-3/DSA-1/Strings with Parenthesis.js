function balanceBracket(S) {
    var stack = [];
    
      for (let i = 0; i < S.length; i++)
      {
        
        if (S[i] == "{" || S[i] == "(" || S[i] == "[")
          stack.push(S[i]);
      else if(S[i] == "}" || S[i] == ")" || S[i] == "]")
        {
          
          if (stack.length == 0)
          {
            console.log("unbalanced");
            return;
          }
          
          var Z = stack.pop(); 
          if (isMatch(S[i], Z) == false)
          {   console.log("unbalanced");
            return;
          }
         
         
        } 
         
    }
    if(stack.length==0)
      console.log("balanced");
    else
      console.log("unbalanced"); 
    
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
  
     
  
      var S = input.trim();
      
      balanceBracket(S);
      
    }
  
  
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]] 
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
  