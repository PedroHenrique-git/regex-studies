const { alfabeto } = require('./base-texts');

// ^ negação
// [-] range

console.log(alfabeto);
console.log(alfabeto.match(/[^abc123]+/g));
console.log();
console.log(alfabeto.match(/[0-9]/g));
console.log();
console.log(alfabeto.match(/[a-z]/g));
console.log();
console.log(alfabeto.match(/[A-Z]/g));
console.log();
console.log(alfabeto.match(/\w/g)); // negação
console.log(alfabeto.match(/\W/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\D+/g));