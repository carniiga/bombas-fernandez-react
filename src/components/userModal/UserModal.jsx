import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'
import * as userActions from "../../redux/user/user-actions"
import { CloseUserModalContainer, UserBtnClose, UserBtnContainer, UserContainer, UserList, UserListContainer, UserTitle, UserTitleContainer } from './userModalStyles'
import { LinkStyled } from './userModalStyles'

// este componente muestra informacion del usuario logeado y para ir al apartado de checkout. 
const UserModal = () => {
    const dispatch=useDispatch()
    const {pathname} = useLocation()
    //accedemos al estado global del usuario si es que existe y al modalUser para  mostrarlo o ocultarlo. 
    const {menuHidden , user } = useSelector(state => state.user)
    useEffect(() => {
      if(!menuHidden)
      dispatch(userActions.modalUserMenu())
    
    }, [pathname])
    
   
  return (
    <>
    <UserContainer isHidden={menuHidden}>
        <CloseUserModalContainer>
            <UserBtnContainer>
                <UserBtnClose onClick={() => dispatch(userActions.modalUserMenu())}>X</UserBtnClose>
            </UserBtnContainer>
        </CloseUserModalContainer>
        <UserTitleContainer>
            {/* si existe usuario , mostramos su nombre en el modal user */}
            <UserTitle>{user? (user.displayName) : ("sin usuario")}</UserTitle>
        </UserTitleContainer>
        <UserListContainer>
            <LinkStyled to={"/checkout"}>Ver Resumen</LinkStyled>
            {/* si el usuario quiere cerrar sesion, se llama a auth de firebase para deslogearse  */}
            <UserList onClick={()=> auth.signOut().then(dispatch(userActions.modalUserMenu()))}>Cerrar Sesión</UserList>
        </UserListContainer>
    </UserContainer>
    </>
  )
}

export default UserModal