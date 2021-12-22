
function slideshow()
{

   
  const arr=["https://cdn.wallpapersafari.com/24/36/SZsmoe.jpg","https://rukminim1.flixcart.com/image/416/416/jyq5oy80/mobile-holder/z/x/q/high-quality-plastic-smart-phone-and-tablets-amusing-original-imafgvgjvhkfj3wp.jpeg?q=70","https://newsletter.echa.europa.eu/image/image_gallery?uuid=4cf0684e-2708-465c-8369-70b9a7c4ca3b&groupId=6362380&t=1460015732662"]
    let div=document.getElementById("slideshow")
    let img=document.createElement("img")
    
    let i = 0;
    img.src = arr[0];

    div.append(img)

    setInterval(function () {
        if (i >= arr.length)
            i = 0;
        img.src = arr[i];
        i++;
       
    },2000)

}

slideshow();

const students = [
    
    {
        name: "Seema",
        attendence: "99" ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tYLOOyPts9xjuscCDprTNPzoOMnqpbd_dw&usqp=CAU"
    },
    
    {
        name: "sovik",
        attendence: "90" ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tYLOOyPts9xjuscCDprTNPzoOMnqpbd_dw&usqp=CAU"
    },
    {
        name: "antony",
        attendence: "93" ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tYLOOyPts9xjuscCDprTNPzoOMnqpbd_dw&usqp=CAU"
    },
    {
        name: "aman",
        attendence: "95" ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tYLOOyPts9xjuscCDprTNPzoOMnqpbd_dw&usqp=CAU"
    },
    {
        name: "tarun",
        attendence: "100",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tYLOOyPts9xjuscCDprTNPzoOMnqpbd_dw&usqp=CAU"
    },
]


if(localStorage.getItem("students")==null)
{
    localStorage.setItem("students", JSON.stringify(students));
}

 
function showStudents(d) {
   
   let students  = d;
     
   let students_div=document.getElementById("students") 
   
   students_div.innerHTML=null;

    students.forEach(function (el) {
        
        let div = document.createElement("div")

        let p_name = document.createElement("p")
        p_name.innerHTML = el.name;
        
        let  p_attendence = document.createElement("p")
        p_attendence.innerHTML = el.attendence;

        let img = document.createElement("img")
        img.src = el.img;
        
        div.append(img, p_name, p_attendence)
        console.log('div:', div)
        students_div.append(div);
         
    })
}

   
showStudents(JSON.parse(localStorage.getItem("students")));  /// default students data

function sortLH() {
   
    
    let students = JSON.parse(localStorage.getItem("students")).sort(function (a, b)
    {
        return a.attendence-b.attendence
    })
    
    // console.log('students:', students)

    showStudents(students)
     
}

function sortHL() {
    
  
    let students = JSON.parse(localStorage.getItem("students")).sort(function (a, b)
    {
        return b.attendence-a.attendence
    })
    
    // console.log('students:', students)

     showStudents(students)

}