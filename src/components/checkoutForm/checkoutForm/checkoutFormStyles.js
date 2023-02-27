import styled from "styled-components";
import { Form } from "formik";
import { Field } from "formik";
export const CheckoutContainer = styled.div`   
 box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    display : flex;
    flex-direction: column;
    width: 50%;
    @media(max-width: 540px){
     width: 400px;
    }
`;

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    height: 80%;
    @media(max-width: 820px){
        height: 500px;
    }
    @media(max-width: 768px){
        height: 400px;
    }
    @media(max-width: 540px){
     
    }
`;

export const CheckoutTitle = styled.h2`
    margin: 20px 0 0 30px;
    color: aqua;
    @media(max-width : 912px){
        font-size: 30px;
    }
`;

export const InputsCheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    flex-wrap: wrap;
    margin: auto;
    height: 70%;
`;

export const InputCheckoutContainer = styled.div`
    height: fit-content;
    width: 90%;
    margin: auto;
    display:flex ;
    flex-direction: column;
    justify-content: center;
`;
export const InputCheckout = styled(Field)`
    height: 30px;
    border-radius: 5px;
    border-style: none;
    background-color: #17202A ;
    outline: none;
    font-size:16px;
    padding-left: 10px;
    color: white;
`;
export const CheckoutParagraph = styled.p`
    color: white;
    @media(max-width : 912px){
        font-size: 20px;
    }
    @media(max-width : 768px){

        margin-bottom: 10px;
        font-size: 20px;
    }
`;

export const ErrorParagraph = styled.p`
    color:red;
    @media(max-width : 912px){
        font-size: 20px;
    }
`;
export const ButtonContainer = styled.div`
    height: 50px;
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ButtonConfirmed = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  width: 200px;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}


 &:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
@media(max-width : 912px){
        font-size: 19px;
        width: 250px;
    }
`;
