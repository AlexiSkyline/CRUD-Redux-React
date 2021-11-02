import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

// TODO: Muestra la alerta
export function mostarAlertaAction( alerta ) {
    return ( dispatch ) => {
        dispatch( mostrarAlerta( alerta ) );
    }
}

const mostrarAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

// TODO: Oculta la alerta
export function ocultarAlertaAction() {
    return ( dispatch ) => {
        dispatch( ocultarAlerta() );
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
});