import styled from "styled-components";
const Input = styled.input`
        
      background:${(props) => props.theme === `light` ? "black" : "white"};
       padding: "3VH";
      color: ${(props) => props.theme === `light` ? `white` : `black`} ;
      /* color:red; */
      outline: none;
    
      /* display:flex ;
      flex-direction:column; */
      /* width:50%; */
      /* margin: auto; */
      /* margin-top: 3%; */
     

    `

export default Input