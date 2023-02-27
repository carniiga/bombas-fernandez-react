import styled from "styled-components";

export const CheckoutCardContainer = styled.div`
 box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    width: 400px;
    height: 90px;
    justify-content: space-between;
    display: flex;
    margin-top: 10px;
    @media(max-width:1024px){
      width: 350px;
      height: 80px;
    } 
    @media(max-width:912px){
      width: 380px;
      height: 100px;
    }
    @media(max-width:768px){
      width: 400px;
      
    }
    @media(max-width:540px){
      width: 300px;
      
    }
`;
export const CheckoutImgContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
`;
export const CheckoutCardImg = styled.img`
    height: 80px;
    width: 80px;
    @media(max-width:1024px){
      width: 60px;
      height: 60px;
    }
    @media(max-width:912px){
      width: 70px;
      height: 70px;
    }
`;

export const CheckoutDescContainer = styled.div`
    margin: auto;
    height: 80px;
    width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media(max-width:1024px){
      height: 70px;
      gap:0;
    }

`;
export const CheckoutCardName = styled.p`
    color: white;
    font-size: 15px;
    @media(max-width:1024px){
      font-size: 16px;
    }
  
`;
export const CheckoutCant = styled(CheckoutCardName)`
   
    display: flex;
    font-size: 20px;
    align-items:center;
   
`;
export const CheckoutCardModel = styled(CheckoutCardName)`
  font-size: 13px;
`;
export const CheckoutCardPrice = styled(CheckoutCardName)`  
  font-size: 15px;
`;


export const ButtonConfirmedContainer = styled.div`
    height: 100px;
    display: flex;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;
export const ButtonConfirmed = styled.button`
    font-size: 16px;
    margin-top: 20px;
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
  width: calc(100% + 4px);
  height: calc(100% + 4px);
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

`;
export const TotalCheckoutContainer = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  justify-content:flex-start;
  @media(max-width:912px){
    width: 90%;
      
    }
  
`;
export const TotalCheckout = styled.p`
  font-size: 25px;
  color: white;
  
`;