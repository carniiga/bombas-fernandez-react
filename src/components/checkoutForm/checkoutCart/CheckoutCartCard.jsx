import React from 'react'
import { formatPrice } from '../../cartCard/cartCard-utils'
import { CheckoutCant, CheckoutCardContainer, CheckoutCardImg, CheckoutCardModel, CheckoutCardName, CheckoutCardPrice, CheckoutDescContainer, CheckoutImgContainer } from '../checkoutCards/checkoutCardStyles'
// este componente maneja las cartas de los productos del checkout, 
const CheckoutCartCard = ({cardImg , marca , modelo , price , quantity }) => {
  return (
    <>
    <CheckoutCardContainer>
        <CheckoutImgContainer>
            <CheckoutCardImg src={cardImg}></CheckoutCardImg>
        </CheckoutImgContainer>
        <CheckoutCant> x{quantity}</CheckoutCant>
        <CheckoutDescContainer>
            <CheckoutCardName>{marca}</CheckoutCardName>
            <CheckoutCardModel>{modelo}</CheckoutCardModel>
            <CheckoutCardPrice> {formatPrice(price,quantity)} {"AR$"}</CheckoutCardPrice>
        </CheckoutDescContainer>
    </CheckoutCardContainer>
    </>
  )
}

export default CheckoutCartCard