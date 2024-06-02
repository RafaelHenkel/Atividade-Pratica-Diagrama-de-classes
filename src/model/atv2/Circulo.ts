class Circulo extends FormatoElemento {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  desenhar() {
    console.log("DESENHANDO CIRCULO COM RAIO ", this.raio);
  }

  redimensionar() {
    console.log("REDIMENSIONANDO COM O RAIO ", this.raio);
  }
}

export default Circulo;
