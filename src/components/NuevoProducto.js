import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mostarAlertaAction } from '../actions/alertaActions';

// * Action de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

export const NuevoProducto = ({ history }) => {
    // * state del componentes
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState(0);

    // TODO: utiliza use dispact y te crea una función
    const dispatch = useDispatch();

    // TODO: Acceder al state del store
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state => state.alerta.alerta );

    // TODO: manda a llamar el action de productoAction
    const agregarProducto = ( producto ) => dispatch( crearNuevoProductoAction( producto ) );

    // * Cuando el usuario haga submit
    const handlerSubmit = (e) => {
        e.preventDefault();

        // * Validar formulario
        if( nombre.trim() === '' || precio <= 0 ) {
            const alerta = {
                msg: 'Ambos Campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch( mostarAlertaAction( alerta ) );

            return;
        }
        // * Si no hay errores

        // * Crea el nuevo producto
        agregarProducto({ 
            nombre,
            precio
        });

        // TODO: redireccionamos
        history.push( '/' );
    }

    return (
        <div className='row justify-content-center mt-4'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>

                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>

                        { alerta && ( <p className={ alerta.classes }>{ alerta.msg }</p>) }

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

                        { cargando && <p>Cargando....</p>}

                        { error && <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> }

                    </div>
                </div>
            </div>
        </div>
    );
}
