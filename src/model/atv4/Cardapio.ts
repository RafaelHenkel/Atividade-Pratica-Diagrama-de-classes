import { CardapioPizzaType } from "../../types";

class Cardapio {
  sabor: string;
  valor: number;

  constructor(data: CardapioPizzaType) {
    this.sabor = data.sabor;
    this.valor = data.valor;
  }
}

export default Cardapio;
