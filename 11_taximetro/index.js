function calcularValor(min, km) {
    let valorTempo = 0;
    let valorDist = 0;

    if (min <= 20) {
        valorTempo = min * 50;
    } else {
        valorTempo = 20 * 50 + (min - 20) * 30;
    }

    if (km <= 10) {
        valorDist = km * 70;
    } else {
        valorDist = 10 * 70 + (km - 10) * 50;
    }

    const valorFinal = Math.floor(valorTempo + valorDist);

    console.log(valorFinal);
}

calcularValor(25, 11.5);
