function corrigirCapsLock(input) {
    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else if (
        input[0] === input[0].toLowerCase() &&
        input.slice(1) === input.slice(1).toUpperCase()
    ) {
        console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());
    } else {
        console.log(input);
    }
}

corrigirCapsLock('tESTE');
