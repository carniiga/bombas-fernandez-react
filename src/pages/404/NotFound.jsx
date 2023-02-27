import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import { NotFoundButton, NotFoundMessageWrapper, NotFoundParagraph, NotFoundTitle, NotFoundWrapper } from './NotFoundStyles';
// en el caso que falle alguna ruta o alguna direccion erronea  se muestra el error 404 con un boton para volver al home
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <NotFoundWrapper>
      <NotFoundMessageWrapper>
      <NotFoundTitle> ¡Ups! parece que hay un error </NotFoundTitle> 
      <NotFoundParagraph>  404</NotFoundParagraph>
      </NotFoundMessageWrapper>
      <NotFoundButton onClick={()=> navigate("/")}>Volver a Inicio </NotFoundButton>
      
    </NotFoundWrapper>

    </>
  )
}

export default NotFound;