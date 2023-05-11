const solucao = (min, max, valores) => {
    const permitidos = valores.filter(valor => {
        return valor >= min && valor <= max;
    });
    console.log(permitidos);
};

solucao(2, 10, [0, 5, 6, 10, 11]);
