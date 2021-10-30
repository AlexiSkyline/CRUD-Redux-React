import React from 'react'

export const EditarProducto = () => {
    return (
        <div className='row justify-content-center mt-4'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>

                    <h2 className='text-center mb-4 font-weight-bold'>
                        Editar Producto
                    </h2>

                    <form >
                        <div className='form-group'>
                            <label>Nombre Producto:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre Producto'
                                name='nombre'
                            />
                        </div>

                        <div className='form-group'>
                            <label>Precio:</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Precio del Producto'
                                name='precio'
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
