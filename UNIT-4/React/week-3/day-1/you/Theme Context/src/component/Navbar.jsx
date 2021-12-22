import styled from "styled-components";
const Navbar = styled.div`
        
      background:${(props)=>props.theme === `light` ? "rgb(37,36,37)" : "#b9b4b4"};
      display: "flex";
      padding: "3VH";
      width:80%;
      margin: auto;
      color: ${(props) => props.theme === `light` ? `#b9b4b4` : `rgb(37,36,37)`} ;
    

    `

export default Navbar