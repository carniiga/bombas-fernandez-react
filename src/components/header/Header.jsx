import React, {  useEffect } from 'react'
import {   LinkRedes, LogoStyled, Navbar, NavbarItem, NavbarItems, ProductNav, RedesSociales, StyledHeader  ,  CountCartcontainer, CountCart, CartItemContainer, AboutUs} from "./HeaderStyles"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineInstagram}from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import { useDispatch, useSelector  } from 'react-redux'
import * as cartActions from "../../redux/cart/cart-actions"
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import { useLocation } from 'react-router-dom'
const Header = ({doScroll}) => {


  const dispatch = useDispatch()
  //accedemos al total de productos de nuestro carrito para mostrarlo en el navbar. 
  let productCount = useSelector(state => state.cart.cart).length
  // verificamos y manejamos  el menuResponsive 
  let menuOpen = useSelector(state => state.cart.hiddenMenu)
  const {pathname} = useLocation()
  
  
 
  useEffect(() => {
    // este useEffect va a manejar el abrir o cerrar del menuResponsive y del carrito. 
    if(menuOpen){
      dispatch(cartActions.toggleHiddenMenu())
    }
  },[pathname])
  return (
    <>
    <StyledHeader>
      
      <NavbarItem to={"/"}> 
        <LogoStyled src='/images/logo.png' alt="logobf" /></NavbarItem>
        <Navbar isOpen ={menuOpen}>
            <NavbarItems>
          
                <AboutUs  >Sobre Nosotros</AboutUs>
                <ProductNav onClick={() => doScroll("productsRef")}  >Productos</ProductNav>
                {/* si tenemos un usuario , se va a mostrar el icono de carrito  para interactuar y asi abrirlo. */}
             
                   <NavbarItem >
                     <CartItemContainer>
                   
                   <CgShoppingCart  onClick={() =>  dispatch(cartActions.toggleHiddenCart(true))} />
                 <CountCartcontainer>
                 <CountCart>{productCount}</CountCart>
                 </CountCartcontainer>
                   </CartItemContainer>
                  
                 </NavbarItem>
                
                
            </NavbarItems>
        </Navbar>
        <HamburgerMenu/>
        <RedesSociales>
          <LinkRedes href='https://www.instagram.com/frz.aguss/' target={"_blank"}>
          <AiOutlineInstagram fontSize={"25px"}/>
          </LinkRedes>
          <LinkRedes href='https://www.linkedin.com/in/agustin-fernandez-48907b25b/' target={"_blank"}>
          <BsLinkedin fontSize={"25px"}/> 
          </LinkRedes>
          
        </RedesSociales>
    </StyledHeader>
    </>
  )
}

export default Header