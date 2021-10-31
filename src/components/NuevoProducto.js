import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// * Action de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

export const NuevoProducto = () => {
    // * state del componentes
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState(0);

    // TODO: utiliza use dispact y te crea una función
    const dispatch = useDispatch();

    // TODO: manda a llamar el action de productoAction
    const agregarProducto = ( producto ) => dispatch( crearNuevoProductoAction( producto ) );

    // * Cuando el usuario haga submit
    const handlerSubmit = (e) => {
        e.preventDefault();

        // * Validar formulario
        if( nombre.trim() === '' || precio <= 0 ) {
            return;
        }
        // * Si no hay errores

        // * Crea el nuevo producto
        agregarProducto({ 
            nombre,
            precio
        });
    }

    return (
        <div className='row justify-content-center mt-4'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>

                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>

                        <form 
                            onSubmit={ handlerSubmit }
                        >
                            <div className='form-group'>
                                <label>Nombre Producto:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                    value={ nombre }
                                    onChange={ e => setNombre( e.target.value ) }
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
                                    onChange={ e => setPrecio( Number( e.target.value ) ) }
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >
                                Agregar
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
