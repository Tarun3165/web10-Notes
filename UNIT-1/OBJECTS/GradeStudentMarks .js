// 3 star question

var studentMarks = {
    
    studentsGrade: [
        
        {   grade: "V",
            students: [
                {name: "Nrupul", marks: [10, 20, 30]},
                {name: "Prateek", marks: [20, 30, 40]}
            ]
        },

        {
            grade: "VI",
            students: [
                {name: "Aman", marks: [10, 20, 30]},
                {name: "Albert", marks: [20, 30, 40]}
            ]
        },

        {
            grade: "VII",
            students: [
                {name: "Yogesh", marks: [10, 20, 30]},
                {name: "Sandhya", marks: [20, 30, 40]}
            ]
        }
    ],

    printHighest: function () {
        
        for (let i = 0; i < this.studentsGrade.length;i++)
        {
            var temp = "";
            for (key in this.studentsGrade[i])
            {   if(key=="grade")
                temp += this.studentsGrade[i][key] + "-";

                else
                { 
                    var total1 = 0;
                    for (let k = 0; k < this.studentsGrade[i][key][0].marks.length;k++)
                    {
                        total1 += this.studentsGrade[i][key][0].marks[k];

                    }
                    var total2 = 0;
                    for (let k = 0; k < this.studentsGrade[i][key][1].marks.length;k++)
                    {
                        total2 += this.studentsGrade[i][key][1].marks[k];

                    }
                    if(total1>total2)
                        temp += this.studentsGrade[i][key][0].name + "-" + total1;
                     else
                        temp += this.studentsGrade[i][key][1].name + "-" + total2;  
                } 
            }
            console.log(temp);
        }
    }, 
};

studentMarks.printHighest();