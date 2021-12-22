var obj = {
    arr1: [1, 2, 3, 4],   // input array 1
    arr2: [2, 4, 6, 8],    // input array 2

    intersectionArr: function () {      // method to calculate intersection

        var res = "";       // for storing the result

        for (let i = 0; i < this.arr1.length;i++)
        {
            for (let j = 0; j < this.arr2.length;j++)
            {
                if (this.arr1[i] == this.arr2[j])
                {
                    res += this.arr1[i] + " ";   
                }

            }
        }

        console.log(res);     // printing the result
    },
};

obj.intersectionArr();