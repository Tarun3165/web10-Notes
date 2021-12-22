var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var firstLast_a = function (el)
{
         
        return (el[0] == "a" || el[el.length - 1] == "a");
}

console.log(arr.filter(firstLast_a));