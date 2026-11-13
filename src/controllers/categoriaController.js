// CONTROLLER = o chef.
// Recebe a requisição, chama o service e devolve a resposta.

const categoriaService = require("../services/categoriaService");

async function listarCategoria(req, res) {
   const filtros = req.query;
  const categorias = await categoriaService.listarCategorias(filtros);

  return res.status(200).json(categorias);
}

async function buscarPorIdCategoria(req, res) {
  const { id } = req.params;
  const categoria = await categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoria);
}

async function criarCategoria(req, res) {
  const erro = await categoriaService.validarCategoria(req.body, true);

  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const dados = req.body;
  const novaCategoria = categoriaService.criarCategoria(dados);

  return res.status(201).json(novaCategoria);
}

async function atualizarCompletoCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const categoriaAtualizada = await categoriaService.atualizarCategoria(id, dados);

  if (!categoriaAtualizada) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoriaAtualizada);
}

async function atualizarParcialCategoria(req, res) {
  const { id } = req.params;
  const dados = req.body;

  const categoriaAtualizada =
    await categoriaService.atualizarParcialCategoria(id, dados);

  if (!categoriaAtualizada) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
    });
  }

  return res.status(200).json(categoriaAtualizada);
}

async function deletarCategoria(req, res) {
  const { id } = req.params;
  const excluida = await categoriaService.deletarCategoria(id);

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