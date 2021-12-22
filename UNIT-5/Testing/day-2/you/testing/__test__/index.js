function matrixSum(matrix,row,col) {
    
    let sum = 0;
    for (let i = 0; i < row;i++)
    {
        for (let j = 0; j < col;j++)
        {
            sum += matrix[i][j];
        }
    }
    return sum;
}

module.exports = matrixSum;