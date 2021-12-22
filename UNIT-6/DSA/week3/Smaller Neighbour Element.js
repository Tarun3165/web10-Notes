function smallerNeigbourELement(arr, N) {   // bruteforcew approach
  let st = [];
  st.push(arr[0])
  let A = [-1];
  for (let i = 1; i < arr.length;i++)
  {
    while (st.length > 0 && arr[i] <= st[st.length - 1])
      st.pop();
    if (st.length == 0)
      A[i] = -1;
    else
      A[i]=st[st.length-1]
    st.push(arr[i]);

  }
  console.log(A.join(" "));
}

// function smallerNeigbourELement(arr, N) {   // bruteforcew approach
//     let A = [];
//     for (let i = 0; i < arr.length;i++)
//     {
//         let flag = 0;
//         for (let j = i - 1; j >= 0;j--)
//         {
//             if (arr[j] < arr[i])
//             {
//                 flag = 1;
//                 A[i] = arr[j];
//                 break;
//             }
//         }
//         if (flag == 0)
//             A[i] = -1;
//     }
//     console.log(A.join(" "));
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    smallerNeigbourELement(arr, N);
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`8
      39 27 11 4 24 32 32 1
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