function GenerateParentheses(temp, O, C, N)
{
    if(temp.length==2*N)
    {
        console.log(temp);
    }
    if (O < N) {
        GenerateParentheses(temp+"(", O + 1, C, N); 
    }
    if(C<O)
    {
        GenerateParentheses(temp+")", O , C+1, N); 
    }

}

function fact(N)
{
    if (N == 1)
        return N;
    return N * fact(N - 1);
}

function catalanNumber(N)
{
    var CatalanNumber = Math.floor(fact(2 * N) / (fact(N) * fact(N + 1)));

    console.log(CatalanNumber);
}



function runProgram(input) {
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T; i++) {
        var N = +newInput[i].trim(); 
        catalanNumber(N);
        GenerateParentheses("", 0, 0, N);
         

    }

}
if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    3
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
