import {createStore , applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from "redux-persist"
import rootReducer from "./root-reducer"

const initialState = {};

const middleWare = [];

export const store = createStore(
    //esta es la store para  saber todos los estados de nuestra aplicacion. 
    rootReducer ,
    initialState ,
    composeWithDevTools(applyMiddleware(...middleWare))

);
export const persistor = persistStore(store);
