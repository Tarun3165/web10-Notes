

var data_div = document.getElementById("data")
function appendCartItems(el)
{
    var data_div = document.getElementById("data")
    var div=document.createElement("div")

    let p_name=document.createElement("p")
    p_name.innerHTML = el.name
    
    let p_price=document.createElement("p")
    p_price.innerHTML=el.price
 
    var img=document.createElement("img")
    img.src = el.image; 

    div.append(img,p_name, p_price)
    
    data_div.append(div)
}


function showCart() {
        
    let data = JSON.parse(localStorage.getItem("Cart")) 
    var promocode = document.getElementById("promocode").value;
    
   
    if (  promocode  == "masai30")
    { 
        var tPrice = 0;
        for (let i = 0; i < data.length;i++)
        {  data[i].price=String(Number(data[i].price)*(0.7));
            tPrice+= Number(data[i].price)
        }
    } 
    else
    var tPrice = 0;
    for (let i = 0; i < data.length;i++)
    {  
        tPrice+= Number(data[i].price)
    }
    
    var totalPrice = document.getElementById("totalPrice")
   var totalItems=document.getElementById("totalItems")
   totalItems.innerHTML=`Total Items=${data.length}`
   totalPrice.innerHTML=`Total Price=${ tPrice}`

    
    data_div.innerHTML = null;

    data.forEach(function (el) {
        appendCartItems(el);
        
    });

}
 
 

showCart();


function checkout()
{
    window.location.href="success.html"
}