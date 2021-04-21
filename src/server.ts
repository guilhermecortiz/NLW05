import express from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar um informação específica
 */

 app.get("/", (request, response) => {
  //  return response.send("Olá NLW 05");
  return response.json( {message: "Olá NLW 05"})
 })

 app.post("/", (request, response) => {
  //  return response.send("Olá NLW 05");
  return response.json( {message: "OUsuário salvo com sucesso!"})
 })

app.listen(3333, () => console.log("Server is runnig on port 3333"));
