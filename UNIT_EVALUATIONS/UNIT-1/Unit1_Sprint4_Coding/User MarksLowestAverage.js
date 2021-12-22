
var userMarks = {
  
    nameMarks: {        // object containing name and marks details

        Nrupul: [30, 40, 50],
        Prateek: [20, 10, 10],
        Yogesh: [40, 20, 20],
        Aman: [10, 20, 40],
        Albert: [25, 15, 25],
    },
 
 
    printLeastAverage: function ()      // method to print least avg 
    {
        var leastAvg = 300;     // taken 300 for reference
        var leastKey = "";
        for(key in userMarks.nameMarks)
        { 
            var avg = 0;
            var sum = 0;
            marksArr = userMarks.nameMarks[key];  //  arr of marks for particaular key
            var len = marksArr.length;   // length of marksArr

            for (let i = 0; i < len;i++)
            {
                    sum += marksArr[i];
            }
             
            avg = Math.floor(sum / len);   // calculating average and approximate it
           
            if (avg < leastAvg)      // condition check for least average
            {
                leastAvg = avg;
                leastKey = key;
            }
                
           
        }
        console.log(leastKey,leastAvg);    // printing name and average
         
    }, 
    
};

userMarks.printLeastAverage();

