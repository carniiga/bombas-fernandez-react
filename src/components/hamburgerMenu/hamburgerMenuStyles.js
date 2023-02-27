import styled from "styled-components";
import {GiHamburgerMenu} from "react-icons/gi"

export const HamburgerMenuContainer = styled.div`
    display: none;
   @media (max-width:992px){
    display: flex;
   }
   @media (max-width:912px){
    margin-left: 550px;
   }
   @media (max-width: 768px){
    margin-left: 500px;
   }
   @media (max-width: 540px){
    margin-left: 250px;
   }
   @media(max-width : 412px){
    margin-left: 200px;
       
    }   
`;
export const HamburgerIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
    color: grey;
    font-size: 30px;
`