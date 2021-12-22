// For s = "aeu", the output should be
// classifyStrings(s) = "bad";

// For s = "a?u", the output should be
// classifyStrings(s) = "mixed";

// For s = "aba", the output should be
// classifyStrings(s) = "good".

function classifyStrings(s) {
     
    var countC = 0;
    var countQ = 0;
    var flag = 0;
    
    
    for (let i = 0; i < s.length - 2; i++) {
          
        if ((s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") && (s[i + 1] == "a" || s[i + 1] == "e" || s[i + 1] == "i" || s[i + 1] == "o" || s[i + 1] == "u") && (s[i + 2] == "a" || s[i + 2] == "e" || s[i + 2] == "i" || s[i + 2] == "o" || s[i + 2] == "u")) {
            // console.log("bad");
            return "bad";
        }
        else if (((s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "?") && (s[i + 1] == "a" || s[i + 1] == "e" || s[i + 1] == "i" || s[i + 1] == "o" || s[i + 1] == "u" || s[i + 1] == "?") && s[i + 2] == "?") || ((s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "?") && s[i + 1] == "?" && (s[i + 2] == "a" || s[i + 2] == "e" || s[i + 2] == "i" || s[i + 2] == "o" || s[i + 2] == "u" || s[i + 2] == "?")) || (s[i] == "?" && (s[i + 1] == "a" || s[i + 1] == "e" || s[i + 1] == "i" || s[i + 1] == "o" || s[i + 1] == "u" || s[i + 1] == "?") && (s[i + 2] == "a" || s[i + 2] == "e" || s[i + 2] == "i" || s[i + 2] == "o" || s[i + 2] == "u" || s[i + 2] == "?"))) {
            flag = 1;
            
        }
        else {
            if (i <= s.length - 5 && s.length >= 5)
            {
                for (let j = i; j < s.length;j++)
                {  
                    if (s[j] != "a" && s[j] != "e" && s[j] != "i" && s[j] != "o" && s[j] != "u")
                    { 
                        if (s[j] == "?")
                        {
                            countQ++;
                            countQ += countC;
                            countC = 0;
                            
                        }
                        else
                        countC++; 
                        // console.log(countQ,s[j]);
                        
                        if (countC >= 5)
                        {
                            return "bad";
                        }
                        else if(countC+countQ>=5)
                        {
                            flag = 1; 
                        }
                    }
                    else
                    {
                        countC = 0;
                        countQ = 0;
                        break;
                    }
                }
                
            }
        }
    }
    if (flag == 1)
        return "mixed"
    // console.log("mixed");
    else
        return "good";
    // console.log("good");
    
} 

console.log(classifyStrings("qwr?l"));