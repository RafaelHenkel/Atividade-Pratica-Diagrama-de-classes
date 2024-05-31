"use strict";
class Pedido {
    constructor() {
        this.itens = [];
    }
    add(item) {
        this.itens.push(item);
    }
    recuperarValorTotal() {
        let total = this.itens.map((i) => i.recuperarValorTotal()).reduce((sum, v) => sum + v, 0);
        return total;
    }
    aplicarDescontoEmReais(desconto) {
        throw new Error("method not implemented");
    }
    removeItem(item) {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.recuperarValorTotal() * porcentagem;
        this.itens.forEach((item) => item.valor - descontoEmReais);
    }
}
class ItemPedido {
    constructor(valor, nome, quantidade) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    removeItem(item) {
        throw new Error("method not implemented");
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        throw new Error("method not implemented");
    }
}
