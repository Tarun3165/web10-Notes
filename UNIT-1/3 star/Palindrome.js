// 3 star question

var checkPalindrome1 = function (N) {
  var original = N;
  var rem = 0;
  var rev = 0;

  while (N) {
    rem = N % 10;
    rev = rev * 10 + rem;
    N = Math.floor(N / 10);
  }
 
  if (rev == original) console.log("Yes");
  else console.log("No");
}

var checkPalindrome2 = function (str)
{
  var temp= "";
  for (let i = str.length-1; i >=0;i--)
  {
    temp += str[i];

  }
   if(temp==str)
   console.log("Yes");
  else
     console.log("no");
}
  
var checkPalindrome3 = function (str) {
  var first = 0;
  var last = str.length - 1;
  var ans = true;
  while(first<last)
  {
    if (str[first] != str[last])
    {  ans = false;
      break;
    }
    else
    {
      first++;
      last--;
    }
  }

  if(ans==true)
  console.log("Yes");
  else
  console.log("No");
}

var checkPalindrome4 = function (arr) {  // using 2 variable in a single loop
  var count = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    if (arr[i] == arr[j])
      count++;
  }
 
  if (count == arr.length)
    console.log("Yes");
  else
    console.log("No");
  
}

function runProgram(input) {
  // var N = Number(input);   // only for numbers  (use checkpalindrome1)

  var N = input; // both for number and string
   
   checkPalindrome4(N);   
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`naman`);  // `12321` // 12321
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
