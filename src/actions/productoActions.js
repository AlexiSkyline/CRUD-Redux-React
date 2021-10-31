import { AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_ERROR, 
    AGREGAR_PRODUCTO_EXITO } from "../types";
    
import { clienteAxios } from "../config/axios";

// * Crea nuevos productos
export function crearNuevoProductoAction( producto ) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            // * Inserta en la API
            await clienteAxios.post( '/productos', producto );
            // * Si todo sale bien, actualiza el state
            dispatch( agregarProductoExito( producto ) );
        } catch ( error ) {
            console.log( error );
            dispatch( agregarProductoError( true ) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true 
});

// * Si el producto se guarda en la base de datos
const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// * Si hubo un error
const agregarProductoError = ( estado ) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

