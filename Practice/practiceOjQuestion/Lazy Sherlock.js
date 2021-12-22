// 5 star question


// question is that a person has to buy a jacket , given that he is very rich and intelligent enough to buy a jacket which is smaller in price if same jacket is there in  different shops. he all kind of rupee notes [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]. But he will buy that jacket which will cost less no. of notes as compared to a cheaper jacket with more no. of notes.  Given same jacket price in different shops as input. find price of jacket which he will buy.

 
// counts the minimum notes 
function countNotesRequired(N,newarr1,count,newarr3)
{ 
  var temp = 0;
  var flag = 0;
  for (let i = 0; i < newarr1.length;i++)
  { 
    if (N > newarr1[i])
    {
      temp = newarr1[i];  
      for (let j = 0; j < newarr1.length;j++)
      {
        if ((N % temp == newarr1[j])||(N % temp == 0) )
        {
          flag = 1;
          count++; 
          newarr3.push(count);  
          break;
        }
      }
      
      if (flag == 0)
      {
        count++;
        countNotesRequired(N % temp, newarr1, count,newarr3); 
      }
      break;
    }   
  } 
}

function amount(arr)
{
  var newarr1 = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  var newarr2 = [];
  var flag = 0;
  for (let i = 0; i < arr.length; i++) 
  {
      for (let j = 0; j < newarr1.length; j++) {
        {   if(arr[i]==newarr1[j])
            { newarr2.push(arr[i]);
              flag = 1; 
              break;
           }
        }
      }
  }

  if(flag==1)
  {  var min = newarr2[0];
    for (let i = 1; i < newarr2.length;i++)
    {
      if (newarr2[i] < min)
      min = newarr2[i];
    }
    console.log(min);
  }
  
  else
  {     
    var newarr3 = [];
    for (let i = 0; i < arr.length;i++)
      {
        var count = 1;
        var totalCount = 0;
        countNotesRequired(arr[i], newarr1, count, newarr3); 
      }
      
    var min = newarr3[0];
    var indexAtMinimum = 0;
    for (let i = 1; i < newarr3.length;i++)
      {
        if (newarr3[i] < min)
        {
          min = newarr3[i];
          indexAtMinimum = i;
        }
      }
      console.log(arr[indexAtMinimum]);
  } 
}
  

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    { 
        var arrCost = newInput[i * 2].trim().split(" ").map(Number);
      amount(arrCost);        // return the most suitable cost for him 
      
    }
   
}

if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`1
  5
  29 54 533 500 10
  3
  34 500 376`);
   
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
