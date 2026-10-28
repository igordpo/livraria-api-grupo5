const livroService = require("../services/livroService");

function listar(req, res) {
  throw new Error("Teste de erro 500"); 
    const filtros = req.query;
    const livrosFiltrados = livroService.listarLivros(filtros);
    return res.json(livrosFiltrados);
const livroService = require("../services/livroService");

const categoriasFakes = [];

async function listar(req, res) {
  const filtros = req.query;
  const livrosFiltrados = await livroService.listarLivros(filtros);
  return res.json(livrosFiltrados);
}

function buscarPorId(req, res) {
    const { id } = req.params;
    const livro = livroService.buscarPorId(id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
    }
    
    return res.status(200).json(livro);
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
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ erro: "Corpo da requisição ausente" });
  }

  const { titulo, preco } = req.body;

  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({ erro: "Título obrigatório" });
  }

  if (preco !== undefined && typeof preco !== 'number') {
    return res.status(400).json({ erro: "Preço deve ser um número" });
  }

  if (preco !== undefined && preco < 0) {
    return res.status(400).json({ erro: "Preço inválido" });
  }

  const dados = req.body;
  const novoLivro = livroService.criarLivro(dados);
  return res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
  const { id } = req.params;
  const dados = req.body;

  if (dados.estoque !== undefined && dados.estoque < 0) {
    return res.status(400).json({ erro: "Estoque inválido" });
  }

  const livroAtualizado = livroService.atualizarLivroCompleto(id, dados);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livroAtualizado);
}

function atualizarParcial(req, res) {
  const { id } = req.params;
  const dados = req.body;

  if (dados.estoque !== undefined && dados.estoque < 0) {
    return res.status(400).json({ erro: "Estoque inválido" });
  }

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

function listarCategorias(req, res) {
  return res.status(200).json(categoriasFakes);
}

function buscarCategoriaPorId(req, res) {
  const { id } = req.params;
  const cat = categoriasFakes.find(c => c.id === id);
  if (!cat) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(cat);
}

function criarCategoria(req, res) {
  if (req.method === 'DELETE') {
    return res.status(204).send();
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ erro: "Corpo da requisição ausente" });
  }

  const { nome, descricao } = req.body;

  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: "Nome obrigatório" });
  }

  if (nome.length < 3) {
    return res.status(400).json({ erro: "Nome deve ter pelo menos 3 caracteres" });
  }

  const novaCategoria = {
    id: String(categoriasFakes.length + 1),
    nome,
    descricao: descricao || ""
  };

  categoriasFakes.push(novaCategoria);
  return res.status(201).json(novaCategoria);
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
};
}