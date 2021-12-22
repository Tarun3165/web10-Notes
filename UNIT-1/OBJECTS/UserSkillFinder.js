// 4 star question

var data = {
    userData: [],

    addMoreData: function (Name, Skill) {
       return this.userData.push(  [Name, Skill]);
    },

    listView: function () {
        var key_value = {};
        
        for (let i = 0; i < this.userData.length;i++)
        { 
            var flag = 0;

            for (k in key_value)
            {   
                if (this.userData[i][0] == k)
                flag = 1; 
            }
            
            var arr = []; 
            if (flag== 0) {
                for (let j = i; j < this.userData.length; j++) {
                    if (this.userData[i][0] == this.userData[j][0]) {
                        var key = this.userData[j][0];
                        arr.push(this.userData[j][1]) 
                    } 
                }
                key_value[key] = arr;
            } 
        }
        console.log(key_value);
    } 
};


data.addMoreData("Nrupul","cmd");
data.addMoreData("Prateek","js");
data.addMoreData("Nrupul", "python");
data.addMoreData("Aman", "ds");
data.addMoreData("Nrupul", "sql");
data.addMoreData("Albert", "js");
data.addMoreData("Aman","algo");
data.addMoreData("Albert" ,"react");
data.addMoreData("Prateek", "html");
 
data.listView();

 


