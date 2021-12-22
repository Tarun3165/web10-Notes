 
class Stack {
  constructor()
  {
      this.Q1 = [];
      this.Q2 = [];
         
  }
  push(value) {
    //write your code here..
    this.Q2.push(value);
    while(!this.isEmpty())
    { let x= this.Q1.shift();
      this.Q2.push(x);
    }
    var temp;
    temp = this.Q2;
    this.Q2 =this.Q1;
    this.Q1=temp;
  }
  pop() {
    //write your code here..
    this.Q1.shift();
  }
  top() {
      //write your code here..
    return this.Q1[0];
  }
  isEmpty() {
    //write your code here..
    return (this.Q1.length==0)
  }
}


function runProgram(input) {

  var newInput = input.split("\n");
  var T = +newInput[0].trim();

  let stack = new Stack();
   
 
  for (let i = 1; i <= T; i++) {
      const arr = newInput[i].trim().split(" ").map(Number);
      if (arr[0] == 0)
      { 
        stack.push(arr[1]);
      }
      else if (arr[0] == 1)
      { 
          console.log(stack.top());
      }
      else if (arr[0] == 2)
      { 
        stack.pop();
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
