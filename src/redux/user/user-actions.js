export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const MODAL_USER_HIDDEN= 'MODAL_USER_HIDDEN';

export const setCurrentUser = user => ({
  //recibe un usuario 
  type: SET_CURRENT_USER,
  payload: user,
});

export const modalUserMenu = () => ({
  //es el modal del usuario 
  type: MODAL_USER_HIDDEN,
});