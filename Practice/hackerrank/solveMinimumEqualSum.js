//  try to make sum of listA and listB equal by minimum addition of numbers in place of 0 in the lists

function solveMinimumEqualSum(listA, listB) {
    
    var sum1=0;
    var sum2=0;
    var sum=0;
    var countA=0;
    var countB=0;
    for(let i=0;i<listA.length;i++)
    {   if(listA[i]==0)
       {
         countA++;
        }
         sum1+=listA[i];
            
    }
     for(let i=0;i<listB.length;i++)
    {   
         if(listB[i]==0)
       {
         countB++;
        }
        sum2+=listB[i];
            
    }
    // console.log(sum1,sum2,countA,countB);
    while(sum1!=sum2)
    {
        if (sum1 > sum2)
        {
            var B1 = sum1;
            var B2 = sum2
        }
        else
        {
            var B1 = sum2;
            var B2 = sum1
        }
        for (let i = countA; i <= B1; i++)
        {
            for (let j = countB; j <= B1;j++)
                {
                    if ((B1 + i == B2 + j))
                    {  
                        sum = B1+i;
                        return sum;
                    }
                
                }
            
        } 
    }
}


console.log(solveMinimumEqualSum([2,55, 0,0 , 0], [2, 1, 9, 0]));