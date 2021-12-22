var s = "HackerRank";

console.log(s.indexOf("a") + " " + s.indexOf("n", "a")  ); // takes the one which comes earlier

console.log(s.indexOf("an") + " " + s.indexOf("x") + " " + s.indexOf("")); // If the argument isn't found in the string or no argument was passed to the function, it returns -1.

var s = "HackerRank";
console.log(s.match("ack")); // match() will Match a regular expression passed as an argument against the calling string. If a match is found, it returns an object with three properties: the matched substring, the index it was found at, and the input (i.e., the initial string);
console.log(s.match("kra"));

var s = "abcde"; 
var firstLetter = s[0]; // to find a patrticular element in the string at ith position use s[i] or s.charAt(i)
var secondLetter = s.charAt(1);
console.log(firstLetter);
console.log(secondLetter);

switch (firstLetter) {
  case "a":
  case "b":
  case "c":
    console.log("A"); // if different cases have same outputs
    break;
  case "d":
  case "e":
    console.log("B");
}

var nums = [2, 23, 36, 226, 5]; 
var arr = nums; // copy an array

nums.sort(); // sort() function is used in javascript to directly sort an array in ascending order but just like it is in dictionary i.e here 226 < 3
console.log("acending order  ", nums);
console.log(arr);   // if an array is copied then changes done in one is reflected back to the other one also.

// if u want the other arr to not change , use 
  let arr1=[1,2,3,4]
 let temp = arr1;    // copied arr1
 
 temp=temp.concat("f")   // using concat we can prevent mutation to  original arr1
 console.log(temp);  
 temp = [...temp, "g"]   // add to the last of copied arr1 and does not change the original arr1
 
 temp = [ "h",...temp]  // add to the starting of the arr1
 console.log(temp);
 
console.log(arr1);     // original arr1 is not affected

// var abcd = ["b", "bbd", "a", "ac"];
//  abcd.sort();
//  console.log("acending order ",abcd);


// reverse ()
// to sort an array in decending order first sort in acending order then reverse the array
// nums.reverse();     // reverse function works by swaping elements left and right.
 
var l = 0; r = nums.length - 1
var temp;
  while (l < r)
  {
    temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++; r--;
  }
  
console.log("decending order ", nums);


// to sort an array  numerically in ascending order use sort(compareNumbers)
console.log("original arr-",arr);
arr.sort(compareNumbers);
 
function compareNumbers(a, b)  // this function is used to arrange array in ascending order.
{
  return a - b;
}
 console.log(" arr in ascending -",arr);


// program to print second largest
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] < nums[j]) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else continue;
  }
} 
console.log(nums);
for (let i = 0; i < nums.length; i++) {
  if (nums[0] > nums[i]) {
    var secondLargest = nums[i];
    break;
  } else continue;
}
console.log("secondlargest", secondLargest);

//push() and pop()
var arr1 = [];
 arr1.push("Masai", "School");  //Appends new elements to the end of an array 
 var a = arr1.push("tarun"); // returns the new length of the array.
 console.log(arr1);
 console.log(a);
  
var b=arr1.pop();   // removes an element from last  and returns the removed element
console.log(b); // print the element removed
arr1.pop("srgrg");  // here also it removes the last element
arr1.pop(); 
console.log(arr1);
console.log(arr1.pop());  // prints undefined if no element is there to remove

arr1.push("Masai", "School");
var c = arr1.shift()  // returns the element removed
console.log(c);
console.log(arr1);

var d = arr1.unshift("aman");  // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr1);
console.log(d);


var arr=[1,2,3]
var arr1=[1,2,3]
console.log(arr == arr1);    // arrays and objects cannot be compared like this , it compares the adresses in memory which is different so false;

var stack = [1,2,3];
var top = stack.length - 1;   
stack.push(2,5)
console.log(stack[top]); //3
console.log(stack[stack.length - 1]); //5


// to remove an element from an arr  (arr element have to be different)
function removeArrElement(n, arr) {
  var flag = 0;
  for (let i = 0; i < arr.length;i++)
  {
    if(flag==1)
    {
      arr[i-1] = arr[i];
    }
    if (arr[i] == n)
      flag = 1;
  }
  arr.pop();
  // console.log(arr);
  return arr;
}
 
// to add an element in an arr at any index
function addArrElement(n, index, arr)
{
  if (index == arr.length) 
  {
    arr.push(n);
    console.log(arr);
    return arr;
  }
  else
    arr.push(arr[arr.length - 1])
  
  for (let i = arr.length - 2; i >= 0;i--)
  {
    if(i!=index)
    {
      arr[i] = arr[i - 1]; 
    }

     else
    {
      arr[i] = n;
     console.log(arr);

      return arr;
    }

  }
  console.log(arr);

 }

 // to fill an array with a particular number
let arr = new Array(5).fill(0);
 console.log('arr:', arr)


 // inbuild sort
 let arr = [12, 122, 5, 8, 90, 35];
 arr.sort();
 
 // it converts the arr values into strings like "12" "122" in string it checks according to their ascii value so 122<5
 console.log(arr);
 

//inbuild sort compare func

 let arr = [12, 34, 5, 8, 90, 35];
arr.sort(function compareFn(a, b){
  return b - a;
});

//return >0 B will come first 
//return ==0 do nothing
//return <0 A  will come first

