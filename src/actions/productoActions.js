import { AGREGAR_PRODUCTO, 
         AGREGAR_PRODUCTO_ERROR, 
         AGREGAR_PRODUCTO_EXITO, 
         COMENZAR_DESCARGA_PRODUCTOS
        } from "../types";
    
import { clienteAxios } from "../config/axios";

import Swal from "sweetalert2";

// * Crea nuevos productos
export function crearNuevoProductoAction( producto ) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            // * Inserta en la API
            await clienteAxios.post( '/productos', producto );

            // * Si todo sale bien, actualiza el state
            dispatch( agregarProductoExito( producto ) );

            // * Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch ( error ) {
            console.log( error );
            dispatch( agregarProductoError( true ) );

            // * Alerta error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente de nuevo'
            });
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


// TODO: Función que descarga los productos de la base de datos
export function obtenerProductosAction() {
    return async( dispatch ) => {
        dispatch( descargarProductos() );
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});