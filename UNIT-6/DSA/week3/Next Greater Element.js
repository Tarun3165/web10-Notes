function nextGreater(arr, N) {
    let right = [];
    right[N - 1] =-1;
    let st = [];
    st.push(arr[N - 1]);
    for (let i = N - 2; i >= 0;i--)
    {
        while (st.length > 0 && arr[i] >= st[st.length - 1])
            st.pop();
        if (st.length == 0)
            right[i] = -1;
        else
            right[i] = st[st.length - 1];
        st.push(arr[i]);
    }
    console.log(right.join(" "));
}

// function nextGreater(arr, N) {
//     let newArr = [];
//     for (let i = 0; i < N;i++)
//     {
//         let flag = 0;
//         for (let j = i + 1; j < N;j++)
//         {
//             if (arr[j] > arr[i])
//             {
//                 newArr.push(arr[j]);
//                 flag = 1;
//                 break;
//             }

//         }
//         if (flag == 0)
//             newArr.push(-1);
//     }
//     console.log(newArr.join(" "));
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[2*i-1].trim();
        var arr = newInput[2*i].trim().split(" ").map(Number);
        nextGreater(arr,N)
    
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      4
      1 3 4 4
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