
const express = require("express");
const categoriaController = require("../controllers/categoriaController");
const router = express.Router();

router.get("/", categoriaController.listar);
router.post("/", categoriaController.criar);
router.get("/:id", categoriaController.buscarPorId);
router.put("/:id", categoriaController.atualizarCompleto);
router.patch("/:id", categoriaController.atualizarParcial);
router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;
module.exports = router;
