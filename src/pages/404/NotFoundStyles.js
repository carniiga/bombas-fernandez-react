import styled from "styled-components";
import { Button } from "../../components/globalComponents/GlobalComponents";
export const NotFoundWrapper =  styled.div`
    height: 400px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    gap: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
   
`;

export const NotFoundMessageWrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    display: flex;
    justify-content: space-around;

`
export const NotFoundTitle = styled.h1`
     font-size: 60px;
    color: #1278BF; 
    text-shadow: 0px 0px 9px #508AD3;
`;
export const NotFoundParagraph = styled.p`
    font-size: 100px;
    font-weight: bold;
    color: red; 
    text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68, 6px 6px #414D68, 7px 7px #414D68, 8px 8px #414D68, 9px 9px #414D68;
`;
export const NotFoundButton = styled(Button)`
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
`