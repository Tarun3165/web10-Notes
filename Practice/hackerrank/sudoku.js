var grid =  
[[".",".",".",".","4",".","9",".","."], 
 [".",".","2","1",".",".","3",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","3"], 
 [".",".",".","2",".",".",".",".","."], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","6","1",".",".",".","."], 
 [".",".","9",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".","9","."]]

sudoku2(grid);


function sudoku2(grid) {
   
    var str = "123456789";
  var flag1=  rowCheck(grid,str);

    var flag2= columnCheck(grid,str);
    
    
    if (flag1 == 0||flag2==0)
    console.log(false); 
    else
    console.log(true); 
}
 
function rowCheck(grid ,str) { 
    
    for (let i = 0; i < grid.length; i++) {  
        var temp = "";
        for (let j = 0; j < grid[i].length; j++) { 
            temp += grid[i][j];
        }
  
        if (temp.split("").sort().join("") != str)
        {   
            return 0; 
        } 
    }
   return 1;
}

function columnCheck(grid,str) {
    
    for (let i = 0; i < grid.length; i++) {
       
        var temp = "";
        for (let j = 0; j < grid[i].length; j++) {
            temp += grid[j][i]; 
        } 
        if (temp.split("").sort().join("") != str)
        {  
            return 0; 
        } 
    }
   return 1; 
}

function blockCheck(grid,str) {
    
    for (let i = 0; i < grid.length; i++) {
       
        var temp = "";
        for (let j = 0; j < grid[i].length; j++) {
            temp += grid[j][i]; 
        } 
        if (temp.split("").sort().join("") != str)
        {  
            return 0; 
        } 
    }
   return 1; 
}

var sort=function(a,b)
{
    return a - b;
}
