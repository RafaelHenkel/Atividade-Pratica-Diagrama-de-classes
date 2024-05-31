"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor() {
        this.pizzas = [];
        this.valorTotal = 0;
    }
    adicionarPizza(pizza) {
        this.pizzas.push(pizza);
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
exports.default = Pedido;
