export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const  CLEAR_CART = "CLEAR_CART"
export const TOGGLE_HIDDEN_CART = "TOGGLE_HIDDEN_CART"
export const BTN_DECREMENT = "BTN_DECREMENT "
export const BTN_INCREMENT = "BTN_INCREMENT"
export const TOGGLE_HIDDEN_MENU ="TOGGLE_HIDDEN_MENU"


    //esta funcion recibe un booleano para abrir o cerrar el menu de hamburguesa. .
export const toggleHiddenMenu = menuHidden => ({
    type : TOGGLE_HIDDEN_MENU,
    payload : menuHidden
})
//esta funcion recibe la id del producto seleccionado para luego  agregarlo al carrito.
export const addToCart = id =>  ({
    type : ADD_TO_CART ,
    payload : id ,
    
});

//recibe un booleano para abrir o cerrar el carrito.
export const toggleHiddenCart = isHidden => ({
    type: TOGGLE_HIDDEN_CART,
    payload : isHidden,
})

//recibe la id del producto seleccionado para aumentar su quantity
export const btnIncrement = id => ({
    type : BTN_INCREMENT,
    payload : id ,
})
//recibe la id del producto seleccionado para disminuir  su quantity
export const btnDecrement  = id => ({
    type : BTN_DECREMENT,
    payload : id ,
})

//esta funcion solamente al ser despechada limpiar el cart.
export const  clear_cart = () => ({
    type : CLEAR_CART,
})
