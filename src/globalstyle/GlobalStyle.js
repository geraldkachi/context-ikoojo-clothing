import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 5px;
        
        @media screen and (max-width: 800px) {
            paddlng: 5px ;
        }
    }
    
    a { 
        text-decoration: none;
        color: black;
    }
    * {
        box-sizing: border-box;
    }
`