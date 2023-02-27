import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
    background-image: var(--bg-img);
    width: 1300px;
    height: 100px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width : 1024px) {
        width: 1000px;
    }
    @media(max-width : 912px){
        width: 850px;
    }
    @media(max-width : 820px){
        width: 800px;
    }
    @media(max-width : 768px){
        width: 730px;
       
    }   
    @media(max-width : 540px){
        width: 500px;
       
    }  
    @media(max-width : 412px){
        width: 480px;
       
    }    
    
   
   
    
`;
export const LogoStyled = styled.img`
    height: 60px;
    width: 80px;
    margin-left: 30px;
    cursor: pointer;
   
`;
export const Navbar = styled.nav`
    
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width : 1024px){
        width: 600px;
       
    }
    @media(max-width : 912px){
    display: ${props => props.isOpen ? "flex" :"none"};
    position: absolute;
    width: 300px;
        margin-top: 300px;
        
    }
     
`;
export const CartItemContainer = styled.div`
  
    position: relative;
`;

export const NavbarItems = styled.ul`
   color: white;
    width: 600px;
    margin-left: 500px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    @media(max-width:1024px){
        width: 100%;
        margin-left: 0;
    }
    @media(max-width : 912px){
    z-index: 333;
    background-image: var(--bg-img);
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 400px;
    gap: 0;
    font-size: 30px;

    }
    @media(max-width : 912px){
        font-size: 20px;
    }
  
   
`;

export const AboutUs = styled.li`
color: white;
    list-style: none;
    text-decoration: none;
    transition: .3s ease all;
 &:hover{
        border-bottom: 1px solid orange;
       
    }
`;
export const NavbarItem = styled(NavLink)`
    color: white;
    list-style: none;
    text-decoration: none;
    transition: .3s ease all;
 &:hover{
        border-bottom: 1px solid orange;
       
    }

`;

export const ProductNav = styled.li`
    font-size: 25px;
    transition: transform 1s;
   box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    &:hover{
       
        transform: translateY(-10px);
    }
    @media(max-width : 912px){
        font-size: 30px;
    }
    @media(max-width : 540px){
        font-size: 20px;
    }
`;
export const RedesSociales = styled.div`   
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 60px 0;
    cursor: pointer;
    width: 60px;
    height: 80px;
    @media(max-width : 820px){
        margin: 0 0px 60px 20px;
        width: 200px;
       
    }   
    @media(max-width : 540px){
        margin: 0 0px 60px 0px;
        width: 60px;
       
    }   
   
`;
export const LinkRedes = styled.a`
    color: white;

`;

export const CountCartcontainer = styled.div`
    border: 2px solid white;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    margin:  -15px 0 0 10px;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    @media(max-width : 912px){
        width: 25px;
        height: 25px;
        font-size: 20px;
    }
    @media(max-width : 540px){
        width: 20px;
        height: 20px;
        
    }
`;

export const CountCart = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    @media(max-width : 912px){
        font-size: 20px;
    }
    @media(max-width : 540px){
        font-size: 15px;
    }
`;




