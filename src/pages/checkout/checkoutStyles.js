import styled from "styled-components";

export const CheckoutContainer = styled.div`

     box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    height: 80vh;
    justify-content: space-around;
    display: flex;
    @media(max-width: 820px){
        align-items: center;
        text-align: center;
        flex-direction: column;
        height: 1300px;
    }
    @media(max-width: 414px){
        width: 100%;
        margin-left: 50px;
    }
`;

