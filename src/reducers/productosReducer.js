import { AGREGAR_PRODUCTO, 
         AGREGAR_PRODUCTO_EXITO } from "../types";

// * Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

export const productosReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            } 
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [ ...state.productos, action.payload ]
            }
        default:
            return state;
    }
};