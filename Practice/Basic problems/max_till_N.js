var arr = [2, -3, -6, 4, 9, 0]
var max = arr[0];
var N = 4;
for (let i = 1; i <N;i++)
{
    if (arr[i] > max)
        max = arr[i];
    }
    console.log(max);