var arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];

var small = "abcdefghijklmnopqrstuvwxyz";
 

function countCase(arr)
{ 
    var count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        var el = arr[i];
        
        for (let j = 0; j < el.length;j++)
        {
            for (let k = 0; k < small.length;k++)
            {
                if (el[j] == small[k])
                    count++;

            }
    
        }
    
    }
    console.log(count); 
}

countCase(arr);