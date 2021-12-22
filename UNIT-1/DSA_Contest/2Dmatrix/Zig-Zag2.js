//Traverse the 2D array from  from up to down and right to left

var matrix = [
    [4, 7, 1, 1, 7,8],
    [8, 9, 9, 6, 1,2],
    [6, 4, 9, 5, 1,1],
    [7, 7, 4, 7, 7,2],
    [8, 6, 2, 5, 5,8],
    [4, 9, 1, 0, 7,1],
];

traverseZigZag(matrix);

function traverseZigZag(matrix)     
{
    var n = matrix.length;    // no. of rows 
    var m = matrix[0].length;  // no. of columns
    var res = "";
     for(let j = m-1; j>=0; j--)
    {
        if (j % 2 == 0) 
        {   for(let i = n-1; i >=0;i--)
            {
                res += matrix[i][j]+" ";
                            
            }
        }
             
        else
        {   for(let i = 0; i <n;i++)
            {
                res += matrix[i][j]+" ";
                            
            }
        }
    }
    console.log(res);  
}


 