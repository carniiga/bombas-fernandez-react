import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const Product = () => {
   
const selectCategory = useSelector(state  => state.categories.categorySelected.category)
const products = useSelector(state => state.products.products);
let productsCategory = [] ;

  return (
    <>
    {products.map((product) => {
      if(selectCategory === product.category){
        productsCategory.push(product)
      }
    })}
   
    {productsCategory.length 
    ? (productsCategory.map((producto) => (
      <ProductCard key={producto.id} {...producto}/>
    )))
    : (products.map((product) => (
      <ProductCard key={product.id} {...product}/>
    )).slice(0,8))}
    
    
    </>
  )
}

export default Product;