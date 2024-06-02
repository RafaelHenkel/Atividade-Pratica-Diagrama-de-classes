import { AnimalType } from "../../types";
import Animal from "./Animal";

class Cachorro extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }
  latir() {
    console.log("o dog late : LATIU AU AU");
  }
}

export default Cachorro;
