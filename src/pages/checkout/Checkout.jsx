import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutCart from '../../components/checkoutForm/checkoutCards/CheckoutCart';
import CheckoutForm from '../../components/checkoutForm/checkoutForm/CheckoutForm';


import Header from '../../components/header/Header';
import { CheckoutContainer } from './checkoutStyles';

const Checkout = () => {
 
  return (
    <>
    <Header/>
    <CheckoutContainer>   
  
      <CheckoutCart/>
      <CheckoutForm/>
      
    </CheckoutContainer>
    </>
  )
}

export default Checkout;