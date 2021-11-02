import React from 'react'
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { eliminarProductoAction, obtenerProductoEditar } from '../actions/productoActions';
import Swal from 'sweetalert2';

export const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto;

    const dispacth = useDispatch();
    const history = useHistory(); // * Habilitar history para redireccionar

    const handlerClickEliminar = ( id ) => {

        // TODO: Preguntar al usuario
        Swal.fire({
            title: '¿Estas Seguro?',
            text: 'El producto se eliminara',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(( result ) => {
            if( result.value ) {
                // TODO: pasarlo al action
                dispacth( eliminarProductoAction( id ) );
            }
        });

    }

    // Todo: Función que redirige
    const handlerOnClickEdicion = ( producto ) => {
        dispacth( obtenerProductoEditar( producto ) );
        history.push( `/productos/editar/${ producto.id }` );
    }

    return (
        <tr>
            <td>{ nombre }</td>
            <td><span className='font-weight-bold'> $ { precio }</span></td>
            <td className='acciones'>

                <button
                    type='button'
                    onClick={ () => handlerOnClickEdicion( producto ) }
                    className='btn btn-primary mr-2'
                >
                    Editar
                </button>
                
                <button
                   type='button' 
                   className='btn btn-danger'
                   onClick={ () => handlerClickEliminar( id ) }
                >
                    Eliminar
                </button>

            </td>
        </tr>
    )
}
