"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const cardapio1 = new model_1.Cardapio({
    sabor: "calabresa",
    valor: 80,
});
const cardapio2 = new model_1.Cardapio({
    sabor: "chocolate",
    valor: 100,
});
const pedido1 = new model_1.Pedido();
pedido1.adicionarPizza(cardapio1);
pedido1.adicionarPizza(cardapio2);
pedido1.imprimirPedido();
pedido1.valorTotalPedido();
