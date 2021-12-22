function countLongestSubArr1(arr,N,K) 
{    
  var sumArr = sum(arr);
  var count = 1;
  var flag1 = true;
  var flag2 = true;
  var l = 0;
  var r = 0;
   if(sumArr%K!=0)
   {
     console.log(count);
     return;
  }
  
  else if (sumArr % K == 0)
  {
    while(l <N/2)
    {
      if (arr[l] % K == 0)
        l++;
      else
      {
        flag1 = false;
        break;
      }
       
    }
    while(r <N/2)
    {
      if (arr[N-1-r] % K == 0)
        r++;
      else
      {
        flag2 = false;
        break;
      }
       
    }
    if (flag1 == true && flag2 == true)
    {
      console.log(0);
      return;
    }
     
     
     if(l==r)
     {
       console.log(2);
       return;
     }

     else
     {
       console.log(1);
       return;
     }
  }

}
 
 
  
// function countLongestSubArr(arr, N, K)
//  {
//      var container = [];
//      var count = 0;
//      var len = 0;
//      for (let i = 0; i < N;i++)
//      {
//          for (let j = i; j < N;j++)
//          {
//              var temp=[];
//              for (let k = i; k <= j;k++)
//              {
//                  temp.push(arr[k]);
//              }
   
//              if (sum(temp) % K != 0)
//              {
//                  if (temp.length >= len)
//                  {
//                    container.push(temp);
//                    len = temp.length; 
//                  } 
//             } 
//          }
//        }
  
     
//      for (let i = 0; i < container.length;i++)
//      {
//          if (container[i].length == len)
//              count++; 
//      }
     
//     console.log(count);
     
// }
 
function sum(temp)
{  var s=0;
    for (let i = 0; i < temp.length;i++)
    {
        s += temp[i];
    }
    return s;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    countLongestSubArr1(arr, N, K); 
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`100 50
    96 47 58 86 82 81 65 66 56 28 79 56 61 9 31 47 35 4 69 70 78 51 19 13 76 92 7 79 20 15 58 93 88 50 18 63 18 29 46 99 86 75 70 88 19 39 99 70 97 44 95 52 27 58 72 76 52 37 77 23 54 52 16 47 92 67 22 94 38 90 39 71 29 21 51 54 9 58 35 76 3 7 63 16 100 61 27 78 55 63 17 15 30 61 70 39 22 30 57 79
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
  