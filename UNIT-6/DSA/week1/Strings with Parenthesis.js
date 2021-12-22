function check(x, y) {
  if (x == "(" && y == ")") return true;
  else if (x == "[" && y == "]") return true;
  else if (x == "{" && y == "}") return true;
  else return false;
}

function checkBalanced(S) {
  let st = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(" || S[i] == "{" || S[i] == "[") st.push(S[i]);
    else if(S[i] == ")" || S[i] == "}" || S[i] == "]"){
      if (st.length == 0) {
        console.log("unbalanced");
        return;
      }

      let x = st.pop();
        if (!check(x, S[i])) {
            console.log("unbalanced");
            return;
      }
    }
    }
    if(st.length==0)
        console.log("balanced");
    else
        console.log("unbalanced");
}

function runProgram(input) {
  var newInput = input.split("\n");
  var S = newInput[0].trim();
  checkBalanced(S);
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
