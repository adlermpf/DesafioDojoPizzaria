const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");
const pedidoController = require("../controller/PedidoController");

Router.get('/', pizzaController.index);
Router.get('/adicionar/:sabor/:categoria/:preco', pizzaController.adicionar);
Router.get(`/buscarsabor/:sabor`, pizzaController.buscarsabor);
Router.get(`/buscarcategoria/:categoria`, pizzaController.buscarcategoria);
Router.get(`/adicionarpedido/:cliente/:sabor1/:sabor2?/:sabor3?/:sabor4?`, pedidoController.adicionar);
Router.get(`/listartodosospedidos`, pedidoController.listarTodosOsPedidos);
Router.get(`/totalpedido`, pedidoController.totalPedido);



module.exports = Router;