import styled from "styled-components";
import { NotFoundButton } from "../../pages/404/NotFoundStyles";
import { Form  , Field } from "formik";
import {FcGoogle} from "react-icons/fc"


export const SpanForm = styled.span`
    color: white;
    margin: auto;
    @media(max-width:912px){
        font-size: 22px;
    }
    @media(max-width:820px){
        font-size: 20px;
    
    }
    @media(max-width : 540px){
        width: 80%;
        
    } 
    @media(max-width : 414px){
        font-size: 30px;
    }    
`;
export const  SpanFormContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media(max-width:912px){
        width: 400px;
    
    }
    @media(max-width:820px){
       width: 400px;
       margin-left: 20px;

    }
    @media(max-width:414px){
        flex-direction: column;
       width: 300px;
       height: 120px;
       margin-left: 40px;

    }

    @media(max-width:412px){
        flex-direction: column;
       width: 320px;
       height: 120px;
       margin-left: 20px;

    }
 
   
`;
export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 300px;
    width: 260px;
    margin-bottom: 70px;
    @media(max-width:912px){
        width: 450px;
        height: 500px;
    
    }
    @media(max-width:414px){
       width: 350px;
       height: 600px;
       
    }
    @media(max-width:412px){
       width: 350px;
       
    }
`;
export const LoginGoogleContainer = styled.div`
    box-shadow:  rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;;
    margin: auto;
    width: 200px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
export const LoginGoogle = styled(FcGoogle)`
    cursor: pointer;
    font-size: 60px;
    @media(max-width:912px){
        font-size: 90px;
    
    }
    @media(max-width:820px){
        font-size: 50px;
    
    }
`;
export const Imput = styled(Field)`
    height: 30px;
    border-radius: 5px;
    border-style: none;
    background-color: black;
    outline: none;
    font-size:16px;
    padding-left: 10px;
    color: white;
    @media(max-width:912px){
        width: 250px;
    
    }
    @media(max-width:820px){
        margin-bottom: 10px;
       width: 200px;
    }
    @media(max-width:414px){
        margin-bottom: 10px;
        font-size: 30px;
        width: 300px;
        height: 50px;
    }
    @media(max-width:412px){
        width: 300px;
        margin-bottom: 10px;
        font-size: 20px;
        height: 40px;
    }
    
`;
export const FormParagraph = styled.p`
    cursor: pointer;
    color: aqua;
    margin:  0 auto;
    width: fit-content;
    font-size: 16px;
    font-weight: 700; 
    &:hover{
        border-bottom: 2px solid aqua;
    }
    @media(max-width:912px){
        font-size: 20px;
    
    }
    
  
`;

export const ButtonLogin = styled(NotFoundButton)`
    @media(max-width:820px){
        margin: auto;
        width: 200px;
    
    }
`;
export const ErrorMsg = styled.p`   
    color: red;
    @media(max-width:912px){
        font-size: 20px;
    
    }
    @media(max-width:820px){
        font-size: 16px;
    
    }
    @media(max-width:412px){
        font-size: 20px;
    
    }
   
  
`;