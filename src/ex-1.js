const { texto } = require('./base-texts');

// g - global (encontra todas as ocorrencias)
// i - insensitive;
// () groups
// | or

const regExp1 = /João/gi;
const regEXp2 = /(maria|joão|luiz)(, hoje sua esposa)/i;

console.log('regExp1: ', regExp1.test(texto));
console.log('regEXp2: ', regEXp2.test(texto));

console.log('regExp1 exec: ', regExp1.exec(texto));
console.log('regExp2 exec: ', regEXp2.exec(texto));
