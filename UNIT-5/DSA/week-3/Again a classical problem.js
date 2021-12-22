function check(a, b) {
    if (a == "(" && b == ")")
        return true;
    else if (a == "{" && b == "}")
        return true;
        
    else if (a == "[" && b == "]")
        return true;
    else
        return false;
}

function checkBanced(S) {
    let st = [];
    for (let i = 0; i < S.length;i++)
    {
        if (S[i] == "(" || S[i] == "[" || S[i] == "{")
            st.push(S[i]);
        else
        {
          if(st.length==0)    
          {
              console.log("not balanced");
              return;
            }
            else
           {
              let x = st.pop();
            //   console.log(x, S[i]);
              
              if(!check(x,S[i]))
              {
                  console.log("not balanced");
                  return;
              }
           }
        }
    }
    if(st.length==0)
    console.log("balanced");
    else
        console.log("not balanced");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let S = newInput[i].trim();
        checkBanced(S)
     
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      {([])}
      ()
      ([]
      
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