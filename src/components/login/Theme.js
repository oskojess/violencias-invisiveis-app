import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inputHighlighter = keyframes`
  from { border-color: #d5d5d5; }
  to 	{ border-color: #333; }
`;

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  font-size: 20px;
  border-color: #d5d5d5;
  background-color: #f5f5f500;
  width: 15em;
  padding: 0.3em 0em;
  transition:0.2 ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  &:focus {
    -webkit-animation:${inputHighlighter} 0.3s ease forwards;
    -moz-animation:${inputHighlighter} 0.3s ease forwards;
    animation:${inputHighlighter} 0.3s ease forwards;
  }
`;

// Text

export const Title = styled.h1`
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;


export const Text = styled.p`
  color: ${props => props.color || "#4d4d4d"};
`;