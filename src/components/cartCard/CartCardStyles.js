import styled from "styled-components";
import {BsFillTrashFill} from "react-icons/bs"
export const ImgCartCard = styled.img`
    width: 110px;
    height: 100px;
    margin-left: 10px;
    @media (max-width : 1024px){
    width: 60px;
    height: 60px;
    }
`;
export const CartCardDescContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width : 1024px){
    width: 150px;
    height: 70px;
    }
    @media (max-width : 412px){
    width: 150px;
    height: 100px;
    justify-content: center;
    
    }



`;
export const TitleModel = styled.h2 `
    color: aqua;
    @media (max-width : 1024px){
    font-size: 16px;
    }
    @media (max-width : 412px){
    font-size: 22px;
    
    }


`;
export const DescModel = styled.p`
    font-size: 20px;
    color: white;
    font-weight:bold;
    @media (max-width : 1024px){
    font-size: 13px;
    
    }
    @media (max-width : 412px){
    font-size: 16px;
    
    }

`
export const DescPrice = styled.p `
    color: aqua;
    @media (max-width : 1024px){
    font-size: 14px;
    
    }
    @media (max-width : 412px){
    font-size: 22px;
    
    }

`;

export const HandleQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
    margin-right: 2px;
    @media (max-width : 1024px){
    width: 90px;
    
    }
`;
export const BtnHandleContainerIncrement= styled.div`
    cursor: pointer;
    height: 30px;
    width: 30px;
    background-color: aqua;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width : 1024px){
    height: 20px;
    width: 20px;
    
    }
`;
export const BtnHandleContainerDecrement= styled.div`
    cursor: pointer;
    height: 30px;
    width: 30px;
    background-color: #4CC9D0;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width : 1024px){
    height: 20px;
    width: 20px;
    
    }
`;

export const BtnIncrement = styled.p`
    color: black;
    font-size: 30px;
    @media (max-width : 412px){
    font-size: 35px;
    }
`;

export const BtnDecrement  = styled.p` 

    font-weight: bold;
    color: black;
    font-size: 30px;
    @media (max-width : 412px){
    font-size: 35px;
    
    }

`;
export const Quantity = styled.p`
    width: 50px;
    font-weight: bold;
    color: white;
    font-size: 20px;
    @media (max-width : 1024px){
    font-size: 18px;
    
    }
    @media (max-width : 412px){
    font-size: 22px;
    
    }

`;

export const CardProductContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border: 1px solid black;
    height: 120px;
    width: 500px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    @media (max-width : 1024px){
 
    height: 80px;
    width: 350px;
    
    
    }
    @media (max-width:412px){
        height: 120px;
    width: 350px;
    
   }
    
`;
export const TrashIcon =  styled(BsFillTrashFill)`
    color: black;
`
