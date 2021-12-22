// *********** Closure************

// Q-1 print 0 to 4 each after 1 s


for (var i = 0; i < 5; i++)    // var has functional scope
{
    setTimeout(() => {
        console.log("hello",i);  // give the reference of i , which will get updated to 6 
    }, i*1000);  // here i value will be from 0 to 4
}

for (let i = 0; i < 5; i++)    // let has block scope
{
    setTimeout(() => {
        console.log("hello",i);  // each time it will give a new copy of i that will have different refrences
    }, i*1000);  // here i value will be from 0 to 4
}

// using var will work when used closures

for (var i = 0; i < 5; i++)    // var has functional scope
{
    function close(x) {
          
      setTimeout(() => {
          console.log("hello",x);  // each time it will give a new copy of x that will have different refrences
      }, x*1000);  // here x value will be from 0 to 4
    }

    close(i)
}

// Q-2  Output ?

function x() {
    var a = 7;
   function y() {
        console.log(a);
    }
    a = 100;
    return y
}

var z = x();

z()