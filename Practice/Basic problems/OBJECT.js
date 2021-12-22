// objects are non primitive datatypes. arrays , null and functions are eg of objects

var objectName = {
    firstName: "Tarun",    // key value 
    "lastName": "Rawat",   // keys are string 
    birthYear: 1997,   // properties of object
    male: true,
    salary: null,
    jobType:undefined,
    calculateAge: function (presentYear)  //  function declaration
    {
        return presentYear - this.birthYear  // 'this' to call a key in an object
    },
  
}; 

// var name1 = "firstName"; 
// var age = "calculateAge";

// console.log(objectName.firstName + " " + objectName["lastName"]); // to call a key value outside the object use dot notation or square bracket notation as shown

// console.log(objectName[name1]);  // this is the way of calling a variable which contains a value as a key in objectName. 

// console.log(objectName.calculateAge(2021)); // caling function from outside
// console.log(objectName[age](2021));  // can also call function like this

// objectName.jobType = "student";  // modifing content
// objectName.hobby = "badminton";  // adding more content
// delete(objectName.birthYear);  // delete a content

// console.log(objectName);   
// console.log(Object.keys(objectName));       // will give all key names in array
// console.log(Object.values(objectName));   // gives all key values  in array

// var arr = Object.values(objectName);   // creating array of object values
// console.log(arr[0]);
 
 
//  objectName = null;   
//   console.log(objectName);  // ----------- this will empty an object

// loop in object
for(k in objectName)
{  if(k!="salary")   // not print salary
    console.log(objectName[k]);
}

// // creating nested objects and arrays in an object from outside
// objectName.object2 = {};
// objectName.object2.phoneNumber = []; 
// objectName.object2.phoneNumber[0] =33435 ;
// objectName.object2.phoneNumber[1] = [] ;
// objectName.object2.phoneNumber[1][0] =567234 ;
// objectName.object2.phoneNumber[1][1] =776423 ;
 
// // console.log(objectName.object2.phoneNumber);

let obj={
    1: "value",
}
// console.log(obj.1);     //error cannot have a variable name start with a numerical

console.log(obj[1]);  //valid

//sorting object
var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
console.log(keysSorted);     // [ 'bar', 'me', 'you', 'foo' ] //sorting keys the bases of values

console.log(Object.values(list).sort((a,b)=>a-b));//sorting values 
console.log(Object.keys(list).sort());   //sorting keys
