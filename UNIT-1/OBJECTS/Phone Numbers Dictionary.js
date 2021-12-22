var userInfo = {

    name: ["Ajay", "RamDas", "Rohith", "Nihal"],

    "phoneNo": [21345, 32146, 23522, 98743],   // key can be put inside " " because keys are bascically treated as string only
    
    checkUser: function (str) {
        var bool = false;
        for (let i=0; i < this.name.length;i++)
        {
           
            if (this.name[i] == str)
            {
                console.log(this.phoneNo[i]);
                bool = true;
            }
        }
        if (bool == false)
        console.log("No user found");
 
    }
    
};

userInfo.checkUser("Nihal");  // 98743
userInfo.checkUser("Mani");   // no user found
 
console.log(userInfo.name[2]);