import { RetanguloType } from "../../types";

class Retangulo extends FormatoElemento {
  comprimento: number;
  altura: number;

  constructor(data: RetanguloType) {
    super();
    this.comprimento = data.comprimento;
    this.altura = data.altura;
  }
  desenhar() {
    console.log("DESENHANDO COM ALTURA E COMPRIMENTO ", this.comprimento, this.altura);
  }

  redimensionar() {
    console.log("REDIMENSIONANDO COM ALTURA E COMPRIMENTO ", this.comprimento, this.altura);
  }
}

export default Retangulo;
