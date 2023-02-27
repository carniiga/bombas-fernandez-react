import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const UserContainer = styled.div`
    z-index: 230;
    position:absolute;
    background-image: var(--bg-img);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    display: ${props => props.isHidden ? "none": "flex"};
    width: 200px;
    height: 150px;
    margin:  0 0 0 1130px;
    flex-direction: column;
    @media(max-width: 1024px){
        margin:  0 0 0 800px;
    }
    @media(max-width: 912px){
        margin:  80px 0 0 610px;
        height: 200px;
        width: 300px;
    }
    @media(max-width: 820px){
        margin:  80px 0 0 500px;
        height: 200px;
        width: 300px;
    }
    @media(max-width: 768px){
        margin:  80px 0 0 450px;
        height: 200px;
        width: 300px;
    }
    @media(max-width: 540px){
        margin:  80px 0 0 240px;
        height: 200px;
        width: 300px;
    }
    @media(max-width: 414px){
        margin:  80px 0 0 200px;
        height: 200px;
        width: 300px;
    }
    @media(max-width: 412px){
        margin:  80px 0 0 170px;
        height: 200px;
        width: 300px;
    }
    
    
   
    
`;
export const UserBtnClose = styled.p`
    font-weight: 600;
    font-size: 20px;
`;
export const UserBtnContainer = styled.div`

    cursor: pointer;
    background-color: red;
    color: white;
    border-radius:5px ;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20px;
    height: 20px;
    
   
`;
export const CloseUserModalContainer = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    
    
`;
export const UserTitleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 2px solid grey;
    height: 40px;
`;

export const UserTitle = styled.p`
    color: white;
    @media(max-width: 912px){
       font-size: 22px;
    }
`;
export const UserListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    margin:  5px 0 0 5px;
    height: 80px;
    width: 80%;
`;

export const UserList = styled.li`
    color:white;
    width: fit-content;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid grey;
        
    }
    @media(max-width: 912px){
       font-size: 20px;
    }
`;
export const LinkStyled = styled(NavLink)`
    color:white;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid grey;
        
    }
    @media(max-width: 912px){
       font-size: 20px;
    }

`;