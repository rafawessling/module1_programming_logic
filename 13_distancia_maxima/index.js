function processData(input) {
    const linhas = input.trim().split('\n');
    const n = parseInt(linhas[0], 10);

    const coordenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ');
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10),
        });
    }

    let maiorDist = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            const distancia = Math.sqrt(
                Math.pow(coordenadas[i].x - coordenadas[j].x, 2) +
                    Math.pow(coordenadas[i].y - coordenadas[j].y, 2)
            );
            if (distancia > maiorDist) {
                maiorDist = distancia;
            }
        }
    }
    console.log(maiorDist);
}

processData('5\n3.56 17\n-5.1 36.3\n-5.1 36.3\n5 5\n-9.01 -17.7');
