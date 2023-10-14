import React from 'react';
import styled from "styled-components";



const StyledButton = styled.button `
background: palevioletred;
color:white;
font-size:2em;
width:100%;
padding:18px 20px;
border-radius:4px;
&:hover {
  opacity:0.8;
}
`;


const Button =()=> <StyledButton>Create Account </StyledButton>

export default Button;