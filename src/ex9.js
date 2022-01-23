const { lookahead } = require('./base-texts');

console.log(lookahead.match(/.+[^inac]active$/gim));

// Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (frases que tem inactive)
//console.log(lookahead.match(/.+(?=\s+inactive)/gim));

//Negative lookahead
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//Negative lookahead
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//Positive lookbehind (frases que começam com online)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//Negative lookbehind (frases que não começam com online)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
    012.250.796-10
    111.111.111-11
    147.285.963-10
`;

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))
