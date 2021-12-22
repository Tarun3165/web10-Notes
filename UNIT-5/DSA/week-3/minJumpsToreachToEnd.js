let arr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
let res = [];
res[arr.length - 1] = 0;

for (let i = arr.length - 2; i >= 0;i--)
{
    let min = Math.min(); // infinity
    let steps = arr[i];
    if (arr[i] == 0)
    res[i] = -1;
    for (let j = 1; j <= steps && i+j<arr.length;j++)
    {
        if(res[i+j]!=-1 && res[i+j]<min)
        {
            min = res[i + j];
        }
    }
    if (min == Math.min())
        res[i] = -1;
    else
        res[i] = min + 1;
}

console.log(res[0]);

