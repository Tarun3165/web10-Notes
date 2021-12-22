 

var data_div = document.getElementById("data")
function appendProducts(el)
{
    var data_div=document.getElementById("data")
    var div=document.createElement("div")

    let p_name=document.createElement("p")
    p_name.innerHTML = el.name
    
    let p_price=document.createElement("p")
    p_price.innerHTML=el.price
    
    var img=document.createElement("img")
    img.src = el.image;
    
    var btn = document.createElement("button")
    btn.textContent = "Add To Cart"

    btn.addEventListener("click", function () {
        addtoCart(el)
        
    })
    

    div.append( img,p_name, p_price,btn )
    
    data_div.append(div)
}

 

function showProducts() {
        
       let data = JSON.parse(localStorage.getItem("products")); 
    data.pop();
       data_div.innerHTML = null;

       data.forEach(function (el) {
           appendProducts(el);
           
        });
        
    }
    
    showProducts();
    
function addtoCart(obj)
{
    
    let arr;
    
      
    arr = localStorage.getItem("Cart")
    
    if(arr==null)
    {
        arr = [];
    }
    else {
        arr=JSON.parse(localStorage.getItem("Cart"))
    }
    
    for (let i = 0; i < arr.length;i++)
    {  
        if(arr[i].name==obj.name)
        {  
                alert(`Already  added ,try other Products!`)
                return;
        }
      
    }
            
     arr.push(obj);
     
     localStorage.setItem("Cart",JSON.stringify(arr))
            
    
}
 
function showCart()
{
    window.location.href="Cart.html"
}
