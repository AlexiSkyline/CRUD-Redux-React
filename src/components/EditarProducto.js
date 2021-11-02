import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';

export const EditarProducto = () => {

    // * Producto a editar
    const producto = useSelector( state => state.productos.productoEditar );

    
    if( !producto ) return;
    const { nombre, precio, id } = producto;

    const handlerOnSubmitEditar = ( e ) => {
        e.preventDefault();

        
    }

    return (
        <div className='row justify-content-center mt-4'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>

                    <h2 className='text-center mb-4 font-weight-bold'>
                        Editar Producto
                    </h2>

                    <form 
                        onSubmit={ handlerOnSubmitEditar }
                    >
                        <div className='form-group'>
                            <label>Nombre Producto:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre Producto'
                                name='nombre'
                                value={ nombre }
                            />
                        </div>

                        <div className='form-group'>
                            <label>Precio:</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Precio del Producto'
                                name='precio'
                                value={ precio }
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >
                            Guardar Cambios
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    );
}
