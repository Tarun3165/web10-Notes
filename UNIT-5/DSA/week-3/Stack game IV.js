

function calScore(S, N, M) {
    let st = [];
    for (let i = 0; i < S.length;i++)
    {
        if (S[i] == "(" || S[i] == "[" || S[i] == "{")
            st.push(S[i]);
        else
        {
          if(st.length==0)    
          {
              console.log("no");
              return;

            }
            else
           {
               let x = st.pop();
              
           }
        }
    }
    if(st.length % 2==1)
    console.log("yes");
    else
        console.log("no");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let arr = newInput[i * 2 - 1].trim().split(" ").map(Number);
        let N = arr[0];
        let M = arr[1];
        let S = newInput[i * 2].trim();
        calScore(S, N, M)
       
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`10
      10 8
      )((()()())(())((()
      1 7
      ))()))))
      1 6
      )()))))
      6 8
      ()()))))())(((
      6 4
      ())())((((
      6 8
      )))))))((((()(
      7 9
      ())())())(()))((
      5 1
      ()((((
      6 9
      (()(())(())))))
      1 1
      ()
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