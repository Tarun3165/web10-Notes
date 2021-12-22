var data = {
    userData: [],

    addMoreData: function (N, S) {
       return this.userData.push({ name: N, skill: S });
    },

    listView: function ()
    {
        var key_Value = {};
        var newarr = [];
        
    for (let i = 0; i < this.userData.length; i++) {
             
     var flag = 1;
        for (let j = 0; j < newarr.length; j++) {
             if (this.userData[i]["name"] == newarr[j])
                flag = 0;
           }

         if (flag == 1)
         {
            newarr.push(this.userData[i].name);
            var arr = [];
             arr.push(this.userData[i].skill)
              // console.log(arr);
             var NAME = this.userData[i].name;
            
             
             for (let j = i + 1; j < this.userData.length; j++) {
                
                if (this.userData[i].name == this.userData[j].name)
                {
                    arr.push(this.userData[j].skill) 
                }
            } 
                    
        }  
       key_Value[NAME] = arr;
    }
        
     console.log(key_Value); 
}
};


data.addMoreData("Nrupul","cmd");
data.addMoreData("Nrupul", "sql");
data.addMoreData("Prateek","js");
data.addMoreData("Nrupul", "python");
data.addMoreData("Aman", "ds");
data.addMoreData("Albert", "js");
data.addMoreData("Aman","algo");
data.addMoreData("Albert" ,"react");
data.addMoreData("Prateek", "html");
console.log(data.userData);

data.listView();
 


