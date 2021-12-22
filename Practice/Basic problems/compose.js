function double(x) {
    return x*2;
}
function divideBytwo(x) {
    return x/2;
}

function square(x) {
    return x * x;
}

const compose = (...fns) => (init) => {
    return fns.reduce((acc,curr)=>curr(acc),init)
}
const doubledSquared=compose(double,square,divideBytwo)

console.log(doubledSquared(5));