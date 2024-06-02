import { ItemType, PedidoType } from "../../types";
import Item from "./Item";

class Pedido {
  itens: ItemType[];
  valorTotal: number;

  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }

  addItem(item: Item) {
    this.itens.push(item);
    this.valorTotal += item.valor;
  }
}

export default Pedido;
