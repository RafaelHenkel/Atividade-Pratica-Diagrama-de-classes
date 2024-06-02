import { AnimalType } from "../../types";
import Animal from "./Animal";

class Gato extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }
  miar() {
    console.log("O  gato mia : MIAUUU ");
  }
}

export default Gato;
