
function storeProduct() {

    let form = document.getElementById("myForm")
    let name = form.name.value;
    let price = form.price.value;
    let image = form.img.value;
    
    var product = {
        name,
        price,
        image,
    }
    var arr;
    arr = localStorage.getItem("products")
    if (arr == null) {
        arr = [];
    }

    else {
        arr = JSON.parse(localStorage.getItem("products")) 
    }
    arr.push(product)
    localStorage.setItem("products", JSON.stringify(arr));
    console.log(arr)
     
}


function showProducts() {
       
    window.location.href="product.html"
    
}
 

 

 
 
 
 