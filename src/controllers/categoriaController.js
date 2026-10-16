// CONTROLLER = o chef.
// Aqui vai ficar a decisao do que fazer com cada pedido de Livro.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const categoriaService = require("../services/categoriaService");

function listarCategoria(req, res) {
  const filtros = req.query;
  const livrosFiltrados = categoriaService.listarCategorias(filtros);
  return res.json(livrosFiltrados);
  const livros = categoriaService.listarCategorias(filtros);
  res.status(200).json(livros);
}

function buscarPorIdCategoria(req, res) {
  const { id } = req.params;
  const livro = categoriaService.buscarCategoriaPorId(id);

  if (!livro) {

    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livro);
}

function criarCategoria(req, res) {
  const dados = req.body;
  const novoLivro = categoriaService.criarCategoria(dados);
  return res.status(201).json(novoLivro);
}

function atualizarCompletoCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const livroAtualizado = categoriaService.atualizarCategoriaCompleto(id, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function atualizarParcialCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const livroAtualizado = categoriaService.atualizarCategoriaParcial(id, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function deletarCategoria(req, res) {
  const { id } = req.params;
  const excluído = categoriaService.deletarCategoria(id);

  if (!excluído) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  listarCategoria,
  buscarPorIdCategoria,
  criarCategoria,
  atualizarCompletoCategoria,
  atualizarParcialCategoria,
  deletarCategoria,
};
