const express = require("express");
const livroController = require("../controllers/livroController");
const router = express.Router();

router.get("/", livroController.listarCategorias);
router.post("/", livroController.criarCategoria);
router.get("/:id", livroController.buscarCategoriaPorId);
router.patch("/:id", livroController.criarCategoria);
router.put("/:id", livroController.criarCategoria);
router.delete("/:id", livroController.criarCategoria);

module.exports = router;
