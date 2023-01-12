let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  //utiliza o async na function para rodar a função de modo assíncrono, todo o retorno da função se transforma em uma promessa
  const res = await fetch(endpointDaAPI);
  livros = await res.json(); //a variável res recebe o comando await (aguardam), comando fetch (busca), na variável que contém o endereço da API. O formatado da API ja está em JSON, caso não estivesse seria necessário utilizar o comando endpointDaApi.json();
  livros = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
