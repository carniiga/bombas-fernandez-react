import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        /* color: white; */
        font-family: "Source Sans Pro" , sans-serif;


    }
    html{
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
    }
    :root{
        --bg-img:url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")
    }
    body{
        background-image: var(--bg-img);
        display: flex;
        flex-direction: column;
    }
    
`;

