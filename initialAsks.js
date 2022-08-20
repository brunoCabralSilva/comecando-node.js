const readline = require('readline-sync');

const initialAsks = () => {
    const ask = readline.question('\nInforme seu nome: ');
    console.log(`\nOlá ${ask}! É um prazer te conhecer! `);
    console.log('\nFui criado para encontrar pacotes no NPM.');
}

module.exports = initialAsks;