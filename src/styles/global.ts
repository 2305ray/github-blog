import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.blue200};
 }

 body {
    background-color: ${props => props.theme.blue400};
    color: ${props => props.theme.gray200};
    -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
 }
`