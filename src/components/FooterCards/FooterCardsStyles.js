import styled from "styled-components";
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {RiGithubLine} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
import {GrLinkedinOption}  from "react-icons/gr"
export const FooterCardContainer = styled.div`
    border-right: 2px solid grey ;
   
    align-items: center;
    width: 400px;
    height: 90%;
    display: flex;
    justify-content: space-around;
    @media (max-width:1024px){
        width: 300px; 
    }
    @media (max-width:768px){
       
        border-right: none;
        border-bottom:2px solid grey ;
        width: 400px;   
    }
   
`;
export const FooterIconContainer = styled.div`
 
    background-color: #7CB9E8;
    height: 70px;
    width: 70px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:1024px) {
    height: 50px;
    width: 50px;
    }

`;
export const CorreoIcon = styled(AiOutlineMail)`
    color: white;
    font-size: 40px;
    @media(max-width:1024px) {
    font-size:  30px;
    }
`
export const  TelIcon = styled(BsTelephone)`
    color: white;
    font-size: 40px;
    @media(max-width:1024px) {
    font-size:  30px;
    }
`;

export const LocationIcon = styled(CiLocationOn)`
    color: white;
    font-size: 60px;
    @media(max-width:1024px) {
    font-size:  30px;
    }
    

`;
export const FooterDescCard = styled.div`
  
    width: 70%;
    justify-content: center;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media(max-width:1024px) {
    flex-direction: column;
    width: 60%;
    word-break: break-all;
    }
    
`;
export const FooterDescCardParagraph = styled.p`
    color: white;
`;
export const FooterSocial  = styled.div`
    width: 150px;
    margin-left: 10px;
    height: 100px;
  
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px){
        width: 200px;
        margin-top: 20px;
        
    }
`;
export const IgContainer = styled.a`
    cursor: pointer;
    border-radius:100px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    vertical-align: middle;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
    width: 40px;
    height: 40px;
   
`;
export const IgIcon = styled(BsInstagram)`
    font-size: 30px;
  
`
export const GhSocialContainer = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 100px;
    width: 30px;
    height: 30px;
`;
export const GhIcon = styled(RiGithubLine)`
    color: black;
    font-size: 30px;
`;
export const LnContainer = styled.a`
    cursor: pointer;
    background-color: #3b5998;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;

`;
export const LnIcon = styled(GrLinkedinOption)`
    font-size: 30px;
    color: white;
`;
