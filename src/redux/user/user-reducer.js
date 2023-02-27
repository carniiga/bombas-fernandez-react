import { MODAL_USER_HIDDEN, SET_CURRENT_USER } from "./user-actions";
// en el reducer del usuario se va a manejar el usuario actual y el modal menu del usuario. 
const INITIAL_STATE = {
    menuHidden : true,
    user :null,

}

const userReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case MODAL_USER_HIDDEN :
            //por defecto el modal va a estar oculto, si se quiere mostrar se vuelve a false , y asi lo contrario sucesivamente.

            return {
                ...state ,
                menuHidden: !state.menuHidden
            }
            case SET_CURRENT_USER :
                return {
                    ...state ,
                 user : 
                 //si se encuentra un usuario, ese va a ser el usuario actual. si no sigue siendo null , es decir no hay un usuario.
                 action.payload !== state.user  ? action.payload : null ,
                }
       
        default : 
        return state;
    }
}
export default userReducer;