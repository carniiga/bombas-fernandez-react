import styled from "styled-components";
import {AiOutlineUserAdd} from "react-icons/ai"
import { Form , Field } from "formik";
import { ErrorMsg } from "../../components/form/FormStyles";

export const RegisterContainer = styled.div`
   
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 100vh;
    @media(max-width : 540px){
        justify-content: center;
       margin: 50px auto;
        width: 500px;
        
    }   
    @media(max-width : 412px){
        justify-content: center;
       margin: 50px 50px;
        width: 400px;
        
    }   
`;
export const UserLogoContainer = styled.div`
    position: absolute;
    top: 120px;
    border: 3px solid grey;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
export const UserRegisterLogo = styled(AiOutlineUserAdd)`
    color: grey;
    font-size: 100px;
    
`;
export const RegisterFormContainer = styled(Form)`
    
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 30vw;
    height: 90vh;
    margin: auto;
    @media(max-width : 540px){
        width: 500px;
    }  
    @media(max-width : 412px){
        width: 300px;
    }   
`;

export const RegisterTitle  = styled.h3`
    margin-top: 100px;
    color: aqua;
    font-size: 30px;
`;

export const RegisterInputContainer = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: 80%;
    @media(max-width : 540px){
        
        width: 400px;
        height: 700px;
        margin: 50px auto;
    }  
    @media(max-width : 412px){
        width: 300px;
    }   
`;
export const RegisterInput = styled(Field)`
    border-radius: 10px;
    border-style: none;
    font-size: 16px;
    background-color: #0c0f0a;
    color: white;
    outline:none;
    height: 40px;
    padding-left: 10px;
    &::placeholder{
        color: grey;
    }
    @media(max-width : 412px){
        width: 300px;
    }  
`;
export const LabelRegister = styled.label`
    color: white;

`;

export const RegisterParagraphContainer = styled.div`  
 
    margin-top: 10px;
    width: 80%;
    height: 30px;
    justify-content: flex-end;
    display: flex;



`;
export const RegisterParagraph = styled.p`
    cursor: pointer;
    color: aqua;
    &:hover{
        border-bottom: 1px solid aqua;
    }

`;
export const ButtonRegister = styled.button`
    margin-top: 20px;
     cursor: pointer;
    padding: 10px;
    background-color: aqua;
    height: 50px;
    font-weight:bolder;
    font-size:20px;
    border-radius:10px;
    color: black;
    &:hover{
        background-color:lightblue;
        transition: 1s;
    }
`;
export const RegisterErrorMsg = styled(ErrorMsg)``;