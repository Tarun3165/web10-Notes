
const admins = [
    
    {
        username: "raj",
        password: "raj123",
    },
    {
        username: "nrupul",
        password: "nrupul123",
    },
    {
        username: "tarun",
        password: "tarun123",
    },
];

 
if(localStorage.getItem("admins")==null)
{
    localStorage.setItem("admins", JSON.stringify(admins));
}


function startLogin(e)
{
     
    e.preventDefault();
    const form = document.getElementById("login")

    //step-1 get the data
    const username=form.username.value
    const password = form.password.value
    
    
    //step-2 check the data

    const admins=JSON.parse(localStorage.getItem("admins"))
    
    for (let i = 0; i < admins.length;i++)
    {
        let u = admins[i].username;
        let p = admins[i].password;

        if(u==username && p==password)
        {
           window.location.href="home.html"
            break;
        }

    }
}