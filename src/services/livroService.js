const Livro = require("../models/Livro");

const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
  new Livro("O Senhor dos Aneis", "Tolkien", 129.9, 662),
];

function listarTodos() {
  return livros;
}

function buscarLivroPorIndice(indice) {
  return livros[indice];
}

function listarLivros(filtros) {
  let resultado = livros;

  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }
  
  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  if (filtros.titulo) {
    resultado = resultado.filter((livro) =>
      livro.titulo.toLowerCase().includes(filtros.titulo.toLowerCase())
    );
  }

  return resultado;
}

function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  livros.push(novoLivro);
  return novoLivro;
}

function atualizarLivroCompleto(indice, dados) {
  if (!livros[indice] || !dados) return null;

  livros[indice].titulo = dados.titulo;
  livros[indice].autor = dados.autor;
  livros[indice].preco = dados.preco;
  livros[indice].estoque = dados.estoque;
  livros[indice].categoria = dados.categoria;

  return livros[indice];
}

function atualizarLivroParcial(indice, dados) {
  if (!livros[indice] || !dados) return null;

  if (dados.titulo !== undefined) livros[indice].titulo = dados.titulo;
  if (dados.autor !== undefined) livros[indice].autor = dados.autor;
  if (dados.preco !== undefined) livros[indice].preco = dados.preco;
  if (dados.estoque !== undefined) livros[indice].estoque = dados.estoque;
  if (dados.categoria !== undefined) livros[indice].categoria = dados.categoria;

  return livros[indice];
}

function deletarLivro(indice) {
  if (!livros[indice]) return false;

  livros.splice(indice, 1);
  return true;
}

module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorIndice,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};
