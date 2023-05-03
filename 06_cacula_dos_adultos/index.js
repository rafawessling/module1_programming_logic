const solucao = lista => {
    if (lista.length <= 1000) {
        const participantes = lista.filter(idade => {
            return idade >= 18;
        });

        if (participantes.length !== 0) {
            let menorIdade = Math.min(...participantes);
            console.log(menorIdade);
        } else {
            console.log('CRESCA E APARECA');
        }
    }
};

solucao([16, 20, 30, 18, 27]);
