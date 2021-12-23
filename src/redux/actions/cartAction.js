import { actionTypes } from "../const"

export const addToCart = (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: id
    }
}

export const deleteFromCart = (id) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: id
    }
}