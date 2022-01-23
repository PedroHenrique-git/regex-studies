const { html } = require('./base-texts');

console.log(d);

// $1 $2 $3 <- Retrovisores

//console.log(html);
//console.log(html.match(/<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/gi))
console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$1$3$4'))