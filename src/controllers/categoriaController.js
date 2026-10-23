// CONTROLLER = o chef.
// Recebe a requisição, chama o service e devolve a resposta.

const categoriaService = require("../services/categoriaService");

function listarCategoria(req, res) {
  const filtros = req.query;
  const categorias = categoriaService.listarCategorias(filtros);

  return res.status(200).json(categorias);
}

function buscarPorIdCategoria(req, res) {
  const { id } = req.params;
  const categoria = categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoria);
}

function criarCategoria(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);

  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const dados = req.body;
  const novaCategoria = categoriaService.criarCategoria(dados);

  return res.status(201).json(novaCategoria);
}

function atualizarCompletoCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const categoriaAtualizada = categoriaService.atualizarCategoria(id, dados);

  if (!categoriaAtualizada) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoriaAtualizada);
}

function atualizarParcialCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const categoriaAtualizada =
    categoriaService.atualizarParcialCategoria(id, dados);

  if (!categoriaAtualizada) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoriaAtualizada);
}

function deletarCategoria(req, res) {
  const { id } = req.params;
  const excluida = categoriaService.deletarCategoria(id);

  if (!excluida) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
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