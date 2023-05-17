const processData = input => {
    let formatado = input.trim().split('');
    let indexMenor = formatado.indexOf('<');
    let indexMaior = formatado.indexOf('>');
    const index = [];
    let tempo = 0;
    let maiorTempo = 0;

    while (indexMenor !== -1) {
        index.push(indexMenor);
        indexMenor = formatado.indexOf('<', indexMenor + 1);
    }

    while (indexMaior !== -1) {
        index.push(indexMaior);
        indexMaior = formatado.indexOf('>', indexMaior + 1);
    }

    index.sort((a, b) => a - b);

    for (let i = 0; i < index.length; i++) {
        if (
            (formatado[index[i]] === '<' && formatado[index[i + 1]] === '<') ||
            (formatado[index[i]] === '>' && formatado[index[i + 1]] === '>')
        ) {
            tempo = index[i + 1] - index[i] - 1;
        } else if (
            formatado[index[i]] === '>' &&
            formatado[index[i + 1]] === '<'
        ) {
            tempo = Math.ceil((index[i + 1] - index[i] - 1) / 2);
        } else if (
            index.length === 1 &&
            formatado[index[0]] === '>' &&
            formatado[index[0] + 1] === '.'
        ) {
            tempo = formatado.length - 1 - index[0];
        } else if (
            index.length === 1 &&
            formatado[index[0]] === '<' &&
            formatado[index[0] - 1] === '.'
        ) {
            tempo = index[0];
        }

        if (tempo > maiorTempo) {
            maiorTempo = tempo;
        }
    }

    console.log(maiorTempo);
};

processData('<...<');
