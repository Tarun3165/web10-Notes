 const EventEmitter=require("events")   //returns class
 //  import EventEmitter from "events"
 const eventEmitter=new EventEmitter()  // creating an object of a class
 
const {sendVerificationEmail,sendWelcomeEmail }=require("./sendEmail")

const register = () => {
    eventEmitter.on("user registered",sendVerificationEmail)     //node will invoke the function on its own
    eventEmitter.on("user registered",sendWelcomeEmail)
    
    eventEmitter.emit("user registered",{email:"tarun@gmail.com"})   // calls the  listeners registered for the event
 }

register();
     