import styled from "styled-components";
const Form = styled.form`
        
      background:${(props) => props.theme === `light` ? "rgb(37,36,37)" : "#b9b4b4"};
      color: ${(props) => props.theme === `light` ? `#b9b4b4` : `rgb(37,36,37)`} ;
      display:flex ;
      flex-direction:column;
      width:50%;
      margin: auto;
      margin-top: 3%;
     

    `

export default Form