// CONTROLLER = o chef.
// Aqui vai ficar a decisao do que fazer com cada pedido de Livro.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");
function listar(req, res) {
  const livros = livroService.listarLivros();
  res.json(livros);
}
function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);
  if (!livro) {
    res.status(404).json({ erro: "Livro nao encontrado" });
    return;
  }
  res.json(livro);
}
function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

module.exports = { listar, buscarPorIndice };
