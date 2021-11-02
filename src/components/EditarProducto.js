import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarProductoAction } from '../actions/productoActions';

export const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // * nuevo State del producto a editar
    const [ producto, setProductoEditar ] = useState({
        nombre: '',
        precio: ''
    });

    // * Producto a editar
    const productoEditar = useSelector( state => state.productos.productoEditar );
    
    // * llena el state automaticamente
    useEffect(() => {
        setProductoEditar( productoEditar );
    }, [productoEditar]);

    // TODO: Leer los datos del formulario
    const handlerOnChange = ( e ) => {
        setProductoEditar({
            ...producto,
            [ e.target.name ]: e.target.value
        });
    }

    const { nombre, precio } = producto;

    const handlerOnSubmitEditar = ( e ) => {
        e.preventDefault();

        dispatch( editarProductoAction( producto ) );
        
        history.push( '/' );
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
                                onChange={ handlerOnChange }
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
                                onChange={ handlerOnChange }
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
