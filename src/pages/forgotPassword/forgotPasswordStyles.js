import styled from "styled-components";
import { Form , Field } from "formik";
import { ButtonConfirmed } from "../../components/checkoutForm/checkoutForm/checkoutFormStyles";


export const ForgotContainer = styled.div`
       box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        height:50vh;
        width: 50%;
        @media(max-width : 540px){
        width: 400px; 
    }   
    @media(max-width : 414px){
        width: 500px;
        
    }   
    @media(max-width : 360px){
        width: 470px;
        
    }   

`;

export const ForgotParagraph = styled.p`
    color: white;
    font-size: 25px;
`;

export const InputForgotContainer = styled(Form)`
    margin-top: 10px;
    color: white;
    width: 72%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  
`;
export const LabelInput = styled.label`
    font-size: 25px;
`; 
export const InputForgot = styled(Field)`
    color: white;
    border-radius: 2px;
    width: 300px;
    height: 25px;
    background-color: #0c0f0a;
    border-style: none;
    padding-left: 5px;
    outline: none;
    &::placeholder{
        padding-left: 5px;
        font-size: 16px;
        color: grey;
    }
    @media(max-width:912px){
        &::placeholder{
            font-size: 20px;
        }
    
    }
    @media(max-width:414px){
        height: 50px;
        font-size: 22px ;
        &::placeholder{
            font-size: 20px;
        }
    
    }
`;

export const ForgotButton = styled(ButtonConfirmed)`
    width: 100px;
    @media(max-width : 912px){
        font-size: 16px;
    }
    @media(max-width:414px){
       width: 200px;
       height: 40px;
       display: flex;
       justify-content: center;
       margin-top: 20px;
       align-items: center;
       font-size: 22px;
    
    }
`;

export const ErrorMsgContainer = styled.div`
    width: 50%;
    height: fit-content;
    
`;
