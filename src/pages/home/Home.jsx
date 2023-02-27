import React from 'react'
import Cart from '../../components/cart/Cart'

import { Categorias } from '../../components/categorias/Categorias'
import Header from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'

const Home = () => {
  
  return (
    <>
    <Cart />
    <Header />
    <Hero />
    <Categorias />
    </>
  )
}

export default Home