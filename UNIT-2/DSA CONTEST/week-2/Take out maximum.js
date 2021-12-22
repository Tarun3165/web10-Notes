// the time complexity is `O(N)
function largestSumSubArr(arr, N, K)
{    
   // sliding window approach (**)
  
  var largest = -999;
  var p1 = 0;
  var p2 = K - 1;
  var sum = 0;

  for (let j = p1; j <= p2;j++)
  {
      sum+=arr[j] ;
  }

  if(sum>largest)
  {
    largest = sum; 
  }

  while(p2<N)
  {  
    sum -= arr[p1];
    p1++;
    p2++;
    sum += arr[p2];

    if(sum>largest)
    {
      largest = sum; 
    }
   
  }
  console.log(largest); 
}

function largestSumSubArr2(arr, N, K)
{
   // sliding window approach 
  var largest = -999;
  var p1 = 0;
  var p2 = K - 1;
  
  while(p2<N)
  {
    var sum = 0;
    for (let j = p1; j <= p2;j++)
    {
      sum+=arr[j] ;
    }
      
    if(sum>largest)
    {
      largest = sum;
    }
  
    p1++;
    p2++; 
  }
  console.log(largest); 
}


function largestSumSubArr1(arr, N, K)
{   // brute force approach
    var largest = 0;
    for (let i = 0; i < N;i++)
    {
        for (let j = i + 1; j < N;j++)
        {
            var temp = [];
            for (let k = i; k <= j;k++)
            {    
                temp.push(arr[k]);
              if (temp.length == K)
                break;
               
            }
            if(temp.length==K)
            {
              var num = sumArr(temp);
               if(num>largest)
               {
                 largest = num;
               }
               
            }
        }
    }
    console.log(largest);
}
 

function sumArr(temp)
{
    var sum = 0;
    for (let i = 0; i < temp.length;i++)
    {  
        sum += temp[i];
    }
    return sum;
}

function runProgram(input) {
 
   var newInput = input.split("\n");
   var arr1 = newInput[0].trim().split(" ").map(Number);
   var N = arr1[0];
   var K = arr1[1];
   var arr = newInput[1].trim().split(" ").map(Number);
  
   largestSumSubArr(arr,N,K);
    
    
 }
 
 if (process.env.USERNAME === "TARUN RAWAT") {
   runProgram(`10 3
   -1 -1 -2 1 -2 4 1 9 3 9`);
    
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
 