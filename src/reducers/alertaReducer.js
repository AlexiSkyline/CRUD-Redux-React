import { MOSTRAR_ALERTA } from "../types";


const initialState = {
    alerta: null
}

export const alertaReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        default: 
            return state;
    }
}