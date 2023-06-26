import React from 'react'
import {  CategoryContainer, CategoryItem,ProductsContainer,SectionProduct, TitleCategory } from './CategoriasStyle'

import * as categoriesActions from "../../redux/categorias/categorias-actions"

import { useDispatch, useSelector } from 'react-redux'
import Product from '../products/Product'
import { forwardRef } from 'react'

//en este componente se va a manejar las categorias y los productos . 
export const Categorias =  forwardRef((props , ref) => {
  
  //accedemos al estado global de las categorias. 
  const categories = useSelector(state => state.categories.categories);
 
  const dispatch = useDispatch();
  return (
    <>
   <SectionProduct>
    <CategoryContainer>
    <TitleCategory >Categorias</TitleCategory>
    {/* mapeamos las categorias de nuestro estado global, luego con el evento click vamos a despachar la categoria seleccionada. */}
    {categories.map((category) => (
      <CategoryItem  
      onClick={()=> dispatch(categoriesActions.selectCategory(category))}
       key= {category.id}>{category.category}</CategoryItem> 
    ))}
   
  
    </CategoryContainer>
    <ProductsContainer ref={ref}>
      <Product/>
    </ProductsContainer>
    
   </SectionProduct>
   
   
    </>
  )
});

