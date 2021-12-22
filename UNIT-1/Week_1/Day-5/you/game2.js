
//   ********GAME-1
var a=true && false && !(true) || false
//           false             || false
//result= false
console.log(a);

// **********GAME-2
var a=true || !(false) && (true || false)
//    true ||   true   &&      true
//result=true
console.log(a);

//  *********GAME-3
var a=false || (true && false) || true 
//    false ||      false      ||true    
//result=true
console.log(a);

//   ********GAME-4
var a=true || (false && true || true)
//    true ||       false    || true
//result=true
console.log(a);