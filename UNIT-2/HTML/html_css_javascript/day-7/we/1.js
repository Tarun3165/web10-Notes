function storeLocation()
{
    let form=document.getElementById("myForm")
    let name = form.name.value
    let rating=form.rating.value
    let image = form.img.value
   
    
    let location = {      // if we do not write the value Js will take value equal to key
        name ,
        rating ,
        image ,
    }
    // console.log("location", location);
 
 
    let arr;

    arr = localStorage.getItem("locations")
    
    if(arr==null)
    {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("locations"))
    }
    arr.push(location);
   
    localStorage.setItem("locations", JSON.stringify(arr));  
    showLocations();
    
}
 

var data_div=document.getElementById("data")
 
function appendLocations(el)
{
    var data_div=document.getElementById("data")
    var div=document.createElement("div")

    let p_name=document.createElement("p")
    p_name.innerHTML = el.name
    
    let p_rating=document.createElement("p")
    p_rating.innerHTML=el.rating
 
    var img=document.createElement("img")
    img.src = el.image;

    let btn=document.createElement("button")
    btn.textContent = "Add to visited";

    btn.addEventListener("click", function () {
        addtoVisited(el)
        
    })
    
    btn.style.display = "block";                 // style.display can be node as well as inline as well
 
    div.append(p_name, p_rating, img ,btn)
    
    data_div.append(div)
}
    


function showLocations() {
      
     let data = JSON.parse(localStorage.getItem("locations")); 
     
     data_div.innerHTML = null;

     data.forEach(function (el) {
         appendLocations(el);
         
     });

}
    
showLocations();
 

function addtoVisited(obj)
{
    
    let arr;

    arr = localStorage.getItem("visited")
    
    if(arr==null)
    {
        arr = [];
    }
    else {
        arr=JSON.parse(localStorage.getItem("visited"))
    }

    arr.push(obj);

    localStorage.setItem("visited",JSON.stringify(arr))
}


function showVisited()
{

    window.location.href="visited.html"
}