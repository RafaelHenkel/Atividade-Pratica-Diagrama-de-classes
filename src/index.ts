import { Cardapio, Pedido } from "./model";

const cardapio1 = new Cardapio({
  sabor: "calabresa",
  valor: 80,
});

const cardapio2 = new Cardapio({
  sabor: "chocolate",
  valor: 100,
});

const pedido1 = new Pedido();
pedido1.adicionarPizza(cardapio1);
pedido1.adicionarPizza(cardapio2);
pedido1.imprimirPedido();
pedido1.valorTotalPedido();
