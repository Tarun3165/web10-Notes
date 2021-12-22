var n = 8;
for (let i = 1; i <= n; i++)
  {  var temp="";
    for(let j=1;j<=n-i;j++)
  { 
    temp+=" ";
  }
 

  for (let k = 1; k <= i;k++)
  {
    temp += "* ";
  }
  console.log(temp);
   
  }