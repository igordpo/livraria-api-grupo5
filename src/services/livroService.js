// SERVICE = o cozinheiro.
// Aqui vai ficar a logica de verdade: buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require("../models/Livro");
const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
];
function listarLivros() {
  return livros;
}
function buscarLivroPorIndice(indice) {
  return livros[indice];
}
function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados,
    estoque,
  );
  livros.push(novoLivro);
  return novoLivro;
}

function atualizarLivroCompleto(indice, dados) {
  if (!livros[indice]) return null;

  livros[indice].titulo = dados.titulo;
  livros[indice].autor = dados.autor;
  livros[indice].preco = dados.preco;
  livros[indice].estoque = dados.estoque;
  livros[indice].categoria = dados.categoria;

  return livros[indice];
}

function atualizarLivroParcial(indice, dados) {
  if (!livros[indice]) return null;

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
  listarLivros,
  buscarLivroPorIndice,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};
