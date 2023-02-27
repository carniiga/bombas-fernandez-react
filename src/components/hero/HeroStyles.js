import styled from "styled-components";

export const  HeroContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 50px 0 0 120px;
    height: 500px;
    width: 80%;
   
    @media(max-width:912px){
    flex-direction:column;
    width: 80%;
    height: 800px;
    }
    @media(max-width:540px){
    margin: 50px  auto;
    width: 70%;
    height: 600px;
      
    }
    @media(max-width:414px){
    margin: 50px  50px;
    width: 100%;
    height: 700px;
      
    }

    @media(max-width:412px){
    margin: 50px  50px;
    width: 100%;
    height: 600px;
      
    }
    @media(max-width: 360px){
      margin: 50px 60px;
     
      
    }
`;
export const HeroDescription = styled.div`
 
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align:  center;
    align-items: center;
    margin: 50px 0 0 100px;
    width: 500px;
    height: 500px;
    @media(max-width:1024px){
      width: 400px;
      height: 450px;
      margin: 20px auto;
    }
    @media(max-width:912px){
    margin: 20px auto;
    }
    @media(max-width:540px){
      width: fit-content;
      height: 600px;
      
    }
   
   
    @media(max-width:412px){
      width: 400px;
      height: 500px;
     
      
    }
    @media(max-width:360px){
      width: 350px;
      height: 600px;
     
      
    }

`;
export const HeroTitle = styled.h1`
    font-size: 70px;
    @media(max-width:1024px){
      font-size: 60px;
    }
    @media(max-width:412px){
      font-size: 50px;
      
    }
`;
export const HeroParagraph = styled.p`
    margin-top: 30px;
    font-size: 30px;
    @media(max-width:1024px){
      font-size: 25px;
    }
    
`;
export const HeroImg = styled.img`
    margin: 0 0 5px 0;
    height: 500px;
    width: 350px;
    @media(max-width:912px){
    flex-direction:column;
    width: 200px;
    height: 300px;
    }
    @media(max-width:540px){
      display: none
      
    }
`;


