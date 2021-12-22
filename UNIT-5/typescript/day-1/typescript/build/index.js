let age = 24;
//or
// let age: number;
// a = 1;
let isFetching = true;
isFetching = false;
isFetching = undefined;
isFetching = null;
let Name = "tarun";
let numberArr = [1, 2, 3, 4];
numberArr.push(6);
console.log(numberArr);
//or
// let numberArr: number[] = [2, 3, 4];
// numberArr.push(5);
// console.log(numberArr);
let stringArr = ["a", "b"];
let tuple = ["s", false];
var users;
(function (users) {
    users[users["User"] = 0] = "User";
    users[users["SuperUser"] = 1] = "SuperUser";
    users[users["Admin"] = 2] = "Admin";
    users[users["SuperAdmin"] = 3] = "SuperAdmin";
})(users || (users = {}));
let i = users.Admin;
let g = {
    a: ["1"],
    b: ["2"],
    c: ["4"]
};
console.log(g.d);
console.log(users.Admin);
function fun(x, y) {
    return x * y;
}
function f(x, y) {
    let result = x / y;
}
function NameFun(Name) {
    console.log(Name);
}
