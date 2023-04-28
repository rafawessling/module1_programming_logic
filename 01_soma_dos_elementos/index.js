const lista = [10, 2, 1, 3, 5, 20, 10, 8, 5, 2, 2];

let valorCofre = 0;

if (lista.length <= 1000) {
    const valorDiario = lista.reduce((contador, itemAtual) => {
        return contador + itemAtual;
    });
    valorCofre += valorDiario;
}

console.log(valorCofre);
