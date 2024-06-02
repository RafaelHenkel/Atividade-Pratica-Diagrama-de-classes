import { AnimalType } from "../../types";
import Animal from "./Animal";

class Cavalo extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }
  relinchar() {
    console.log("O cavalo relincha : iRROROORO");
  }
}

export default Cavalo;
