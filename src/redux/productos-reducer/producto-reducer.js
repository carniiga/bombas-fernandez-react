import productsData from "../../data/products";

const INITIAL_STATE = {
    products : productsData ,
}

const productsReducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
        default :
        return state;
    }
}

export default productsReducer;