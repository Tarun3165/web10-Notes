function nextGreaterElement(arr) {
  let st = [];
  st.push(arr[arr.length - 1]);
  let newArr = [];
  newArr[arr.length-1]=-1;
  for (let i = arr.length - 2; i >= 0;i--)
  {
    while(st.length > 0 && arr[i]>=st[st.length-1])
    {
      st.pop();
    }
    if(st.length==0)
      newArr[i] = -1;
    else
    {
      newArr[i]=(st[st.length - 1]);
    }
    st.push(arr[i]);
  }
  console.log(newArr.join(" "));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        nextGreaterElement(arr)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`10
      9
      2 5 1 6 2 4 4 5 5
      6
      8 11 1 20 15 19
      1
      15
      6
      8 8 10 3 8 3
      11
      16 10 8 10 9 8 15 9 4 16 15
      2
      4 2
      11
      6 9 10 5 6 3 9 2 10 11 4
      13
      11 1 6 12 12 1 14 12 10 12 7 11 15
      12
      3 1 1 3 2 5 6 4 3 3 5 4
      14
      9 8 9 8 4 4 8 9 4 5 5 4 3 3
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