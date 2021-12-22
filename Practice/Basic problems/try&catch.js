try {
  console.log(x * 5); //using try and catch function can help detect the errors
} catch (e) {
  console.log(e.message);
}



// 1. for errors we want to throw on our own
try {
  throwString();
} catch (e) {
  console.log(e.message); // e.message generally prints error given by compiler ,if you want to throw your own error then Throw new error function is used
}
console.log("The program continued executing!");

function throwString() {
  throw new Error("some exception"); //throw new Error (costom error) is a key word which we can use to throw our own error
}



// or 
// 2. for errors we want to throw on our own
// try {
//   throwString();
// } catch (e) {
//   console.log(e); // using e u could directly throw your exception using throw
// }
 
// function throwString() {
//   throw "some other exception";
// }
