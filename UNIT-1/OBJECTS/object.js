var data = {
    name:"tarun",
    marks: [],
    addNewMarks: function (sub, mks) {
        this.marks.push({ subject: sub ,marks:mks})
     },
     lowest: function () {
        var marksData = this.marks;
        marksData.sort(function (A, B) {
            return A.marks  - B.marks ;
        })
        return marksData[0];
          },
    
    highest: function () {
        var marksData = this.marks;
        marksData.sort(function (A, B) {
            return B.marks - A.marks;
        })
        return marksData[0];
          },
    
    
    total: function () {
        var sum = this.marks.reduce(function (ac,el)
        {
            return ac + el.marks; 
        }, 0)
        return sum;
     }
    
};

data.addNewMarks("math", 95);
data.addNewMarks("hindi", 85);
data.addNewMarks("english", 72);
data.addNewMarks("physics", 84);
console.log(data.marks);
console.log(data.lowest()); 
console.log(data.highest());
console.log(data.total());