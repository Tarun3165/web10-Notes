let nums = [1, 2, 3, 4, 5, 6]
//         ---------=10  y
//         
//         1  3  6  10 15 21
k = 7;

sumSubarr(nums, k);
function sumSubarr(nums, k) {
    let sum = 0;
    let obj = {};
    obj["0"] = 1;
    let count = 0;
  
      for (let i = 0; i < nums.length;i++)
      {
        sum += nums[i];
        if (obj[sum] == undefined)
          obj[sum] = 1;
        else
          obj[sum] += 1;
          if(obj[sum-k])
          count += obj[sum - k];
        }
        console.log('obj:', obj)
    console.log(count)
      
  }
  