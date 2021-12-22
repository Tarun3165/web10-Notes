// 3 star question

function firstDuplicate1(a) {
  var arr = [];
  var count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        arr.push([j, a[i]]);
        count++;
        break;
      }
    }
  }

  function sort(a, b) {
    return a - b;
  }

  arr.sort();
  console.log(arr);

  if (count >= 1) return arr[0][1];
  else return -1;
}


function firstDuplicate2(a)
{
  var obj = {};
  var flag = 0;
  var index = a.length - 1;
  
  for (let i = 0; i < a.length;i++)
  {  
    var n = String(a[i]);
  
     
       if (obj[n]) 
       {
         flag = 1;
      
         if (i < index)
          index = i;
        }
      else
       {
         obj[n] = i+1;    // declared key with any value
      }
       
  }
  
  if(flag==0)
    return (-1);
  else
  return (a[index]);
}


var a = [2, 2];
 
// console.log(firstDuplicate1(a));
console.log(firstDuplicate2(a));
