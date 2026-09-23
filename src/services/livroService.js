// SERVICE = o cozinheiro.
// Aqui vai ficar a logica de verdade: buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require("../models/Livro");
const livros = [
    new Livro("Clean Code", "Robert C. Martin", 89.9, 12,),
    new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20,),
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
        dados,estoque
    );
    livros.push(novoLivro);
    return novoLivro;
}

module.exports = { listarLivros, buscarLivroPorIndice, criarLivro };
