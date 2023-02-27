import React from 'react'
import { Routes as ReactDomRoutes , Route} from 'react-router-dom'
import NotFound from '../pages/404/NotFound'
import Checkout from "../pages/checkout/Checkout"
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import { useSelector } from 'react-redux'
import Felicitaciones from '../pages/felicitaciones/Felicitaciones'
// son todas nuestras de nuestra aplicacion.
const Routes = () => {
 
  const user = useSelector(state => state.user.user)
  return (
    
      <ReactDomRoutes>
        <Route path='/' element={<Home/>}></Route>
        
        {/* si hay usuario , no se va a mostrar el login, y cuando lo halla , lo manda al home*/}

        <Route path='/login' element={user ? (<Home/>) : (<Login/>)}></Route>
        {/*  en el caso que halla un usuario, se va a mostrar la pagina de checkout, si no esta logeado , se manda al login, asi es una ruta protegida  */}
        <Route path='/checkout' element={ user ? (<Checkout/>) : (<Login/>)}></Route>

        <Route path='/register' element={<Register/>}></Route>
        {/* asi como en el checkout si no hay usuario , se manda al login 
         */}
        <Route path= "/felicitaciones" element={user ? <Felicitaciones/> : <Login/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </ReactDomRoutes>
   

   
  )
}

export default Routes;