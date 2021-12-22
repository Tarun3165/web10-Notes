var n = 97;
var flag = 0;
for (let i = 2; i * i <= n; i++) {
  if (n % i == 0) {
    flag++;
  }
}

if (flag >= 1) console.log("Not Prime");
else console.log("Prime");
