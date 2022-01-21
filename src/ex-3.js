const { texto, arquivos } = require('./base-texts');

// * 0 ou n
// + 1 ou n
// ? 0 ou 1
// \ caracter de escape
// {n, m} min - max

const regExp = /Jo+ão+/gi;
console.log(texto.match(regExp));

const regExp2 = /\.(jp|JP)(e|E)?(g|G)/g;

console.log();

for(const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);
    valido && console.log(arquivo, arquivo.match(regExp2));
}