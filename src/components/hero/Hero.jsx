import React from 'react'
import { forwardRef } from 'react'
import { HeroContainer, HeroDescription, HeroImg, HeroParagraph, HeroTitle } from './HeroStyles'

export const Hero =  forwardRef((props , ref) => {
  return (
    <>
    <HeroContainer  >
        <HeroDescription >
            <HeroTitle>¿ A que nos dedicamos?</HeroTitle>
            <HeroParagraph ref= {ref} >Fernandez. es una empresa que presta asesoría hidráulica, venta, mantención y reparación de bombas de pozo profundo y otras ejecuciones, ofreciendo soluciones de calidad y garantía de servicio.</HeroParagraph>
        </HeroDescription>
        <HeroImg src='images/trabajador.png' alt='trabajador'/>
    </HeroContainer>
    </>
  )
});
