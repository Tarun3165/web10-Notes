const readline = require("readline");
 
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   // terminal
})

readline1.question("what is your name", function (name) {               // .question() is asyncronous since it waits for the user to answer
    
    readline1.question("what is your country", function (country) {
        console.log(`${name} is from ${country}`);
        readline1.close();      // close is internally emitting  here
    })
})

// for an asyncronous function javascript will directly execute line 15 onwards and skips line 8 untill user answers it . and after register emit will run 
readline1.on("close", function () {    // here readline has inherited from the emit therefore it can use .on  to register

    console.log("Bye Bye!");
})