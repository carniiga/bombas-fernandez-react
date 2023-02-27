import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonConfirmed, ButtonConfirmedContainer, TotalCheckout, TotalCheckoutContainer } from './checkoutCardStyles'
import CheckoutCartCard from '../checkoutCart/CheckoutCartCard'
import { CheckoutCartContainer, CheckOutCartTitle, CheckOutProductsContainer } from '../checkoutCart/checkoutCartStyles'
import { useNavigate } from 'react-router-dom'

// en este componente vamos a manejar el checkout del carrito. 
const CheckoutCart = () => {
    //  accedemos a los productos agregados al carrito. 
    const cartProducts = useSelector(state => state.cart.cart)
    const navigate = useNavigate()
  let prices = [];
  //recorremos los productos del carrito, y multiplicamos su cantidad por su precio . A la vez lo pusheamos al array de precios para luego sumarlos y mostrar el Total del precio de todos los productos. 
const totalPrices = () => {
  cartProducts.map((product)=> {
    prices.push(product.price*product.quantity)
  })
}
totalPrices();
//el total le aplicamos un reduce para sumar los precios de los productos. tambien le aplicamos un toFixed para la cantidad de digitos despues de la "," 
let total = prices.reduce((acc , value ) => acc + value , 0).toFixed(3)
  return (
   <>
   <CheckoutCartContainer>
    <CheckOutCartTitle>Resumen de tus productos  : </CheckOutCartTitle>
    <CheckOutProductsContainer>
      {/* mostramos los productos agregados al carrito para el resumen de lo que el usuario va a comprar.  */}
        {cartProducts.map((product) => (
            <CheckoutCartCard key={product.id} {...product}/>
        ))}
    </CheckOutProductsContainer>
    <ButtonConfirmedContainer>
        <TotalCheckoutContainer>
            <TotalCheckout> Total : {total} {"AR$"}: </TotalCheckout>
        </TotalCheckoutContainer>
        {/* si el usuario  quiere seguir comprando se lo dirige al home para seguir viendo productos y/o comprando. */}
        <ButtonConfirmed onClick={() => navigate("/")}>Seguir Comprando</ButtonConfirmed>
    </ButtonConfirmedContainer>
   </CheckoutCartContainer>
   </>
  )
}

export default CheckoutCart