let livros = [];
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
  //utiliza o async na function para rodar a função de modo assíncrono, todo o retorno da função se transforma em uma promessa
  const resposta = await fetch(endpointDaApi); //a variável resposta recebe o comando await (aguardam), comando fetch (busca), na variável que contém o endereço da API. O formatado da API ja está em JSON, caso não estivesse seria necessário utilizar o comando endpointDaApi.json();
  livros = await resposta.json();
  console.log(livros);
}
