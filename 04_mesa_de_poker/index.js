const solucao = (min, max, valores) => {
    if (valores.length >= 1 && valores.length <= 1000) {
        const permitidos = valores.filter(valor => {
            return valor >= min && valor <= max;
        });
        console.log(permitidos);
    }
};

solucao(2, 10, [0, 5, 6, 10, 11]);
