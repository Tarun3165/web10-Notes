// 3 star question

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImage(a);


function rotateImage(a) {
 
  var arr = [];
  
   
  for (let i = 0; i < a.length; i++) {
    arr[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      arr[i].push(a[a.length-j-1][i]); 
    }

  }
  console.log(arr);
}