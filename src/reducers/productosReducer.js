import { AGREGAR_PRODUCTO, 
         AGREGAR_PRODUCTO_ERROR, 
         AGREGAR_PRODUCTO_EXITO, 
         COMENZAR_DESCARGA_PRODUCTOS,
         DESCARGA_PRODUCTOS_ERROR,
         DESCARGA_PRODUCTOS_EXITO,
         OBTENER_PRODUCTO_EDITAR,
         OBTENER_PRODUCTO_ELIMINAR,
         PRODUCTO_EDITAR_ERROR,
         PRODUCTO_EDITAR_EXITOSO,
         PRODUCTO_ELIMINADO_ERROR,
         PRODUCTO_ELIMINADO_EXITOSO
        } from "../types";

// * Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar: null
}

export const productosReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case COMENZAR_DESCARGA_PRODUCTOS:
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
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR: 
        case PRODUCTO_ELIMINADO_ERROR:   
        case PRODUCTO_EDITAR_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITOSO:
            return {
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoEliminar ),
                productoEliminar: null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoEditar: action.payload
            }
        case PRODUCTO_EDITAR_EXITOSO:
            return {
                ...state,
                productoEditar: null,
                productos: state.producto.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto
                )
            }
        default:
            return state;
    }
};