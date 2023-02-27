import styled from "styled-components";

export const CheckoutCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media(max-width : 912px){
        height: 100%;
    }
    @media(max-width : 820px){
        height: 500px;
    }
    @media(max-width : 768px){
        width: 80%;
        height: 600px;
    }
    @media(max-width:360px){
      width: 90%;
     
      
    }

`;
export const CheckOutCartTitle = styled.h3`
    margin :  20px 0 0 30px;
    color: aqua;
    @media(max-width : 912px){
        font-size: 30px;
    }
`;
export const CheckOutProductsContainer = styled.div`
    width: 70%;
    margin: 40px auto ;
    height:  300px;
    overflow: auto;
    &::-webkit-scrollbar {
     width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: aqua;
  border-radius:10px ;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: aquamarine;
}
   @media(max-width : 1024px){
    width: 80%;
   }
   @media(max-width : 912px){
        width: 90%;
      
    }
    @media(max-width : 820px){
        width: 100%;
    }
    @media(max-width : 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%; 
        height: 500px;
        
}
`;