const lista = [10, 2, 1, 3, 5, 20, 10, 8, 5, 2, 2];

let valorDiario = 0;

let mediaDiaria = 0;

valorDiario = lista.reduce((contador, itemAtual) => {
    return contador + itemAtual;
});
mediaDiaria = valorDiario / lista.length;

console.log(mediaDiaria);
