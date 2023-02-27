import React from 'react'
import FooterCards from '../FooterCards/FooterCards'

import {  FooterContainer, FooterItemsContainer,   FooterLi,   ParagraphContainer } from './FooterStyles'

const Footer = () => {
  return (
    <>
   <FooterContainer>
    <FooterItemsContainer>
      <FooterCards/>
    </FooterItemsContainer>
   
    <ParagraphContainer>
    <FooterLi> © 2023 Todos los derechos Reservados </FooterLi>
    <FooterLi>Terminos y Condiciones   </FooterLi>
    <FooterLi>Politica y Privacidad  </FooterLi>
    <FooterLi>Trabaja Con Nosotros  </FooterLi>
    </ParagraphContainer>
   </FooterContainer>
    </>
  )
}

export default Footer