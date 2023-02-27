import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/form/Form'
import Header from '../../components/header/Header'
import { LoginContainer, LoginTitle, LogoLogin } from './LoginStyles'

const Login = () => {
  const user = useSelector(state => state.user.user)
  
  return (
    
    <>
    <Header/>
    <LoginContainer>
     
      <LogoLogin />
      <LoginTitle>Inicia Sesion</LoginTitle>
      <Form/>
    </LoginContainer>
    </>
  )
}

export default Login
