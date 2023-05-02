function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    const encontrarCarta = cartas.findIndex(cartaVirada => {
        return cartaVirada === carta;
    });
    let encontrarManilha = '';

    if (encontrarCarta < cartas.length - 1) {
        encontrarManilha = cartas[encontrarCarta + 1];
    } else {
        encontrarManilha = cartas[0];
    }
    console.log(encontrarManilha);
}

solucao('A');
