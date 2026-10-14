// CONTROLLER = o chef.
// Aqui vai ficar a decisao do que fazer com cada pedido de Livro.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

function listar(req, res) {
  const filtros = req.query;
  const livrosFiltrados = livroService.listarLivros(filtros);
  return res.json(livrosFiltrados);
}

function buscarPorIndice(req, res) {
  const { indice } = req.params;
  const livro = livroService.buscarLivroPorIndice(indice);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livro);
}

function criar(req, res) {
  const dados = req.body;
  const novoLivro = livroService.criarLivro(dados);
  return res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
  const { indice } = req.params;
  const dados = req.body;

  const livroAtualizado = livroService.atualizarLivroCompleto(indice, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function atualizarParcial(req, res) {
  const { indice } = req.params;
  const dados = req.body;

  const livroAtualizado = livroService.atualizarLivroParcial(indice, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function deletar(req, res) {
  const { indice } = req.params;
  const excluído = livroService.deletarLivro(indice);

  if (!excluído) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  listar,
  buscarPorIndice,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
};