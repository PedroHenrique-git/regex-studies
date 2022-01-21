const { html } = require('./base-texts');

const regExp = /<.+?>.+?<\/.+?>/g;
const regExpNonGreedy = /<.+>.+<\/.+>/g;

console.log(html.replace(regExp, 'vazio'))