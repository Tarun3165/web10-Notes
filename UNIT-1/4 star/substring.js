 

let arr = [1, 2, 3, 4]
var countarr = 0;
for (let i = 0; i < arr.length; i++){
    for(let j =i; j<arr.length; j++){
        var temp = "";
        for (let k = i; k<=j; k++){
            temp += arr[k];
        }
       countarr++;
        console.log(temp);
    }
}
console.log(countarr);


let string = "abcd";
var countSubstring = 0;
for (let i = 0; i < string.length; i++){
    for(let j =i; j<string.length; j++){
        var temp = "";
        for (let k = i; k<=j; k++){
            temp += string[k];
        }
        countSubstring++;
        console.log(temp);
    }
}
console.log(countSubstring);