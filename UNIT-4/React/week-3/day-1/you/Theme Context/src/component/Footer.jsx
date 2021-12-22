import styled from "styled-components";

const Footer = styled.div`
color: ${(props)=>props.theme === `light` ? `rgb(255,255,255)` :`rgb(37,36,37)`};
width:80%;
height:40VH;
margin-top: 10VW;
background:${(props)=>props.theme === `light` ? "rgb(37,36,37)" : "rgb(255,255,255)"};
border:1px solid green;
margin-left:auto;
margin-right:auto;
display: flex;
flex-direction: column;
&:hover{
border:2px solid red;
}
`
  
export default Footer