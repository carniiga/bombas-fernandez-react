import styled from "styled-components";
import { TrashIcon } from "../cartCard/CartCardStyles";
export const CartContainer = styled.div`
    background-image: var(--bg-img);
    position: absolute;
    z-index: 999;
    height: 500px;
    width: 560px;
    overflow: auto;
    display: ${props => props.isHidden ? "none"  : "flex"} ;
    flex-direction:column ;
    margin:  0  0 100px 780px;
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
    
@media (max-width : 1024px){
    margin:  0  0 100px 600px;
    width: 400px;
    }
    @media (max-width : 912px){
    margin:  0  0 100px 500px;
    width: 400px;
    }
    @media(max-width : 820px){
    margin:  0  0 100px 401px;
    width: 400px;
       
    }   
    @media (max-width:768px){
        margin:  0  0 100px 350px;
    width: 400px;
   }
   @media (max-width:540px){
    margin:  0  0 100px 120px;
    width: 400px;
   }
   @media (max-width:414px){
    margin:  0  0 100px 100px;
    width: 400px;
   }
   @media (max-width: 412px){
    height: 800px;
    margin:  0  0 100px 80px;
    width: 400px;
   }
`;

export const CartTitle = styled.h3`
     margin:  10px 0 0 10px;
     color: aqua;
    font-size: 30px ;
    @media (max-width : 1024px){
    text-align: center;
    
    }
`;
export const CloseBtnContainer = styled.div`

    display: flex;
    justify-content: space-around;
    margin-right: 500px;
    @media (max-width : 1024px){
    margin-right:350px;
    }
`;

export const RemoveAllContainer = styled.div`
   
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`;
export const RemoveAllParagraph = styled.p`
    color: white;
`
export const NotProductsCart = styled.h3`
    color: white;
`;
export const RemoveAllIcon = styled(TrashIcon)`
    cursor: pointer;
    color: white;
    height: 20px;
    border-radius: 20px;
    background-color:red;
`
export const CloseBtn = styled.button`
    height: 30px;
    width: 30px;
    border-radius:10px;
    background-color: red;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;

export const CardProductsContainer = styled.div`
  
    height: fit-content;
    margin: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width:540px){
    justify-content: start;
     
   }
    
`;

export const BtnBuyContainer = styled.div`  
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    width: 550px;
    height: 60px;
    @media (max-width : 1024px){
        width: 350px;
       margin: auto;
    }
`;

export const BtnBuyCart = styled.button`
    cursor:  ${props => props.disabled ? " not-allowed" : "pointer" };
    border-style: none;
    background-color: darkviolet;
    color: white;
    font-size: 20px;
    border-radius:10px;
    width: 200px;
    padding: 10px;
    transition : .6s;
    &:hover{
        background-color: mediumpurple;
        
    }
    @media (max-width : 1024px){
        width: 100px;
        font-size: 18px;
    }
   
    
`;
export const TotalPriceProducts = styled.div`
   
    width: 50%;
    display: ${props => props.total ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px auto ;
    height: 50px;
   
`;
export const TotalPriceParagragh = styled.h3`
    color: white;

`;