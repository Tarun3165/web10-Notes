let s = new Set;
let arr = [1, 3, 4, 2, 4, 5, 5];


// for (let i = 0; i < arr.length;i++)
// {
//     if (s.has(arr[i]))    //checks whether set has the value already
//     {
//        console.log("repeated",arr[i]);    
//     }
//     else {
//         s.add(arr[i]);    //to add a value inside a set
//     }
// }
 
arr.forEach(item => s.add(item))    // to add array items inside a set

// s.delete(2);   //delete a particular value inside a set

// s.clear()   //used to empty a set

s.forEach((e) => {    //to iterate over a set
    console.log(e);
})




console.log(s);