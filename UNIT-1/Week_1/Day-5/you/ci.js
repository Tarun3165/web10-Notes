/* CI=(Amount - Principle);

Amount= Principle(1+r/100)**Time
*/
var P=100000; // P  is principle amount
var R=8; // R is rate of interest in percentage
var T=5; // T is time of interest in years
var A;  // A is the total amount that you will get after time T

A= P*(1+R/100)**T;
console.log(A);

var CI=A-P; // CI is the compond Interest in time T
console.log(CI);
