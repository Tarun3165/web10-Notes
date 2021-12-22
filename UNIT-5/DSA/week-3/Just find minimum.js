




function runProgram(input) {
   
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    let st = [];
    let currentMin = 0;
    for (let i = 1; i <= T;i++)
    {
        let arr = newInput[i].trim().split(" ");
        // console.log(st,currentMin);
        if (arr[0] == "PUSH")
        {
           let x = Number(arr[1]);
                if(st.length==0)
                {
                    st.push(x)
                    currentMin = x;
                }
                else
                {
                    if (x < currentMin) {
                        st.push(x - currentMin)
                        currentMin = x;
                    }
                    else
                        st.push(x);
                }
           

        }

        else if (arr[0] == "POP")
        {
            if (st.length == 0)
            console.log("EMPTY");
            else
            {
                
                if(st[st.length-1]<currentMin)
                {
                    currentMin = currentMin - st[st.length - 1]
                    
                }
                st.pop();
            }

        }
            
        else if(arr[0]=="MIN")
        {  if(st.length==0)
            console.log("EMPTY");
            else
           console.log(currentMin);
        }
        
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`11
      PUSH 5
      PUSH 7
      PUSH 3
      PUSH 8
      PUSH 10
      MIN
      POP
      POP
      MIN
      POP
      MIN
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