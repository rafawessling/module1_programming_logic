const solucao = (a, b) => {
    let onibusA = a;
    let onibusB = b;

    let tempoA = [onibusA];
    let tempoB = [onibusB];

    while (onibusA < 1000) {
        tempoA.push((onibusA += a));
    }
    while (onibusB < 1000) {
        tempoB.push((onibusB += b));
    }
    let mesmoHorario = [];

    if (a > b) {
        for (let item of tempoA) {
            for (let elemento of tempoB) {
                if (item === elemento) {
                    mesmoHorario.push(item);
                }
            }
        }
    } else if (a < b) {
        for (let item of tempoB) {
            for (let elemento of tempoA) {
                if (item === elemento) {
                    mesmoHorario.push(item);
                }
            }
        }
    } else {
        mesmoHorario.push(a);
    }

    console.log(mesmoHorario[0]);
};

solucao(12, 15);
