var data = {
    userData: [],
    addUserData: function (n, a) {
        return this.userData.push({name:n,age:a})
    },
    
};

var greaterThen30= function(el)
{
    return (el.age > 30);
} 


data.addUserData("Nrupul",32);
data.addUserData("Prateek",30);
data.addUserData("Aman", 26);
data.addUserData("Ankur", 34);
data.addUserData("Albert",28);
data.addUserData("Yogesh",44);
data.addUserData("Sidharth", 22);

console.log(data);
var arr = data.userData.filter(greaterThen30);
console.log(arr);
for (let i = 0; i < arr.length;i++)
{
    console.log(arr[i].name);
}




// var greaterThen = function () {
//   for (let i = 0; i < data.userData.length; i++) {
//     for (k in data.userData[i]) {
//         if (data.userData[i][k] > 30)
//             console.log(data.userData[i].name);
//     }
//   }
// }
            


// console.log(greaterThen());