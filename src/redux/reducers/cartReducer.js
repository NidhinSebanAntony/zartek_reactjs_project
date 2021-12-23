import { actionTypes } from "../const"

const initialState = {
    cartCount: 0,
    productsInCart: []
}

export const updateCart = (state=initialState, {type, payload}) => {
    let obj = {}
    let index
    switch(type) {
        case actionTypes.ADD_TO_CART:
            index = state.productsInCart.findIndex(el => el.id === payload);
            if(index>-1){
                state.productsInCart[index].count = state.productsInCart[index].count+1
                return {...state, cartCount: state.cartCount+1, productsInCart: [...state.productsInCart]}

            }
            else {
                obj = {id:payload, count: 1}
                return {...state, cartCount: state.cartCount+1, productsInCart: [...state.productsInCart, obj]}
            }
        case actionTypes.DELETE_FROM_CART: 
            index = state.productsInCart.findIndex(el => el.id === payload);
            if(index>-1){
                if(state.productsInCart[index].count > 1){
                    state.productsInCart[index].count = state.productsInCart[index].count-1
                    return {...state, cartCount: state.cartCount-1, productsInCart: [...state.productsInCart]}
                }
                else if(state.productsInCart[index].count === 1) {
                    state.productsInCart.splice(index, 1)
                    let cart_count = state.cartCount-1
                    if(state.cartCount === 0)
                        cart_count = 0
                    return {...state, cartCount: cart_count, productsInCart: [...state.productsInCart]}
                }
            }
            else {
                return state
            }
        default:
            return state
    }
}