

var jwellery_div = document.getElementById("jwellery_div")
function appendCartItems(el)
{
    var jwellery_div = document.getElementById("jwellery_div")
    var div=document.createElement("div")

    let p_name=document.createElement("p")
    p_name.innerHTML = el.name
    
    let p_price=document.createElement("p")
    p_price.innerHTML = el.price
    
    let p_jwelleryBrand=document.createElement("p")
    p_jwelleryBrand.innerHTML=el.jwelleryBrand
 
    var img=document.createElement("img")
    img.src = el.img; 

    div.append(img,p_name, p_price,p_jwelleryBrand)
    
    jwellery_div.append(div)
}
 

function showCart() {
        
    let data = JSON.parse(localStorage.getItem("Cart")) 
    var promocode = document.getElementById("promocode").value;
    
   
    if (  promocode  == "masai30")
    {  
        for (let i = 0; i < data.length;i++)
        {  data[i].price=String(Math.floor(Number(data[i].price)*(0.7)));
             
        }
    }  
    
    jwellery_div.innerHTML = null;

    data.forEach(function (el) {
        appendCartItems(el);
        
    });

}
 
 

showCart();


function checkout()
{
    window.location.href="checkout.html"
}