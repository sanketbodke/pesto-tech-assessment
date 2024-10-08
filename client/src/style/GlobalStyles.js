import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body{
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: rgb(247 247 247);
        letter-spacing: 1px;
    }
    
    a{
        text-decoration: none;
        color: #000000;
        font-size: 14px;
    }
    
    ::placeholder{
        letter-spacing: 1px;
    }
`

export default GlobalStyles