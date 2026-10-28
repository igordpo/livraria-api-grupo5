require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const { testarConexao } = require("./config/db");

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(logger);

app.use(routes);

app.get("/", (req, res) => {
  res.send("API da livraria está no ar");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

app.use((req, res) => {
  return res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
  testarConexao();
});

