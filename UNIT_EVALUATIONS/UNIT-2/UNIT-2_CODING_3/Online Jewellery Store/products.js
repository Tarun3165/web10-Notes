 

const jwellery = [
    
  {
      name: "Glamorus Lct Gold Plated",
        jwelleryBrand: "Sukkhi",
      price:"5000",
      img:"https://m.media-amazon.com/images/I/912iX-Sve0L._AC_UL320_.jpg"
  },
  {
      name: "Adorable Gold plated pearl choker",
      jwelleryBrand: "Sukkhi",
      price:"10000",
      img:"https://m.media-amazon.com/images/I/81UaMFQR6kL._AC_UL320_.jpg"
  },
  {
      name: "Balika Vadhu flower jwellery",
      jwelleryBrand: "Generic",
      price:"5300",
      img:"https://m.media-amazon.com/images/I/61XsLR+-pzS._AC_UL320_.jpg"
  },
  {
      name: "Nirwan jwellery Elegant designer",
      jwelleryBrand: "Generic",
      price:2300,
      img:"https://m.media-amazon.com/images/I/71v5lEHihqS._AC_UL320_.jpg"
  },
  {
      name: "Gold plated jwellery Long Traditional Maharani ",
      jwelleryBrand: "YouBella",
      price: "3788",
      img:"https://m.media-amazon.com/images/I/71vrje2uy-L._AC_UL320_.jpg"
  },
  {
      name: "Gold plated jwellery Long Traditional Maharani ",
      jwelleryBrand: "YouBella",
      price: "3788",
      img:"https://m.media-amazon.com/images/I/71vrje2uy-L._AC_UL320_.jpg"
  },
  {
      name: "Indian Traditional Jwellery",
      jwelleryBrand: "Matushri Art",
      price:1500,
      img:"https://m.media-amazon.com/images/I/91EUWosYpyS._AC_UL320_.jpg"
  },
  {
      name: "Gold plated jwellery Long Traditional Maharani ",
      jwelleryBrand: "YouBella",
      price: "3788",
      img:"https://m.media-amazon.com/images/I/71vrje2uy-L._AC_UL320_.jpg"
  },
  {
      name: "Indian Traditional Jwellery",
      jwelleryBrand: "Matushri Art",
      price:1500,
      img:"https://m.media-amazon.com/images/I/91EUWosYpyS._AC_UL320_.jpg"
  },
  
]


if(localStorage.getItem("jwellery")==null)
{
  localStorage.setItem("jwellery", JSON.stringify(jwellery));
}
 

let jwellery_div = document.createElement("div")
jwellery_div.setAttribute("id", "jwellery_div")

function showJweleries(d) {
 
  let jwellery  = d; 
    
    
  
  jwellery_div.innerHTML=null;
  
  jwellery.forEach(function (el) 
 { 
    let div = document.createElement("div")

    let p_name = document.createElement("p")
    p_name.innerHTML = el.name;
    
    let p_brand = document.createElement("p")
    p_brand.innerHTML = el.jwelleryBrand;
      
    let  p_price= document.createElement("p")
      p_price.innerHTML = el.price;
      
    var btn = document.createElement("button")
      btn.textContent = "Add To Cart"

      btn.addEventListener("click", function () {
        addtoCart(el)
        
    })
      
    let img = document.createElement("img")
    img.src = el.img;
      
    div.append(img, p_name, p_brand, p_price,btn)
      
    jwellery_div.append(div);
      
     document.body.append(jwellery_div);
     
  })
}

 
showJweleries(JSON.parse(localStorage.getItem("jwellery")));   
    console.log('jwellery:', jwellery)
    

function sortLH() {
   
    
    let jwellery = JSON.parse(localStorage.getItem("jwellery")).sort(function (a, b)
    {
        return a.price-b.price
    })
     
    showJweleries(jwellery)
     
}

function sortHL() {
    
  
    let jwellery = JSON.parse(localStorage.getItem("jwellery")).sort(function (a, b)
    {
        return b.jwellery-a.jwellery
    })
    
    showJweleries(jwellery)

}

// function filter_Brand() {
    
  
//     let jwellery = JSON.parse(localStorage.getItem("jwellery"))
//     var selectBrand=document.getElementById("selectBrand")
//     for (let i = 0; i < jwellery.length;i++)
//     {
//         if (selectBrand.value == jwellery[i].jwelleryBrand)
//         showJweleries( jwellery[i]);   
    
//     }
    
        
// }

// filter_Brand();

    
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


// function search() {
   
  
//     var inputSearch = document.getElementById("inputSearch");
//     for (let i = 0; i < jwellery.length; i++) {
//         if (inputSearch.value == jwellery[i].jwelleryBrand) { 
//             showJweleries(jwellery[i]);
             
          
//         }
//     }
// }