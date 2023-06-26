

import { useRef } from 'react'
import Cart from '../../components/cart/Cart'

import { Categorias } from '../../components/categorias/Categorias'
import Header from '../../components/header/Header'

import { Hero } from '../../components/hero/Hero'

const Home = () => {
 const productsRef = useRef();
  const  aboutUsRef = useRef();
  const doScroll = ref => {
    if(ref = productsRef) {
      window.scrollTo(
        ref.current?.getBoundingClientRect().x,
        ref.current?.getBoundingClientRect().y
      );
    }
  
  };

  
 
  return (
    <>
    <Cart />
    <Header  doScroll={doScroll} />
    <Hero aboutUsRef ={aboutUsRef}/>
    <Categorias ref={productsRef} />
    </>
  )
}

export default Home