const processData = input => {
    const formatar = input.trim().split(' ');
    const grupos = {
        1: parseInt(formatar[0], 10),
        2: parseInt(formatar[1], 10),
        3: parseInt(formatar[2], 10),
        4: parseInt(formatar[3], 10),
    };

    let numTaxis = 0;

    numTaxis += Math.ceil(grupos[4]);

    if (grupos[1] === grupos[3]) {
        numTaxis +=
            Math.ceil((grupos[3] * 3 + grupos[1]) / 4) +
            Math.ceil((grupos[2] * 2) / 4);
    } else if (grupos[1] > grupos[3]) {
        if (grupos[3] != 0) {
            numTaxis +=
                Math.ceil((grupos[3] * 3 + grupos[3]) / 4) +
                Math.ceil((grupos[2] * 2 + grupos[1] - grupos[3]) / 4);
        } else {
            numTaxis += Math.ceil((grupos[2] * 2 + grupos[1]) / 4);
        }
    } else {
        if (grupos[1] != 0) {
            numTaxis +=
                Math.ceil((grupos[1] * 3 + grupos[1]) / 4) +
                Math.ceil(grupos[3] - grupos[1]) +
                Math.ceil((grupos[2] * 2) / 4);
        } else {
            numTaxis +=
                Math.ceil((grupos[3] * 3) / 4) + Math.ceil((grupos[2] * 2) / 4);
        }
    }
    console.log(numTaxis);
};

processData('1 7 9 0');
