const solucao = jogadores => {
    let jogadorSorteado = '';

    const jogouUm = jogadores.filter(jogador => {
        return jogador.jogada === 1;
    });

    if (jogouUm.length === 1) {
        jogadorSorteado = jogouUm[0].nome;
    } else {
        const jogouZero = jogadores.filter(jogador => {
            return jogador.jogada === 0;
        });

        if (jogouZero.length === 1) {
            jogadorSorteado = jogouZero[0].nome;
        } else {
            jogadorSorteado = 'NINGUEM';
        }
    }
    console.log(jogadorSorteado);
};

solucao([
    {
        nome: 'Herman',
        jogada: 1,
    },
    {
        nome: 'Rhodes',
        jogada: 1,
    },
    {
        nome: 'Beach',
        jogada: 1,
    },
    {
        nome: 'Laurel',
        jogada: 1,
    },
    {
        nome: 'Beatrice',
        jogada: 1,
    },
    {
        nome: 'Alison',
        jogada: 1,
    },
    {
        nome: 'Saundra',
        jogada: 1,
    },
    {
        nome: 'Klein',
        jogada: 0,
    },
]);
