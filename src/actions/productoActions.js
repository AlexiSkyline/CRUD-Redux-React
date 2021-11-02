import { AGREGAR_PRODUCTO, 
         AGREGAR_PRODUCTO_ERROR, 
         AGREGAR_PRODUCTO_EXITO, 
         COMENZAR_DESCARGA_PRODUCTOS,
         DESCARGA_PRODUCTOS_ERROR,
         DESCARGA_PRODUCTOS_EXITO,
         OBTENER_PRODUCTO_EDITAR,
         OBTENER_PRODUCTO_ELIMINAR,
         PRODUCTO_ELIMINADO_ERROR,
         PRODUCTO_ELIMINADO_EXITOSO
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

        try {
            const respuesta = await clienteAxios.get( '/productos' );
            dispatch( descargarProductosExitoso( respuesta.data ) );
        } catch ( error ) {
            dispatch( descargarProductosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitoso = ( productos ) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// TODO: Función para eliminar un producto
export function eliminarProductoAction( id ) {
    return async ( dispatch ) => {
        dispatch( obtenerProductoEliminar( id ) );

        try {
            await clienteAxios.delete( `/productos/${ id }` );
            dispatch( eliminarProductoExito() );

            // * Si se acepta eliminar, se mostrara la alerta
            Swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente.',
                'success'
            );
        } catch ( error ) {
            dispatch( eliminarProductoError() );
        }   
    };
}

const obtenerProductoEliminar = ( id ) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITOSO,
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

// TODO: Almacena el producto para la edición
export function obtenerProductoEditar( producto ) {
    return ( dispatch ) => {
        dispatch( obtenerProductoEditarAction( producto ) );
    }
}

const obtenerProductoEditarAction = ( producto ) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});