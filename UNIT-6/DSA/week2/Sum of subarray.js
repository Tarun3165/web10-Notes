

function sumSubarr(arr, K) {
    let prefixSum = [];
    
  let sum = 0;
  let set = new Set;
    for (let i = 0; i < arr.length;i++)
    {
      sum += arr[i];
      prefixSum[i] = sum;
      set.add(prefixSum[i])
      if (set.has(prefixSum[i] - K))
      {
        console.log("Yes");
        return;
      }
        
      if(arr[i]==K)
      {
        console.log("Yes");
        return;
      }
      if(sum==K)
      {
        console.log("Yes");
        return;
      }
  }
  // console.log('prefixSum:', prefixSum)
    console.log("No");
    
}

// function sumSubarr(arr, K) {
//     let prefixSum = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//       prefixSum[i] = sum;
//     }
  
//     for (let i = 0; i < arr.length;i++)
//     {
       
//         let p1 = 0;
//         let p2 = i;
//         while(p2<arr.length )
//         {
//           if (p1 == p2)
//             sum = prefixSum[p1];
//           else if (p1 == 0)
//             sum = prefixSum[p2];
//           else
//           sum = prefixSum[p2]-prefixSum[p1-1];
          
//             if(sum==K)
//             {  
//                 console.log("Yes");
//                 return;
//             }
//             p2++;
//             p1++;
            
//         }
//     }  
//     console.log("No");
    
// }



// function sumSubarr(arr, K) {

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     for (let j = i + 1; j < arr.length;j++)
//     {
//       if(sum==K)
//       {
//         console.log("Yes");
//         return;
//       }
//       sum += arr[j];
//     }
//     if(sum==K)
//     {
//       console.log("Yes");
//       return;
//     }
//   }
//   console.log("No");
    
// }

// function sumSubarr1(arr, K) {
//     for (let i = 1; i <= arr.length;i++)
//     {    
//         let p1 = 0;
//         let p2 = i;
//         while(p2<=arr.length )
//         {
           
//             let sum = 0;
//             for (let j = p1; j < p2; j++)
//             {
//                 sum += arr[j];
//             }
//             if(sum==K)
//             {  
//                 console.log("Yes");
//                 return;
//             }
//             p1++;
//             p2++;
//         }
//     }  
    
//     console.log("No");
    
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2*i-1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2*i].trim().split(" ").map(Number);
        sumSubarr(arr,K)
    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      6 15
      1 2 3 4 5 6
      4 5
      1 2 1 3
      3 2
      1 2 1`);
       
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