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
const cardapio3 = new model_1.Cardapio({
    sabor: "strogonoff",
    valor: 120,
});
const pedido1 = new model_1.Pedido();
pedido1.adicionarPizza(cardapio1);
pedido1.adicionarPizza(cardapio2);
pedido1.adicionarPizza(cardapio3);
pedido1.removerPizza("strogonoff");
pedido1.imprimirPedido();
pedido1.valorTotalPedido();
