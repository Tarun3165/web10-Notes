 

// only using push and pop
class Queue {
    constructor()
    {
      this.S1 = [];
      this.S2 = [];
    }
    push(value) {
    	 
       this.S1.push(value); 
    }
    pop() {

      if(this.S2.length==0)
      {
         if (this.S1.length == 0)
         {
             console.log("Empty");
         }
          
        else
        {      
           while(this.S1.length!=0)
           {  let x= this.S1.pop();    
              this.S2.push(x); 
           } 
        }
      };

       return  this.S2.pop(); 
     	 
    }

    front() {
    	//write your code here..
       if(this.S2.length==0)
            return this.S1[0];
      else
      {  let q=this.S2[this.S2.length-1]; 
        return q;
      }
           
    }
    isEmpty() {
    	//write your code here..
      
    }
}
 
function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();

    let queue = new Queue();
     
   
    for (let i = 1; i <= T; i++) {
        const arr = newInput[i].trim().split(" ").map(Number);
        if (arr[0] == 0)
        { 
            queue.push(arr[1]);
        }
        else if (arr[0] == 1)
        { 
            console.log(queue.front());
        }
        else if (arr[0] == 2)
        { 
            queue.pop();
        }
        
            
    }
 
  
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1
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
  