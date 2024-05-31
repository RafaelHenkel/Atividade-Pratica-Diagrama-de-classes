import { CardapioPizzaType } from "../../types";
import Cardapio from "./Cardapio";

class PedidoPizza {
  private pizzas: Cardapio[];
  valorTotal: number;

  constructor() {
    this.pizzas = [];
    this.valorTotal = 0;
  }
  adicionarPizza(pizza: CardapioPizzaType) {
    this.pizzas.push(pizza);
  }
  removerPizza(sabor: string) {
    const indexPizza = this.pizzas.findIndex((item) => item.sabor === sabor);
    if (indexPizza !== 1) {
      this.pizzas.splice(indexPizza, 1);
    } else {
      console.log("pizza nao encontrada no pedido");
    }
  }
  imprimirPedido() {
    console.log(this.pizzas);
  }
  valorTotalPedido() {
    this.pizzas.forEach((pizza) => {
      this.valorTotal += pizza.valor;
    });
    console.log(`O valor total a pagar é ${this.valorTotal}`);
  }
}

export default PedidoPizza;
