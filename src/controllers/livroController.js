// CONTROLLER = o chef.
// Aqui vai ficar a decisao do que fazer com cada pedido de Livro.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const libro = livroService.buscarLivroPorIndice(indice);
  if (!libro) {
    res.status(404).json({ erro: "Livro nao encontrado" });
    return;
  }
  res.json(libro);
}

function criar(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
     return res.status(400).json({ erro: "Faltou o Content-Type: application/json" });
  }
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
  const indice = req.params.indice;
  const livroAtualizado = livroService.atualizarLivroCompleto(indice, req.body);
  
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  res.json(livroAtualizado);
}

function atualizarParcial(req, res) {
  const indice = req.params.indice;
  const livroAtualizado = livroService.atualizarLivroParcial(indice, req.body);
  
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  res.json(livroAtualizado);
}

function deletar(req, res) {
  const indice = req.params.indice;
  const sucesso = livroService.deletarLivro(indice);
  
  if (!sucesso) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  res.status(204).send();
}

module.exports = { 
  listar, 
  buscarPorIndice, 
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar
};
