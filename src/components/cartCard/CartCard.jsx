import React from 'react'
import { useDispatch } from 'react-redux'
import * as cartActions from "../../redux/cart/cart-actions"
import { BtnDecrement,  BtnIncrement, CartCardDescContainer, HandleQuantityContainer, ImgCartCard, Quantity , CardProductContainer, TitleModel, DescModel, DescPrice, BtnHandleContainerIncrement, BtnHandleContainerDecrement} from './CartCardStyles'
// import {BsFillTrashFill} from "react-icons/bs"}
import { TrashIcon } from './CartCardStyles'
import { formatPrice } from './cartCard-utils'

// este componente es la card del carrito, donde tambien se va a manajear la cantidad de  cada producto. 
const CartCard = ({marca , modelo ,cardImg , price  , quantity , id }) => {
 const dispatch = useDispatch()

  return (
    <>
    <CardProductContainer>
    <ImgCartCard  src={cardImg} alt={modelo}></ImgCartCard>
    <CartCardDescContainer>
      <TitleModel>{marca}</TitleModel>
      <DescModel>{modelo}</DescModel>
      <DescPrice> {formatPrice(price , quantity)} {"AR$"}</DescPrice>
    </CartCardDescContainer>
    <HandleQuantityContainer>
      {/*  si queremos restar la cantidad , despachamos accediendo a drement, pasandole la id del producto.  */}
      <BtnHandleContainerDecrement onClick={() => dispatch(cartActions.btnDecrement(id))}>
        {/*  si la cantidad del producto es igual a 1, en vez de mostrarse un "-"  se renderiza un icono de basurita para borrar el producto del carro.  */}
        {quantity === 1 ? 
        <TrashIcon/>  
        : 
        <BtnDecrement  > - </BtnDecrement>}
        
      </BtnHandleContainerDecrement>
      <Quantity> x {quantity}</Quantity>
      <BtnHandleContainerIncrement>
        {/*  si queremos aumentar la cantidad del producto se despacha llamando a increment y pasandole la id del producto.  */}
        <BtnIncrement onClick={() => dispatch(cartActions.btnIncrement(id))}>+</BtnIncrement>
      </BtnHandleContainerIncrement>
      
      
    </HandleQuantityContainer>
    </CardProductContainer>
    
    </>
  )
}

export default CartCard
