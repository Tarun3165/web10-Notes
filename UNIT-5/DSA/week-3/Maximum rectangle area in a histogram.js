function maxArea(arr) {
    let st = [];
    st.push(0);
    let left = [];
    left[0] = -1;
    for (let i = 1; i < arr.length;i++)
    {
        while (st.length >0 && arr[i] < arr[st[st.length - 1]])
        {
            st.pop();
        }
        if (st.length == 0)
            left[i] = -1;
        else
            left[i] = st[st.length - 1]
        
        st.push(i);
    }

     st = [];
    st.push( arr.length-1);
    let right = [];
    right[arr.length - 1] = arr.length - 1;
    for (let i = arr.length-1; i >=0;i--)
    {
        while (st.length != 0 && arr[i] < arr[st[st.length - 1]])
            st.pop();
        if (st.length == 0)
            right[i] = arr.length-1;
        else
            right[i] = st[st.length - 1]
        st.push(i);
    }

    let area = 0;
    let maxArea = 0;
    for (let i = 0; i < arr.length-1;i++)
    {
        area = (right[i] - left[i]-1) * arr[i];
        if (area > maxArea)
            maxArea = area;
    }
    console.log(maxArea,left,right);
  


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        maxArea(arr)
  
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      8
      2 6 2 5 4 5 1 6
      6
      7 5 4 3 6 8
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