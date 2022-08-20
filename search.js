
const readline = require('readline-sync');
const fetch = require('node-fetch');

const searchApi = async () => {
    const search = readline.question('Qual você deseja procurar? ');
    console.log(`\nVocê está procurando por ${search}. Vou verificar se ele existe no NPM...\n`);
    const API = ('https://registry.npmjs.org/');

    try {
      const response = await fetch(`${API}${search}`);
      const json = await response.json();
      if(!json.error) {
        console.log('\nBoas notícias! Encontramos um pacote!\n');
        console.log(`'${json.description}'\n`);
      } else console.log(`O pacote '${search}' não foi localizado no NPM. Sinto muito!`);
    } catch(error) {
      console.log('Houve um erro ao tentar realizar a busca. Tente novamente por favor!');
      console.log(`\nDescrição do erro:\n\n'${error.message}\n'`);
    }
}

module.exports = searchApi;