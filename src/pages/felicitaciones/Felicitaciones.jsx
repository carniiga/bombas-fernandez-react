import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/header/Header'
import { DescParagraph, DescriptionCard, FelicitacionesButton, FelicitacionesCardContainer, FelicitacionesContainer, Felicitacionesdesc, FelicitacionesName, FelicitacionesTitle } from './felicitacionesStyles'


const Felicitaciones = () => {
    const navigate = useNavigate()
  const  {nombre , apellido , tel } = useSelector(state => state.userDetail.description)
  console.log(nombre , apellido , tel)
  return (
    <>
   <Header/>
    <FelicitacionesContainer>
        <FelicitacionesTitle>¡Gracias por tu compra !</FelicitacionesTitle>
        <Felicitacionesdesc>
                😎
            <FelicitacionesName>{nombre} {"!"}</FelicitacionesName>
            </Felicitacionesdesc>
        <FelicitacionesCardContainer>
            <DescriptionCard>
                <DescParagraph>¡Gracias por tu compra! {<FelicitacionesName>{nombre}</FelicitacionesName>} Nos pondremos en contacto para avisarte cuando sale tu Pedido, al 📱 {tel}.</DescParagraph>
            </DescriptionCard>
        </FelicitacionesCardContainer>
      <FelicitacionesButton onClick={() => navigate("/")}>Seguir Comprando </FelicitacionesButton>
    </FelicitacionesContainer>
    </>
  )
}

export default Felicitaciones