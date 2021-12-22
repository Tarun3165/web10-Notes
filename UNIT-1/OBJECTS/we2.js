var items = ["A", "V", "X", "A","D", "W", "X","A"];

var data = {};

//  to print unique elemnets of items
// for (let i = 0; i < items.length ; i++)   
// {
//     data[items[i]] = true;   // will check multiple occurances********
//     // console.log(data[items[i]]);     // gives values of data
 
// }
// console.log(Object.keys(data));
// console.log(Object.values(data));


// to check the occurances of elements in items
for (let i = 0; i < items.length; i++) {
    if (data[items[i]] == undefined)
        data[items[i]] = 1;   // this will check multiple occurances
    else {
        var prev = data[items[i]];
        data[items[i]] = prev + 1;
        
    
    }
}


for(key in data)
{
    console.log(key+"->"+data[key]);
}