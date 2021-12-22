var productInfo = [          // array of objects
    { 
        name: "OnePlus",
        category: "Electronics",
        price: 29000
    },
    {
        name: "Coffee",
        category: "Grocery",
        price: 400
    },
    {
        name: "Pen",
        category: "Office",
        price: 30
    },
    {
        name: "Book",
        category: "Office",
        price: 60
    },
    {
        name: "Rice",
        category: "Grocery",
        price: 100
    },
    {
        name: "Earphones",
        category: "Electronics",
        price: 1000
    },

];

function category(productInfo)         // seperates different categories 
{
    var arr1 = [];      // take all products of category electronics
    var arr2 = [];       // take all products of category grocery
    var arr3 = [];        // take all products of category office
  
    for (let i = 0; i < productInfo.length; i++) {

        
        for (key in productInfo[i]) {
            
            if (productInfo[i][key] == "Electronics")
                arr1.push(productInfo[i])
            else if (productInfo[i][key] == "Grocery")
                arr2.push(productInfo[i])
            else if (productInfo[i][key] == "Office")
                arr3.push(productInfo[i])
        
        }
          
    }

    printProduct(arr1);     // print least price for category electronics
    printProduct(arr2);    //print least price for category grocery
    printProduct(arr3);    //print least price for  category office
}

function printProduct(arr)
{
    var a = arr.sort(function (a, b)
    {
        return a.price - b.price;
    })
     console.log(a[0].name);
}
 
    category(productInfo);


     