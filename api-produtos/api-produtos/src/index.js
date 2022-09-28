const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://CJFIAP:CJFIAP@cj-fiap.kiejvgy.mongodb.net/FIAPCJ?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexão com o MongoDB efetuada com sucesso!"))
  .catch((error) => console.log("Erro de conexão com o MongoDB:", error));

const rotaProduto = require("./routes/productRoute");
app.use("/product", rotaProduto);

app.listen(3000, () => {
  console.log(`Rodando API de produtos na porta 3000`);
});
