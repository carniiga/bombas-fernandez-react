import styled from "styled-components";
import {VscAccount} from "react-icons/vsc"
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    width: 50%;
    height: 90vh;
    margin: 0 auto;
    @media(max-width:1024px){
        width: 50%;
        height: 90vh;
        margin: 50px auto;

    }
    @media(max-width:912px){
        width: 50%;
        height: 60vh;
        margin: 50px auto;

    }
    @media(max-width : 820px){
        width: 50%;
        height: 700px;
        margin: 50px auto;
    }   
    @media(max-width : 540px){
        width: 80%;
        height: 700px;
        margin: 50px auto;
    } 
    @media(max-width : 414px){
        width: 90%;
        height: 900px;
        margin: 50px 60px;
    }    
     @media(max-width : 412px){
        width: 100%;
        height: 800px;
        margin: 50px 40px;
    }    
`;
export const LogoLogin = styled(VscAccount)`
    margin-bottom: 10px;
    font-size: 130px;
    margin-left: 20px;  
    color: grey;
    @media(max-width:1024px){
        font-size: 300px;
        margin-top: 20px;
    }
    @media(max-width:912px){
        font-size: 200px;
        margin-top: 10px;

    }
    @media(max-width:820px){
     
        margin-top: 10px;

    }
   
`;
export const LoginTitle = styled.h2`   
    color: aqua;
    font-size: 30px;
    margin:  20px 50px; 
    @media(max-width:912px){
        font-size: 40px;
    
    }
`;
