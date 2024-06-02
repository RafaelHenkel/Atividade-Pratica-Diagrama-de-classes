import { AnimalType } from "../../types";

class Animal {
  patas: number;
  rabo: boolean;
  boca: boolean;

  constructor(animal: AnimalType) {
    this.boca = animal.boca;
    this.patas = animal.patas;
    this.rabo = animal.rabo;
  }
}

export default Animal;
