
function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[0].trim();
    var k = +newInput[1].trim();
    
    let temp = "";
    let ascii;
    let cal;
    let mod;
    for (let i = 0; i < S.length;i++)
    {
        ascii = S[i].charCodeAt();
        
        if (65 <= ascii && ascii <= 90) {
            mod = k % 26;
            if (ascii + mod > 90)
            {
                cal = ascii + mod - 90 + 65 - 1;
                temp += String.fromCharCode(cal);
            }
            else
                temp+=String.fromCharCode(ascii + mod)
        }

        else if (97 <= ascii && ascii <= 122) {
            mod = k % 26;
            if (ascii + mod > 122)
            {
                cal = ascii + mod - 122 + 97 - 1;
                temp += String.fromCharCode(cal);
            }
            else
                temp+=String.fromCharCode(ascii + mod)
            
        }
        else if (48 <= ascii && ascii <= 57) {
            mod = k % 10;
            if (ascii + mod > 57)
            {
                cal = ascii + mod - 57 + 48 - 1;
                temp += String.fromCharCode(cal);
            }
            else
                temp+=String.fromCharCode(ascii + mod)
            
        }
        else
            temp += S[i];
    }
    console.log(temp);
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`a
      100
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