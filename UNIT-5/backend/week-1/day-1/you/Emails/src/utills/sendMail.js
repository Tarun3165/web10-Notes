
const transporter = require("../config/mail")

module.exports= async ({to,subject,text,html}) => {
    
    
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to:to , 
        subject: subject,
        text:text,
        html:html ,
    });
    
};