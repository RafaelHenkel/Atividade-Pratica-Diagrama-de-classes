import { Cardapio, PedidoPizza, Item, Pedido } from "./model";

const cardapio1 = new Cardapio({
  sabor: "calabresa",
  valor: 80,
});

const cardapio2 = new Cardapio({
  sabor: "chocolate",
  valor: 100,
});
const cardapio3 = new Cardapio({
  sabor: "strogonoff",
  valor: 120,
});

const pedido1 = new PedidoPizza();
pedido1.adicionarPizza(cardapio1);
pedido1.adicionarPizza(cardapio2);
pedido1.adicionarPizza(cardapio3);
pedido1.removerPizza("strogonoff");
pedido1.imprimirPedido();
pedido1.valorTotalPedido();
