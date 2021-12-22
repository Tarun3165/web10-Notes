function x() {
    const a = 7;
   function y() {
        console.log(a);
    }
    a = 100;
    return y
}

var z = x();

z()