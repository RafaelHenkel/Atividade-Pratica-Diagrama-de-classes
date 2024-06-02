import { ItemType } from "../../types";

class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(item: ItemType) {
    this.valor = item.valor;
    this.nome = item.nome;
    this.descricao = item.descricao;
  }
}

export default Item;
