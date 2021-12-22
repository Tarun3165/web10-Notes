 
function sorting4Score(arr, arr1, N)
{
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (arr1[j]<arr1[j+1])
      { 
        var temp = arr1[j + 1];
        arr1[j + 1] = arr1[j];
        arr1[j] = temp;

         temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  
  
}

function sorting4Name(arr,arr1,N)     // first sort names arr so that after sorting score arr , the order is maintained
{ 
    for(let i=0;i<N-1;i++)
    { for(let j=0;j<N-i-1;j++)
       { if( checkString(arr[j],arr[j+1]))
           {  var temp=0;
              temp=arr[j+1];
               arr[j+1]=arr[j];
              arr[j] = temp;
      
              temp=arr1[j+1];
               arr1[j+1]=arr1[j];
              arr1[j]=temp;
            }
       }
  } 
   
}

function min(n1,n2)
{
  if (n1 < n2)
    return n1;
  else
    return n2;

}

function checkString(string1,string2)
{
  var n1 = string1.length;
  var n2 = string2.length;
  for (let i = 0; i < min(n1, n2);i++)
  {
    if(string1[i]!=string2[i])
    {
      if (string1[i] > string2[i])
        return true;
      else
        return false;
    }
  }
  if (n1 > n2)
    return true;
  else
    return false;
}
   
function ranking(arr, arr1, N)
{
  var rank = 1;
  var count = 0;
  var prev = -1;
  
  for (let i = 0; i < N ;i++)
  {
    if (arr1[i] == prev)
    {
      console.log(rank+" "+arr[i]);
      
    }
    else
    {
      rank += count;
      console.log(rank+" "+arr[i]);
      count = 0;
    }
    count++;
    prev = arr1[i];
      
  }
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var name = [];
    var score = [];
    
    for (let i = 1; i <= T;i++)
    {
       
        var arr = newInput[i].trim().split(" ") ;
        name.push(arr[0]);
        score.push(arr[1]);
        
    }
  sorting4Name(name,score,name.length);
  sorting4Score(name,score,score.length);
 
  // console.log(name); 
  // console.log(score);

  ranking(name, score, name.length);
  
    
}
   
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45 
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
  