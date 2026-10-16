const express = require("express");

// Importação das rotas (Requires)
const livroRoutes = require("./livroRoutes");
const categoriaRoutes = require("./categoriaRoutes"); 

const router = express.Router();

// Uso das rotas
router.use("/categorias", categoriaRoutes);
router.use("/livros", livroRoutes);

module.exports = router;
