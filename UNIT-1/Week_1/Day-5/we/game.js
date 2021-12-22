//     ******game 1 *********

var a=(true && false && !(true) || false);
//         false  &&  false   ||   false
//result=false
console.log(a);

//     *****game 2*********
var a=(true || !(false) && (true || false));
//          true        &&        true
//result=true
console.log(a);

//   ********game 3**********

var a=(false || (true && false) || true );
//    false  ||       false      || true
//result= true
console.log(a);

//  ****** game4*********
var a=(true || (false && true || true));
//      true ||        false  ||  true
// result= true
console.log(a);