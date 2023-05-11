const verificarIntervalo = (numero, limiteInferior, limiteSuperior) => {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log('PERTENCE');
    } else {
        console.log('NAO PERTENCE');
    }
};

verificarIntervalo(10, 5, 20);
