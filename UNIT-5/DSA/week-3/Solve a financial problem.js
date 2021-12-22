// function solve(arr) {
//   let count = 1;
//   let span = [];
//   span[0] = 1;
  
//   for (let i = arr.length - 1; i >= 0;i--)
//   {
//     count = 1;
    
//     for (let j = i-1; j >= 0; j--) {
         
//       if (arr[j] < arr[i]) {
//         count++;
       
//       }
//       else
//         break;
       
//     }

//       span[i] = count;
   

//   }

//   console.log(span.join(" "));
// }

function solve(arr) {
    let st = [];
    st.push(0);
    let span = [];
    span[0] = 1;
    for (let i = 1; i < arr.length;i++)
    {
        while(st.length>0 && arr[st[st.length-1]]<=arr[i])
        {
            st.pop();
        }
        if (st.length == 0)
            span[i] = i + 1;
        else
        {
            span[i] = i - st[st.length - 1];
        }
        st.push(i);
        
    }
    console.log(span.join(" "));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let arr = newInput[i * 2].trim().split(" ").map(Number);
        solve(arr)
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5
      3 5 0 9 8
      7
      100 80 60 70 60 75 85
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