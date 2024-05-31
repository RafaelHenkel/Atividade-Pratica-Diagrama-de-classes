"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PedidoPizza {
    constructor() {
        this.pizzas = [];
        this.valorTotal = 0;
    }
    adicionarPizza(pizza) {
        this.pizzas.push(pizza);
    }
    removerPizza(sabor) {
        const indexPizza = this.pizzas.findIndex((item) => item.sabor === sabor);
        if (indexPizza !== 1) {
            this.pizzas.splice(indexPizza, 1);
        }
        else {
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
exports.default = PedidoPizza;
