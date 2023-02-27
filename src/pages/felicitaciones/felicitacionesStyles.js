import styled from "styled-components";

export const FelicitacionesContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 60vh;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    @media(max-width:540px){
      width: 70%;
      
    }
    
    @media(max-width:412px){
     margin: 50px 50px;
     width: 380px;
     height: 500px;
   }
    @media(max-width:390px){
     
      margin: 50px 40px;
      width: 400px;
      height: 500px;
    }

    @media(max-width:360px){
      margin: 20px 20px;
      width: 450px ;
      height: 80vh;
    
    }
   
`;
export const FelicitacionesTitle = styled.h1`
    text-align: center;
    color:white;
  
    @media(max-width:360px){
      font-size: 40px;
    }
`;
export const FelicitacionesCardContainer = styled.div`
    display: flex;
    margin: auto;
    width: 50%;
    height: 180px;
    @media(max-width:540px){
      width: 60%;
    }
    @media(max-width:412px){
      width: 100%;
      height: 200px;
      align-items: center;
    }
    @media(max-width:390px){
 
      width: 400px ;
      align-items: center;
      height: 400px;
     
     
      
    }
    @media(max-width:360px){
      width: 50%;
      align-items: center;
      height: 300px;
      flex-wrap: wrap;
     
      
    }
`;
export const Felicitacionesdesc = styled.div`
    margin: auto;
    width: fit-content;
    display: flex;
    justify-content: space-between;
    @media(max-width:412px){
      align-items: center;
      height: 40px;
      width: fit-content;
    }
    @media(max-width:390px){
      width: 150px;
      height: 50px;
      align-items: center;
    }
    @media(max-width:360px){
      width: 130px;
      align-items: center;
     
      
    }
    
`;
export const FelicitacionesName = styled.p`
    font-weight: 600;
    color: aqua;
    @media(max-width:412px){
      font-size: 25px;
    }
    @media(max-width:390px){
      font-size: 25px;
    }
    @media(max-width:360px){
      font-size: 25px;
     
      
    }
`;
export const DescriptionCard = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width:100%;

    
   
`;
export const DescParagraph = styled.p`
    font-size: 18px;
    color: white;
    @media(max-width:412px){
      font-size: 25px;
    }
    @media(max-width:390px){
      font-size: 30px;
    }
    @media(max-width:360px){
     font-size: 20px;
     
      
    }
`;

export const FelicitacionesButton = styled.button`
    margin-top: 20px;
    padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  width: 200px;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}


 &:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
  
}
@media(max-width:390px){
    margin-bottom: 60px;
    }
@media(max-width:360px){
    margin-bottom: 20px;
     
  }
`;

