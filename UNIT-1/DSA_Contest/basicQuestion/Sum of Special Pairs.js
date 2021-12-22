// 4 star question

function isPrime(N)
{
    var bool=true; //  true is taken for numbers that are prime
     for (let i = 2; i * i <=N;i++)   // this will take all edge cases. i=2 is taken  bcz it checks element divisible by 2 
     {
         if (N % i == 0)
         {
           bool = false;
         console.log(bool,N);}
     }
    if (bool == false)
         return false
     
     else if(N==1)
        return false
     else
        return true
}

// function prime(n)
// {
//   var count = 0;
//   for (let i = 1; i <= n;i++)
//   {
//     if (n % i == 0)
//       count++;
//   }
//   if(count==2)
//   console.log("prime");
//   else
//     console.log("not prime");

// }

// // prime(17);
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var A = newInput[1].trim().split(" ").map(Number);
    var sum = 0;
   
     
    for(let i = 0;i<A.length;i++)
    {
        for (let j = i+1; j <A.length;j++)
        {  if(isPrime(j-i))
           { 
            if (A[i] - A[j] < 0)
                sum += A[j] - A[i];
            else
                sum += A[i] - A[j];
                   
        }

        }
        
    }
   console.log(sum); 
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    1 2 3 5 7 12`);
     
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
  