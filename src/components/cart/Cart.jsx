import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../cartCard/CartCard'
import * as cartActions from "../../redux/cart/cart-actions"
import {  BtnBuyCart, BtnBuyContainer, CardProductsContainer, CartContainer, CartTitle, CloseBtn, CloseBtnContainer, NotProductsCart, RemoveAllContainer, RemoveAllIcon, RemoveAllParagraph, TotalPriceParagragh, TotalPriceProducts} from './CartStyles'
import {  isDisabled } from './cart.utils'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  //accedemos al estado global de nuestra aplicacion para abrir o cerrar el carrito.
const isHidden = useSelector(state => state.cart.hidden)
// con el dispatch vamos a despachar las acciones que querramos a nuestros estados. 
const dispatch = useDispatch();
const navigate = useNavigate()
//accedemos  a los productos del carrito si es que existen. 
const cartProducts = useSelector(state => state.cart.cart);
let prices = [];
const totalPrices = () => {
  //recorremos los productos del carrito, y multiplicamos su cantidad por su precio . A la vez lo pusheamos al array de precios para luego sumarlos y mostrar el Total del precio de todos los productos. 
  cartProducts.map((product)=> {
    prices.push(product.price*product.quantity)
  })
}
totalPrices();
//el total le aplicamos un reduce para sumar los precios de los productos. tambien le aplicamos un toFixed para la cantidad de digitos despues de la "," 
let total = prices.reduce((acc , value ) => acc + value , 0).toFixed(3)


  return (
    <>
   
    <CartContainer isHidden = {isHidden}>
        <CloseBtnContainer>
          {/* despachamos para cerrar el carrito  cuando clickemos en la X  */}
        <CloseBtn onClick={() => dispatch(cartActions.toggleHiddenCart(false))}>X</CloseBtn>
        </CloseBtnContainer>
        <CartTitle> Productos </CartTitle>
        <RemoveAllContainer>
          {/*  si queremos vaciar el carro. */}
          <RemoveAllIcon onClick={()=> dispatch(cartActions.clear_cart())}></RemoveAllIcon>
          <RemoveAllParagraph>Todo</RemoveAllParagraph>
        </RemoveAllContainer>
        <CardProductsContainer>
        {/* si el carrito tiene productos, se  hara un map para poder mostrarlo en el carrito, caso contrario se muestra un mensaje de que no hay productos.  */}
          {cartProducts.length ? (
            cartProducts.map((producto) => (
              <CartCard key={producto.id} {...producto}/>
            ))
          ) : <NotProductsCart>no hay productos.</NotProductsCart> }
                
        </CardProductsContainer>
        {/* si no hay productos el total no se va a mostrar,  caso contrario si  */}
        <TotalPriceProducts total  = {cartProducts.length >=1 ? (true) : (false)}>
          <TotalPriceParagragh >Total : {total} {"AR$"}  </TotalPriceParagragh>
        </TotalPriceProducts>
        <BtnBuyContainer>
          {/* si no hay productos en el carro el boton de comprar va a estar deshabilitado. Si lo hay se habilita  Con un navigate al checkout del carrito.  */}
          <BtnBuyCart disabled={isDisabled(cartProducts)} onClick={() => navigate("/checkout")}>Comprar</BtnBuyCart>

        </BtnBuyContainer>
    </CartContainer>
    </>
  )
}

export default Cart
