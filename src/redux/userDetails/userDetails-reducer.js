import { RESUMEN_DESCRIPTION } from "./userDetails-actions";

const INITIAL_STATE = {
    description : null,
}

 const userDetailReducer = (state = INITIAL_STATE , action )=> {
    switch(action.type){
        case RESUMEN_DESCRIPTION :
            return {
                //cuando se haya completado la compra con los datos personales,  va a ver una descripcion de esos campos. 
                ...state ,
                description: 
                {...action.payload}
            }
        default :
        return state
    }
}

export default userDetailReducer;
