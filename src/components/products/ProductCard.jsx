import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddBtnProduct, CardPrice, CardPriceContainer, CardProduct, FooterCard, ProductImg, ProductModel, ProductName } from './ProductsCardStyles';
import * as cartActions from "../../redux/cart/cart-actions"
const ProductCard = ({marca,modelo,price,cardImg , id}) => {
  
  const dispatch = useDispatch();
  return (
    <>
    <CardProduct>
        <ProductImg src={cardImg}></ProductImg>
        <ProductName>{marca}</ProductName>
        <ProductModel>{modelo}</ProductModel>
        <FooterCard>
        <CardPriceContainer>
            <CardPrice>{price} {"AR$"} </CardPrice>
            <AddBtnProduct  id={id} onClick = {() => dispatch(cartActions.addToCart(id))} >+</AddBtnProduct>
        </CardPriceContainer>
        </FooterCard>
    </CardProduct>
    </>
  )
}

export default ProductCard;
