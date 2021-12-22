var s = "javascriptloops";
var arr = s.split("");  // creates array from s by spliting it on the basis of elements in the string
 

for (let j = 0; j < arr.length; j++)
 {
  if (
    arr[j] == "a" ||
    arr[j] == "e" ||
    arr[j] == "i" ||
    arr[j] == "o" ||
    arr[j] == "u"
  ) 
  {
    console.log(arr[j]);
  }
}

for (let j = 0; j < arr.length; j++)
 {
  if (
    arr[j] == "a" ||
    arr[j] == "e" ||
    arr[j] == "i" ||
    arr[j] == "o" ||
    arr[j] == "u"
  ) 
  {
    continue;
  }
  else
  console.log(arr[j]);
}
 
 