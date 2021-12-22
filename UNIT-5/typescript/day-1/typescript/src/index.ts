
let age: number = 24;
//or
// let age: number;
// a = 1;

let isFetching: boolean = true;
isFetching = false;
isFetching = undefined;
isFetching = null;



let Name:string="tarun";


let numberArr:Array<number> =[1,2,3,4]

numberArr.push(6)
console.log(numberArr);
   //or
// let numberArr: number[] = [2, 3, 4];
// numberArr.push(5);
// console.log(numberArr);

let stringArr:string[]=["a","b"]

let tuple: [string, boolean] = ["s", false]

enum users{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}
let i = users.Admin;

let g:Record <string,string[]> =  {
    a: ["1"],
    b: ["2"],
    c:["4"]
}

console.log(g.d);
console.log(users.Admin);

function fun(x:number,y:number) {  
    return x*y;
}
function f(x:number,y:number):void {  
    let result = x / y;
    
}
function NameFun(Name:string):void {  
    console.log(Name);
    
}



