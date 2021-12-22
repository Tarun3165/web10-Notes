var data={};

var names = ["A", "B", "C", "D", "E"];

var marks = [32, 23, 42, 45, 12];

for (let i = 0; i < names.length;i++)
{
    data[names[i]] = marks[i];    // key value pair
}

// printing key and and its value
console.log(data); 

// printing key and and its value by loop through object

var temp = "";
for(key in data)
{
    console.log(key+"-->"+data[key]);
    temp += key + "-->" + data[key] + " ";
}

// printing through temp variable
console.log(temp);

//  calling directly keys and values

console.log(Object.keys(data));
console.log(Object.values(data));