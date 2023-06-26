import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart/cart-reducer";
import categoriesReducer from "./categorias/categorias-reducer";
import productsReducer from "./productos-reducer/producto-reducer";
import userDetailReducer from "./userDetails/userDetails-reducer";
// aca  se van a almacenar los datos en el local storage, tanto carrito de compras como toda la informacion del user. 
const persistConfig = {
    key : "root" ,
    storage ,
    whitelist : ["cart" , "user"] 
};

const rootReducer = combineReducers({
    //root reducer una variable que almacena combineReducers , para  luego utilizarlos. 
    categories : categoriesReducer,
    products : productsReducer,
    cart :  cartReducer ,
    
    userDetail : userDetailReducer,
   
});

export  default persistReducer(persistConfig , rootReducer);

