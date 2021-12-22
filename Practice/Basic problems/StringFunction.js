//slice
var string = 'The quick brown fox jumps over the lazy dog.';
//The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
console.log(string.slice(31)); // prints(return) the string from index 31 till the last
console.log(string.slice(1,6)); // prints (return) the string from index 1 to index 6-1=5
console.log(string.slice(100)); // prints space if index not found
console.log(string.slice(-6)); // prints the string  from last(counting from -1 to -6)
console.log(string.slice(-9, -3)); //  prints the string from index -9 to index -3-1=-4
 
//splice() 
var arr = [1, 3, 5,7,9,"masai"];
var i=arr.splice(1,2);  // starts removing from index 1 and removes 2 elements. returns deleted elements
console.log(i);  // print deleted elements
console.log(arr.splice(-2, 1) );  // removes from -2 position from last
arr.splice(1);  // starts removing element from index 1 and continue till  end
console.log(arr); 


//sort()
var arr = [1, 22,77, 35, 4444, 9];
console.log("alphabatically",arr.sort());

function compare(a,b)
{
    return a - b;
}

function compare1(a,b)
{
    return b-a;
}
console.log("ascending",arr.sort(compare));
console.log("descending", arr.sort(compare1));

//charAt()
console.log("tarun".charAt(2));  // gives the character at particular index
console.log("tarun".charAt(-2));  //  gives space if negative number is passed
console.log("tarun".charAt(8));  //  gives space if char is not found at the index is passed

// charCodeAt() 
console.log("a".charCodeAt());  //Returns the Ascii value of the character at the specified location.
console.log("masai school".charCodeAt(1)); // prints the ascii value at the given index in the string.
console.log("masai school".charCodeAt());  // if no index is given it takes the 0th index.
console.log("masai school".charCodeAt(32));   // returns NaN if character is not found at the index.
 
// String.fromCharCode()
console.log(String.fromCharCode(98));  // gives the character at the given Ascii code
console.log(String.fromCharCode(122));  // prints z

 // includes()
var str1 = "masai";
console.log(str1.includes("as"));    // returns true or false depending  on whether a string is present or not (substring or not)
console.log(str1.includes(""));    // empty string is always a substring
console.log(str1.includes("si"));    // returns false  

// indexof()
console.log("masai".indexOf("a"));     //Returns the position of the first occurrence of a substring.

console.log("masai".indexOf("z"));  // returns -1 if substring not found

var text = "My name is Abhishek and my brother's name is Abhinav";
console.log(text.indexOf("name","and","my"));   // returns the index of "name"  only

// replace() and replaceAll()
console.log("masai".replace("a", "@"));  //Replaces the string with another string. replace only the first occurances of the string
console.log("masai School".replace("masai", "m@s@i"));
 
// console.log("masai".replaceAll("a", "@"));   // replaceAll do not works in this node version

// substr()
console.log("aeioua".substr(1,4));  //Gets a substring beginning at the specified location and having the specified length. 
console.log("masai school".substr(-4,4)); //  prints the string from index -4 upto length 4
console.log("masai school".substr(24, 4));  // prints space

// tolowercase()
console.log("MASai schOOL".toLowerCase());  //Converts all the alphabetic characters in a string to lowercase.

// toUpperCase() - converts the string to uppercase
console.log("MaSai schOOL".toUpperCase());

 // trim()
 console.log("  masai     School   ".trim());   //  Removes the leading and trailing white space and line terminator characters from a string.

 //push() , pop(),shift(),unshift()
var arr1 = [];
arr1.push("Masai", "School");  //Appends new elements to the end of an array 
var a = arr1.push("tarun"); // returns the new length of the array.
console.log(a);
console.log(arr1);
 
var b=arr1.pop();   // removes an element from last  and returns the removed element
console.log(b); // print the element removed
arr1.pop("srgrg");  // here also it removes the last element
arr1.pop(); 
console.log(arr1);
console.log(arr1.pop());  // prints undefined if no element is there to remove

arr1.push("Masai", "School");
var c = arr1.shift()
console.log(c);
console.log(arr1);

var d = arr1.unshift("aman");  // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr1);
console.log(d);

// join()
var arr = ["tarun", "singh", "rawat"];
var arr3=arr.join("-");  // Adds all the elements of an array into a string, separated by the specified separator string.
var arr2 = arr.join(); // string seperated by coma
console.log(arr3);
console.log(arr2);

// indexOF

console.log("MasaiSchool".indexOf("Sch"));  // built in function

console.log(strstr("MasaSciSchool", "Sch"));   // without built in function

function strstr(s, x) {
    var flag=0;
   
    for (let i = 0; i < s.length;i++)
    {   
        if (s[i] == x[0])
        {
            if (x.length == 1)
            {    flag = 1; 
                return i;
            }
            
            else  
                for (let j = 1; j < x.length; j++) {
                    if (s[i + j] == x[j])
                        flag = 1;
                    else
                        flag = 0;
                }
            if (flag == 1)
                return i;
            
        } 
    }

    if (flag == 0) 
    return -1;
}






 