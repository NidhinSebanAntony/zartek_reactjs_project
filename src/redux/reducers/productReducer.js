import { actionTypes } from "../const"

const initialState = {
    data: [],
    loading: true
}

export const getDataReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.GET_DATA:
            return {...state, data: payload, loading: false}
        default:
            return state
    }
}