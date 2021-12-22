
import './App.css';
import Footer from "./component/Footer"
import Form from "./component/Form"
import Input from "./component/Input"
import Navbar from "./component/Navbar"
import NavbarItem from "./component/NavbarItem"
import Button from "./component/Button"
import { useContext } from "react";
import {ThemeContext} from "./Contexts/ThemeContexts"




function App() {
  const  {theme,handleThemeChange}  = useContext(ThemeContext);
  return (
    <div className="App">
      
        <Navbar theme={theme}>
        <div style={{
         
          position: 'absolute',
           top:"12px",
          left: "12VW",
        }}>
          Masai School
        </div >
        <div style={{
              display: "flex",
          flexDirection: "row",
              
        }}>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Prices</NavbarItem>
          <NavbarItem>Start</NavbarItem>

      <Button theme={theme} onClick={handleThemeChange}>
        {theme}
      </Button>
        </div>
      </Navbar>
        
      <Form >
        <Input theme={theme} type="text" placeholder="Enter Your name"></Input>
        <Input theme={theme} type="text" placeholder="Enter Your age"></Input>
        <Input theme={theme} type="text" placeholder="Enter Your mobileNo"></Input>
        <Input theme={theme} type="text" placeholder="Enter Your Email"></Input>
      </Form>
      <Button style={{ marginLeft: "-4vh" }} theme={theme}  >submit</Button>
      
      <Footer theme={theme}>
       
        <span>About Us</span>
        <span>Our Blog</span>
        <span>Careers</span>
        <span>Corporate Governance</span>
        <span>Pepperfry In the News</span>
        <span>Find A Studio</span>
        <span>Gift Cards</span>
        <span>Brands</span>
        <span>Customer Reviews</span>
     
      </Footer>
      
    
    </div>
  );
}

export default App;
