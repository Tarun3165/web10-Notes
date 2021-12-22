function useSidelane(N, arr) {
    let st = [];
    let ln = [];
    let count = 1;
    let p1 = 0;
    while (arr[p1]) {
        if(arr[p1]==count)
        {
            st.push(arr[p1])
            p1++;
            count++;
        }
        else if(ln[ln.length-1]==count)
        {
            st.push(ln[ln.length-1])
            ln.pop();
            count++;
        }
        else
        {
            ln.push(arr[p1])
            p1++;
        }
    }
    while (ln.length) {
        let x = ln.pop();
        if(x==count)
        {
            st.push(x);
            count++;
        }
        else
        {
            console.log("no");
            return;
        }
    }
    console.log("yes");


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    let p1 = 0;
    var N = +newInput[p1].trim();
    while (N != 0)
    {
        var N = +newInput[p1].trim();
        if (N == 0)
            break;
        p1++;
        var arr = newInput[p1].trim().split(" ").map(Number);
        p1++;
        useSidelane(N,arr)
       
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5 
      4 1 5 3 2 
      5 
      3 1 2 5 4 
      5 
      5 3 2 1 4 
      10 
      1 2 10 5 4 3 7 6 8 9 
      10 
      1 2 10 5 4 3 9 8 7 6 
      5 
      3 5 2 4 1 
      5 
      1 2 4 3 5 
      4 
      4 2 3 1 
      0
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