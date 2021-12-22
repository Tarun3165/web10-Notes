function power(arr) {
    let st = [];
    let powerArr = [];
    powerArr[0] = 1;
    st.push(0);
    for (let i = 1; i < arr.length;i++)
    {
        while (st.length > 0&& arr[st[st.length-1]] <= arr[i] )
        {
            st.pop();
        }
        if (st.length == 0)
            powerArr[i] = i+1;
        else
        powerArr[i]=i-st[st.length-1]

        st.push(i);
    }
    console.log(powerArr.join(" "));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        power(arr)
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      7
      100 80 60 70 60 75 85
      5
      3 5 0 9 8
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