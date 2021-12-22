function arrangement(arr)
{ 
  var N = arr.length;
  var a, b, c, d, e, f;
  var count = 0;
  for (let i = 0; i < N;i++)
  {
    a = arr[i];
    for (let j = 0; j < N; j++)
    {
      b = arr[j];
      for (let k = 0; k < N; k++)
      {
        c = arr[k];
        for (let l = 0; l < N; l++)
        {
          if (d != 0)
          d = arr[l];
          for (let m = 0; m < N; m++)
          {
            e = arr[m];
            for (let n = 0; n < N; n++)
            {  
              f = arr[n];
           
              if (f == ((a * b + c)/d  - e))
                {   count++;
                //  console.log(a,b,c,d,e,f); 
                } 
            } 
          } 
        } 
      } 
    }  
  }
  console.log(count);

}

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = Number(newInput[0]); 
  var arr = [];
  for (let i = 1; i <= T;i++)
  {
    var N = +newInput[i].trim();
    arr.push(N);
        
  }
  arrangement(arr);
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`30
    -29408
    20152
    4169
    16672
    17158
    -15450
    9092
    -28453
    -24888
    8885
    15834
    -14959
    -4873
    -14242
    17940
    -2286
    -4353
    -18277
    -13828
    8062
    4355
    24404
    -6972
    24690
    -28534
    4087
    -581
    -22076
    -4595
    1656
    -16038
    17341
    28739
    -17871
    10231
    29711
    -6335
    15964
    16481
    -7547
    15043
    11530
    22211
    14803
    -5436
    13444
    6984
    12051
    -21301
    -21240
    13004
    -12753
    -26894
    -6632
    -12177
    20824
    2574
    -20482
    -23694
    27197
    -13066
    2872
    21958`);
     
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
  