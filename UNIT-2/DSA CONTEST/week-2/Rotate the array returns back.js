//   without using extra space .2 pointer approach
  // Time Complexity O(N) . space complexity will be O(1)

function rotateArrRight1(arr, N, K)
{  
  var p1 = 0;
  var p2 = N - 1;
  reverseArr(arr, p1, p2);
   
  //  reverse by parts . (0,K-1) 
   p1 = 0;
   p2 = K - 1;
  reverseArr(arr, p1, p2);

  //  reverse by parts .   (K,N-1)
  p1 = K;
  p2 = N - 1;
  reverseArr(arr, p1, p2);
  
  console.log(arr.join(" "));
}

function reverseArr(arr,p1,p2)
{
  
  var temp; 
  while(p1<p2)   // reverse the array
  {
    
    temp = arr[p2];
    arr[p2] = arr[p1];
    arr[p1] = temp;

    // arr[p1]  =arr[p1] + arr[p2];   // without using temp variable
    // arr[p2]  =arr[p1] - arr[p2];
    // arr[p1]  =arr[p1] - arr[p2];
    p1++;
    p2--;
  }
    
}
 
function rotateArrRight2(arr, N, K)
{   
    k = K % N ; 
  var temp = "";
    for (let i =N - K; i < N;i++)
    {
      temp += arr[i]+" ";
  }
  
    for (let i=0; i < N - K;i++)
    {
      temp += arr[i]+" ";
    }
  
      console.log(temp); 
 
}
 
// function rotateArrRight3(arr, N, K)
// {   
//     k = K %N ; 
//     var newarr = [];       
//     for (let i = 0; i < N;i++)
//     {
//       if ((i + k) < N) {
//         newarr[i + k] = arr[i]; 
//       }
  
//       else
//       newarr[(i + k) % N  ] = arr[i];
       
//     }
     
//      console.log(newarr.join(" "));
 
//  }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    
    for (let i = 1; i <= T; i++) 
    {  var arr1=newInput[2 * i-1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        rotateArrRight1(arr,N,K); 
    } 
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5 2
    1 2 3 4 5
    2 2
    1 2
    3 1
    1 2 3
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
  