let btnFiltrarLivrosDeFront = document.getElementById("btnFiltrarLicrosFront");

btnFiltrarLivrosDeFront.addEventListener("click", filtrarLivros);

function filtrarLivros() {
  let livrosFiltrados = livros.filter((livro) => {
    livro.categoria == "front-end";
  });
}
