const solucao = numeros => {
    const soma = numeros.reduce((acumulador, item) => {
        return acumulador + item;
    });

    let goleiro = 1;
    if (soma % numeros.length === 0) {
        goleiro = numeros.length;
    } else {
        goleiro = soma % numeros.length;
    }
    console.log(goleiro);
};

solucao([1, 3, 2, 1]);
