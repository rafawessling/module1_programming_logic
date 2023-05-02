const solucao = texto => {
    if (texto.length <= 500) {
        const formatado = texto.trim().split(' ');
        let contadorPalavras = 0;

        for (let item of formatado) {
            if (item !== '') {
                contadorPalavras++;
            }
        }
        console.log(contadorPalavras);
    }
};

solucao(' Um texto  qualquer   ');
