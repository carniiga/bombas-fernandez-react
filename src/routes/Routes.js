import React from 'react'
import { Routes as ReactDomRoutes , Route} from 'react-router-dom'
import NotFound from '../pages/404/NotFound'
import Checkout from "../pages/checkout/Checkout"

import Home from '../pages/home/Home'

import Felicitaciones from '../pages/felicitaciones/Felicitaciones'
// son todas nuestras de nuestra aplicacion.
const Routes = () => {

  return (
    
      <ReactDomRoutes>
        <Route path='/' element={<Home/>}></Route>
        
        {/* si hay usuario , no se va a mostrar el login, y cuando lo halla , lo manda al home*/}


        {/*  en el caso que halla un usuario, se va a mostrar la pagina de checkout, si no esta logeado , se manda al login, asi es una ruta protegida  */}
        <Route path='/checkout' element= {<Checkout/>} ></Route>

   
        {/* asi como en el checkout si no hay usuario , se manda al login 
         */}
        <Route path= "/felicitaciones" element={ <Felicitaciones/>}></Route>
        
        <Route path='*' element={<NotFound/>}></Route>
      </ReactDomRoutes>
   

   
  )
}

export default Routes;