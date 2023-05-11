function solucao(precos) {
    const total = precos.reduce((acumulador, item) => {
        return acumulador + item;
    });

    let totalComDesconto = 0;
    if (precos.length > 2) {
        let menorValor = 0;
        menorValor = Math.min(...precos);
        totalComDesconto = total - menorValor * 0.5;

        console.log(totalComDesconto);
    } else {
        console.log(total);
    }
}

solucao([200, 150, 50, 100]);
