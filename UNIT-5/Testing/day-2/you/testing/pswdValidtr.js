function passwordValidator(S) {
    if (S.length < 6)
        return false;
    let countNum = 0;
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countSymbol = 0;
    for (let i = 0; i < S.length;i++)
    {
        if (S[i]>="0" && S[i]<="9")
            countNum++;
        
        else if (S[i].charCodeAt() <= 90 && S[i].charCodeAt() >= 65)
            countUpperCase++;
        
        else if (S[i].charCodeAt() <= 122 && S[i].charCodeAt() >= 90)
            countLowerCase++;
        else
            countSymbol++;
    }
    if (countLowerCase >= 1 && countNum >= 1 && countSymbol >= 1 && countUpperCase >= 1)
        return true;
    else
        return false;
}

module.exports = passwordValidator;
