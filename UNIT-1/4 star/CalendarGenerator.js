                                         // ***************  calander 2020 *****************//

// given , on 1 jan 2020 = wed


var day = "wed";
var month = "jan";
var weekArr = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

var monthArr = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]

var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var date = 1;
var dateLimit = 0;



function weeks() {   
 
    for (let j = 0; j < monthArr.length; j++) {
        if (month == monthArr[j]) {
            dateLimit = monthDays[j];
            break;

        }
    } 
  
        for (k in calander[month]) {
           
            if (k == day) {
                    
                while (date <= dateLimit)
                { 
                   calander[month][day].push(date);
                   date++;
             
                
                   for (let i = 0; i < weekArr.length; i++) {
                 
                    if (weekArr[i] == day) {
                        day = weekArr[(i + 1) % 7];
                        break;
                    }

                    if (day == "sun")
                    {
                        weeks();
                        }
 
                    
                    }
                }
                
            }
    }
    
    if (date > dateLimit)
    {
        for (let j = 0; j < monthArr.length; j++) {
            if (month == monthArr[j]) {
                month = monthArr[j+1];
                break; 
            }
        }
        
        date = 1;
    }
        
}
    
     
// skeleton of calander

var calander = {

};
calander.jan = {};
calander.feb = {};
calander.mar = {};
calander.apr = {};
calander.may = {};
calander.june ={};
calander.july ={};
calander.aug = {};
calander.sep = {};
calander.oct = {};
calander.nov = {};
calander.dec = {};

for(key in calander)
{
    calander[key] = {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thur:[],
        fri: [],
        sat: [],
    };
}

 
       
    
for(key in calander)    // loop to traverse all months
{
    if(key==month)
    { 
        weeks();   // function to traverse all the weeks in a month

    }
}

 
console.log(calander);  
 
console.log("feb-->fri ",calander.feb.fri);  