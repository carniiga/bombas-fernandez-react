import styled from "styled-components";


export const CardProduct = styled.div`
    margin: 20px 0 0 10px;
    gap: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 180px;
    height: 260px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    @media(max-width:912px){
   width: 150px;
   height: 250px;
    }
    @media(max-width:820px){
    width: 180px;
    height: 280px;
    }
`;
export const ProductImg = styled.img`
    margin: 10px;
    width: 120px;
    height: 120px;
    @media(max-width:912px){
    width: 100px;
    height: 100px;
    }
   
`;
export const ProductName = styled.h2 `
    color: aqua;
`;
export const ProductModel = styled.h3`
    color: azure;
`;
export const FooterCard = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width:912px){
   width: 120px;
  
    }

`;
export const CardPriceContainer = styled.div`
    text-align: center;
    align-items: center;
    width: 150px;
    display: flex;
    justify-content: space-between;
    @media(max-width:912px){
        width: 130px;
    }
    
`;

export const CardPrice = styled.p`
    color: aqua;
    font-size: 20px;
    @media(max-width:912px){
        font-size: 16px;
    }

`;
export const  AddBtnProduct = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 30px;
    border-radius: 5px;
    height: 25px;
    width: 25px;
  
    background-color: darkgreen;
    color: white;
`;
