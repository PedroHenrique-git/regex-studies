const { cpfs, cpfs2, ips } = require('./base-texts');

// ^ -> Começa com (no inicio)
const cpfRegex = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;
const exampleText = 'Text texto 124$@4353%#%#9248we23¨%($';
console.log(cpfs.match(cpfRegex));
console.log(cpfs2.match(cpfRegex));

const cpf = '11111111111';
console.log(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'));
console.log(exampleText.replace(/[^\w]/g,''));

const ipRegExp = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;

console.log(ips.match(ipRegExp));