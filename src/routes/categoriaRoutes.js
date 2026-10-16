
const express = require("express");
const categoriaController = require("../controllers/categoriaController");
const router = express.Router();

router.get("/", atualizarParcialCategoriar.listar);
router.post("/", categoriaController.criar);
router.get("/:id", categoriaController.buscarPorId);
router.put("/:id", categoriaController.atualizarCompleto);
router.patch("/:id", categoriaController.atualizarParcial);
router.delete("/:id", categoriaController.deletar);

module.exports = router;
module.exports = router;
