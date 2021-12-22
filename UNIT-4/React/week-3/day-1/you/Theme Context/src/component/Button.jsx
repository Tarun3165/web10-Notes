import styled from "styled-components";

const Button = styled.button`
background:${(props) => props.theme === `light` ? `#b9b4b4` : `rgb(37,36,37)`};
border:1px solid green;
border-radius: 20px;
width:10vh;
color:${(props) => props.theme === `light` ? `rgb(37,36,37)` : `#b9b4b4`};
margin-left: 25VH;
&:hover{
border:2px solid red;

}
`
  
export default Button