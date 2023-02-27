import styled from "styled-components";

export const FooterContainer = styled.div` 
    margin-top: 50px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:1024px){
        width: 100%;
    }
    @media(max-width:768px){
        height: 500px;
        width: 100%;
    }
    @media(max-width : 540px){
        height: 600px;
        width: 100%;
        
    }   
    @media(max-width : 414px){
        margin-left: 50px;
        
    }   
`;
export const FooterItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 100px;
    @media (max-width :  768px){
        flex-direction: column;
        height: 400px;
    }
  
`;
export const ParagraphContainer = styled.ul`
    justify-content: space-between;
    display: flex;
    margin: auto;
    width: 60%;
    height: 50px;
    @media (max-width : 768px){
      width: 80%;
    }
    @media (max-width : 540px){
        flex-direction: column;
      height: 150px;
    }
   
       
  
`;
export const FooterLi = styled.li`
    
    color: white;
    @media (max-width : 1024px){
      text-align: center;
    }
    @media (max-width : 768px){
      font-size: 20px;
    }
    

`;