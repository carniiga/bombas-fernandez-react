import {  ADD_TO_CART, BTN_DECREMENT, BTN_INCREMENT, CLEAR_CART, TOGGLE_HIDDEN_CART , TOGGLE_HIDDEN_MENU } from "./cart-actions";
import productsData from "../../data/products";


export const INITIAL_STATE = {
    products : productsData,
    hidden :  true,
    hiddenMenu : true,
    cart : [] ,
}

export const cartReducer = (state = INITIAL_STATE , action) => {
    
    switch(action.type) {
       
        case ADD_TO_CART : 
        //si el caso es "add to cart"  se crea una variable donde recorre  products y se comprueba si existe el producto seleccionado. 
        let addProductCart = state.products.find((producto)=> producto.id === action.payload)
        //en el caso que exista el producto ya en el carrito , se va aumentar su quantity. 
        let itemInCart =  state.cart.find((item) => item.id === addProductCart.id)

        return itemInCart 
        // recorremos el array del cart y comprobamos si existe el producto, en el caso que exista se crea un objeto con la propiedad quantity. para asi luego aumentar o disminuir la cantidad si se necesita. asi tambien su precio.
        ? {...state ,
            cart : state.cart.map((item)=> item.id===addProductCart.id 
            ? {...item , quantity : item.quantity +1}
            : item
            ),
        } 
        //en el caso que no exista el producto en el carro, solo se crea su propiedad quantity , iniciada en 1 
        : {...state , 
            cart : [...state.cart , {...addProductCart , quantity : 1}],
            }
       
        case TOGGLE_HIDDEN_CART :
            //como el carro aparece oculto por defecto, con el action.payload se niega y se vuelve a true, cuando el carro este abierto el menu responsive se cierra. 
            return {
                ...state ,
                hidden :
                !action.payload,
                hiddenMenu: false,
            }

        case BTN_INCREMENT :
            //se comprueba si producto  ya se encuentra en el carrito, y tambien su propiedad quantity. 
            let quantityIncrement = state.cart.find((item) => item.id === action.payload)
            //en el caso que se encuentre , se le va a sumar 1 cada vez que  se requiera. 
            return quantityIncrement.quantity = 1 ? {
                ...state , 
                cart : state.cart.map((item) =>item.id === action.payload 
                ? 
                { ...item , quantity : item.quantity +1} : item
                )
            } 
            :
             {
                ...state
            }
        case BTN_DECREMENT : 
        //tal como el incremente , se una variable se guarda el recorrido del item en el cart. si existe  y la cantidad es mayor a 1, se puede decrementar si se necesita. 
        let quantityDecrement  = state.cart.find((item) => item.id === action.payload)
        // cada vez que se  aprieta en el boton decrement se va a restar la cantidad -1 
        return  quantityDecrement.quantity > 1 ? 
        {
            ...state , 
            cart : state.cart.map((item) => item.id === action.payload 
            ? {...item , quantity : item.quantity -1 } : item 
            ),
            
        } : 
        {
            // para borrar el item del carro 
            ...state ,
            cart : state.cart.filter((item)=> item.id !== action.payload),
        }
        case TOGGLE_HIDDEN_MENU :
            //recibe un booleano para poder abrir o cerrar el carro, (se niega directamente en dispatch.)
            return {
                ...state ,
              hiddenMenu : 
             action.payload
            
           
            }
        case CLEAR_CART : 
        return INITIAL_STATE;
        default  :
        return state;
    }
} 
