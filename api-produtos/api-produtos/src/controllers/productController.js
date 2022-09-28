const Product = require("../mongoose/model/Product");
const { default: axios } = require("axios");

exports.get = (req, res, next) => {
  Product.find({})
    .exec()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).send(error));
};

exports.post = async (req, res, next) => {
  req.body.sku = Math.round(Math.random() * 8999 + 1000);
  console.log(req.body);
  Product.create(req.body)
    .then((product) => {
      res.status(200).json(product);

      const mailBody = {
        emailFrom: "jhenifferdp2002@gmail.com",
        emailTo: "rm86007@fiap.com.br",
        subject: `${req.body.name} inserido com sucesso!`,
        text:
          `Produto inserido na base de dados:\n` +
          `Nome: ${req.body.name}\n` +
          `Preço: R$ ${req.body.price}\n` +
          `Quantidade: ${req.body.quantity}`,
      };
      axios.post("http://localhost:8080/send-email", mailBody);
    })
    .catch((error) => res.status(400).send(error));
};
