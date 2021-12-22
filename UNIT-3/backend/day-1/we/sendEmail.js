const sendVerificationEmail = (emailObject) => {
    console.log(`Sending Verification Email to ${emailObject.email}`);
}

const sendWelcomeEmail = (emailObject) => {
    console.log(`Sending Welcome Email to ${emailObject.email}`);
}
 
// console.log('module.exports:', module.exports)  // here it works as an object
module.exports = {
    sendVerificationEmail: sendVerificationEmail,
    sendWelcomeEmail:sendWelcomeEmail, 
     
}

// module.exports = sendVerificationEmail;      // default export   
    // console.log('module.exports:', module.exports)  // here it works as an function
    
   
     
 