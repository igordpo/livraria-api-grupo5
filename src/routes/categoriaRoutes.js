
const express = require("express");
const categoriaController = require("../controllers/categoriaController");
const router = express.Router();

router.get("/", categoriaController.listarCategoria);
router.post("/", categoriaController.criarCategoria);
router.get("/:id", categoriaController.buscarPorIdCategoria);
router.put("/:id", categoriaController.atualizarCompletoCategoria);
router.patch("/:id", categoriaController.atualizarParcialCategoria);
router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;
module.exports = router;
