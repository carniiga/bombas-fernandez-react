import React from 'react'
import { HamburgerIcon, HamburgerMenuContainer } from './hamburgerMenuStyles'
import * as cartActions from "../../redux/cart/cart-actions"
import { useDispatch, useSelector } from 'react-redux'


const HamburgerMenu = () => {
  //accedemos al estado de nuestra aplicacion para manejar el menu de hamburguesa. 
  const handleMenu = useSelector(state => state.cart.hiddenMenu)
  const dispatch = useDispatch()
  return (
    <>
    <HamburgerMenuContainer>
        <HamburgerIcon onClick={() => dispatch(cartActions.toggleHiddenMenu(!handleMenu))}/>
    </HamburgerMenuContainer>
    </>
  )
}

export default HamburgerMenu