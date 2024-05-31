interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void;
}

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    let total = this.itens.map((i) => i.recuperarValorTotal()).reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmReais(desconto: number): void {
    throw new Error("method not implemented");
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.recuperarValorTotal() * porcentagem;
    this.itens.forEach((item) => item.valor - descontoEmReais);
  }
}

class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }
  removeItem(item: string): void {
    throw new Error("method not implemented");
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
  aplicarDescontoEmPorcentagem(desconto: number): void {
    throw new Error("method not implemented");
  }
}
