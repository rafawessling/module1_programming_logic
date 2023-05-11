// function processData(input) {
//     const linhas = input.trim().split('\n');

//     let senha = linhas[0].split('');
//     let digitado = linhas[1].split('');
//     let verificar = [];

//     let letraAtual = digitado.findIndex(item => {
//         return item === senha[0];
//     });
//     if (letraAtual !== -1) {
//         verificar.push(digitado[letraAtual]);
//     }

//     for (let i = 1; i < senha.length; i++) {
//         const proximaLetra = digitado.findIndex(item => {
//             return item === senha[i];
//         });
//         if (proximaLetra === -1) {
//             break;
//         } else if (letraAtual < proximaLetra) {
//             verificar.push(digitado[proximaLetra]);
//             letraAtual = proximaLetra;
//         } else {
//             delete digitado[proximaLetra];
//             i--;
//         }
//     }
//     if (verificar.join('') === senha.join('')) {
//         console.log('SIM');
//     } else {
//         console.log('NAO');
//     }
// }

//---------------------------------------------------------------------
//Alternativa:
function processData(input) {
    const linhas = input.trim().split('\n');

    const senha = linhas[0];
    let digitado = linhas[1];

    for (let item of senha) {
        let index = digitado.indexOf(item);
        if (index === -1) {
            console.log('NAO');
            return;
        } else {
            digitado = digitado.slice(index + 1);
        }
    }
    console.log('SIM');
}

processData('cubos\nucuggbyos');
