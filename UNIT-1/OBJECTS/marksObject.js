var marks = {
    data: {
        name: ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],
        marks: [10, 20, 30, 5, 15],
    },

    average: function ()
    {
        var sum = 0;
        var len = this.data.marks.length;
        for (let i = 0; i < len;i++)
        {
           sum+= this.data.marks[i];

        }
        return sum / len;
    },

    minimum: function ()
    {    var len = this.data.marks.length;
        var minMarks = this.data.marks[0];
        var minName = "";
        for (let i = 1; i < len; i++)
        {    if(this.data.marks[i]<minMarks)
            {
              minMarks = this.data.marks[i];
              minName = this.data.name[i];
            }

        }
        return minName + "-->" + minMarks;
        
    },

    maximum: function ()
    {   var len = this.data.marks.length;
        var maxMarks = this.data.marks[0];
        var maxName = "";
        for (let i = 1; i < len; i++)
        {    if(this.data.marks[i]>maxMarks)
            {
              maxMarks = this.data.marks[i];
              maxName = this.data.name[i];
            }

        }
        return maxName + "-->" + maxMarks;
        
    }
    
};

console.log(marks.average());
console.log(marks.minimum());
console.log(marks.maximum());
   