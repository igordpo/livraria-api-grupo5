// CONTROLLER = o chef.
// Aqui vai ficar a decisao do que fazer com cada pedido de Livro.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

function listar(req, res) {
<<<<<<< HEAD
const filtros = req.query;
const livrosFiltrados = livroService.listarLivros(filtros);
return res.json(livrosFiltrados);
const livros = livroService.listarLivros(filtros);
res.status(200).json(livros);
=======
  const filtros = req.query;
  const livrosFiltrados = livroService.listarLivros(filtros);
  return res.json(livrosFiltrados);
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
>>>>>>> a77f91c04812d46332db16543c5a189cddb90abf
}

function buscarPorId(req, res) {
  const { id } = req.params; 
  const livro = livroService.buscarLivroPorId(id); 

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
  const { id } = req.params; 
  const dados = req.body;

  const livroAtualizado = livroService.atualizarLivroCompleto(id, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function atualizarParcial(req, res) {
  const { id } = req.params; 
  const dados = req.body;

  const livroAtualizado = livroService.atualizarLivroParcial(id, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function deletar(req, res) {
  const { id } = req.params; 
  const excluído = livroService.deletarLivro(id);

  if (!excluído) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
}
