let livros = [];
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaApi();
const elementoParaInserirLivros = document.getElementById("livros");

async function getBuscarLivrosDaApi() {
  //utiliza o async na function para rodar a função de modo assíncrono, todo o retorno da função se transforma em uma promessa
  const resposta = await fetch(endpointDaApi); //a variável resposta recebe o comando await (aguardam), comando fetch (busca), na variável que contém o endereço da API. O formatado da API ja está em JSON, caso não estivesse seria necessário utilizar o comando endpointDaApi.json();
  livros = await resposta.json();
  console.table(livros);
  exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaDeLivros) {
  listaDeLivros.forEach((livro) => {
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `;
  });
}
