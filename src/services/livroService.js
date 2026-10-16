const Livro = require("../models/Livro");

const livros = [];
let proximoId = 1;
// const livros = [
//   new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
//   new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
// ];

// const livros = [
//   new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
//   new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
//   new Livro("O Senhor dos Aneis", "Tolkien", 129.9, 662),
// ];


function listarTodos() {
  return livros;
}
function buscarLivroPorId(id) {
return livros.find((livro) => livro.id === Number(id));
}

function listarLivros(filtros) {
  let resultado = livros;

  if (!filtros) return resultado;

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
  return resultado;
  return livros.find((livro) => livro.id === Number(id));
}

function listarLivros(filtros) {
  let resultado = livros;

  if (!filtros) return resultado;

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
      livro.titulo.toLowerCase().includes(filtros.titulo.toLowerCase()),
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
  novoLivro.id = proximoId;
  proximoId++;
  livros.push(novoLivro);
  return novoLivro;
}

function atualizarLivroCompleto(indice, dados) {
const livro = buscarLivroPorId(id); 
  if (!livro) return null;

  livros.titulo = dados.titulo;
  livros.autor = dados.autor;
  livros.preco = dados.preco;
  livros.estoque = dados.estoque;
  livros.categoria = dados.categoria;

  return livros;
}

function atualizarLivroParcial(indice, dados) {
const livro = buscarLivroPorId(id); 
  if (!livro) return null;

  if (dados.titulo !== undefined) livros.titulo = dados.titulo;
  if (dados.autor !== undefined) livros.autor = dados.autor;
  if (dados.preco !== undefined) livros.preco = dados.preco;
  if (dados.estoque !== undefined) livros.estoque = dados.estoque;
  if (dados.categoria !== undefined) livros.categoria = dados.categoria;

  return livros;
}

function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number (id));
  if (posicao === 1) return false;
function atualizarLivroCompleto(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;
}
  livro.titulo = dados.titulo;
  livro.autor = dados.autor;
  livro.preco = dados.preco;
  livro.estoque = dados.estoque;
  livro.categoria = dados.categoria;

  return livro;
}

function atualizarLivroParcial(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  if (dados.categoria !== undefined) livro.categoria = dados.categoria;

  return livro;
}

function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number(id));
  if (posicao === -1) return false;
  livros.splice(posicao, 1);
  return true;
}

criarLivro({
  titulo:"Clean Code",
  autor:"Robert C. Martin",
  preco: 89.9,
  estoque: 12,
})
criarLivro({
  titulo:"Eloquent JavaScript",
  autor:"Marijn Haverbeke",
  preco: 45.0,
  estoque: 20,
})

module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
}