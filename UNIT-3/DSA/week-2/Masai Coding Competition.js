 
 

function runProgram(input) {
  
  var newInput = input.split("\n");
    var T = +newInput[0].trim();
  var Mq = [];
  var q1 = [];
  var q2 = [];
  var q3 = [];
  var q4 = [];
    
  for (let i = 1; i <= T; i++) {

    const arr = newInput[i].trim().split(" ");
                                        
    if(arr[0]=="E")
    {
     var clubNo = arr[1];
      var rollNo = arr[2];
     switch(clubNo)
      {
       case "1":
              if (Mq.length == '0' || !MqContains('1'))
                Mq.push("1");
         q1.push(rollNo);
        //  console.log(q1);
         break;
               
        case "2":
              if (Mq.length == "0" || !MqContains("2"))
                    Mq.push('2');
         q2.push(rollNo);
        //  console.log(q2);
         break;
       
        case "3":
              if (Mq.length == "0" || !MqContains('3'))
               Mq.push('3');
               q3.push(rollNo);
         break;
       
        case "4":
             if (Mq.length == "0" || !MqContains('4'))
              Mq.push('4');
            q4.push(rollNo);
         break;
         
        } 
       
            // console.log(Mq);
    }
   
    else  if(arr[0]=="D")
    {   switch(Mq[0])
        {
          case "1": 
              console.log(Mq[0],q1.shift());
              if (q1.length == "0")
                Mq.shift();
          break;
          
          case "2": 
              console.log(Mq[0],q2.shift());
              if (q2.length == "0") 
               Mq.shift(); 
          break;
        
          case "3": 
              console.log(Mq[0],q3.shift());
              if (q3.length == "0") 
                Mq.shift();
          break; 
            
          case "4": 
              console.log(Mq[0],q4.shift());
              if (q4.length == "0") 
               Mq.shift();
          break;
            
        }
    }
          
              
              
  }
    function MqContains(n) {
      for (let i = 0; i < Mq.length;i++)
      {
        if (Mq[i] == n)
          return true; 
      }
      return false;
    }
            
}
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D 
    E 1 3
    E 2 2
    D 
    D 
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
  