 export const formatPrice = (price , quantity )  => {
    let newPrice = price*quantity
     return newPrice.toFixed(3)
   }