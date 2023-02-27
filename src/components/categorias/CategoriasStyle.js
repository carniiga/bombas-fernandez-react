import styled from "styled-components";

export const SectionProduct = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: left;
    @media(max-width : 540px){
        flex-direction: column; 
    }   
`;

export const CategoryContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: fit-content;
    @media(max-width : 540px){
        
        margin: 20px auto;
        flex-wrap: wrap;
        height: 100px;
        flex-direction: row;
        width: 500px;
    }   
    @media(max-width: 414px){
        max-width: 90%;
        margin-left: 50px;
        height: 150px;
    }
    @media(max-width: 540px){
        max-width: 100%;
        height: 150px;
    }
    @media(max-width:360px){
     margin-left: 60px;
     
      
    }
    
`;
export const TitleCategory = styled.h3`
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
    @media(max-width : 540px){
    display: none;
        
    }   
`;
export const CategoryItem = styled.li`
    font-size: 25px;
    padding: 5px;
    line-height: 40px;
    color: white;
    cursor: pointer;
    &:hover{
        transition: all 1s ;
        color: aqua;
    }

`
export const ProductsContainer = styled.div`
   
    display: flex;
    flex-wrap:  wrap;
    margin-left: 50px;
    width: 73%;
    height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
     width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: aqua;
  border-radius:10px ;
}
::-webkit-scrollbar-thumb:hover {
  background: aquamarine;
}
@media(max-width:820px){
        width: 50%;
    
    }
@media(max-width : 540px){
        margin: 20px auto;
        width: 450px;
        
    }   
    @media(max-width : 414px){
        margin-left: 50px;
       max-width: 430px;
        
    }   
    @media(max-width:360px){
      margin-left: 30px;
     
      
    }
`;

