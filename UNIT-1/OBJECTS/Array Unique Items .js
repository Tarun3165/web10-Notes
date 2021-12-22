var object = {
    
};
var arr = ["a", "b", "c", "d", "a", "c"];

for (let i = 0; i < arr.length;i++)
{
    if (object[arr[i]] == undefined)
        object[arr[i]] = true;   // unique elements
    else
        object[arr[i]] = false;  // duplicate elements
}
console.log(object);

var newarr = [];
 for(k in object)
 {
     if (object[k] == true)
         newarr.push(k)
         
}
 console.log(newarr);
     
  