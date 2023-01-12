function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto }; //... = operador especial que faz uma copia de todo o array para um novo objeto
    //e na copia eu vou alterar o preco
  });
  return livrosComDesconto;
}
