
 export const isDisabled = cartProducts => {
    if(cartProducts.length < 1 ){
     return true;
    }
    return false ;
   };

export const cartLength = cartProducts => {
      if(cartProducts.length >= 1){
       return true;
      }
      return false ;
     };
   




     
 
  


