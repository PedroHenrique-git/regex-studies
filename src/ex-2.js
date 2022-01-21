const { texto } = require('./base-texts');

const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(/(João|Maria)/gi, '"$1"'))
console.log();
console.log(texto.replace(/(João|Maria)/gi, function(item){
    return '######' + item.toUpperCase() + '######';
}));
