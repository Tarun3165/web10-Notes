function mergeSort(arr, l, r) {
    if (l >= r)
    return;
    let m = Math.floor((r + l) / 2);
    mergeSort(arr,l,m)
    mergeSort(arr,m+1,r)
    merge(arr,l,m,r)
}

function merge(arr, l, m, r) {
    
 
    let n1 = m - l + 1;
    let n2 = r - m;
    let l1 = [];
    let r1 = [];
    for (let i = 0; i < n1;i++)
    {
        l1[i] = arr[l + i];
    }
    for (let j = 0; j < n2;j++)
    {
        r1[j] = arr[m + j+1];
    }
    let i = 0;
    let j = 0;
    let k = l;
    while(i<n1 && j<n2)
    {
        if (l1[i] <= r1[j])
        {
            arr[k] = l1[i];
            i++;
        }
        else
        {
            arr[k] = r1[j];
            j++;
        }
        k++;
    }
    
    while(i<n1)
    {
        arr[k] = l1[i];
        i++;
        k++;
    }
    
    while(j<n2)
    {
        arr[k] = r1[j];
        j++;
        k++;
    }
    
  
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    mergeSort(arr, 0, N - 1)
    console.log(arr.join(" "));
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
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