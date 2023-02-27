import Categories from "../../data/Categories";
import { SELECT_CATEGORY } from "./categorias-actions";

const INITIAL_STATE= {
    categories : Categories,
    categorySelected : "Presurizadoras",

}

 const categoriesReducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
        case SELECT_CATEGORY : 
        return {
            ...state ,
            categorySelected : 
            //si la categoria seleccionada es distinta a la que ya tiene category selected, entonces category selected va a cambiar. si es igual  queda por defecto en su estado inicial. 
            action.payload !== state.categorySelected ? action.payload : "Presurizadoras" ,
        }
        default: 
        return state;
    }
} 

export default categoriesReducer;