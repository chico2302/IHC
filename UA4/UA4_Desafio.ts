// a)
class Produto {
  nome: string;
  descricao: string;
  preco: number;
  fabricante: string;
  quantidadeEstoque: number;

  constructor(
    nome: string,
    descricao: string,
    preco: number,
    fabricante: string,
    quantidadeEstoque: number
  ) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.fabricante = fabricante;
    this.quantidadeEstoque = quantidadeEstoque;
  }
}
// b)
class Venda {
  produtos: Produto[];

  constructor(produtos: Produto[]) {
    this.produtos = produtos;
  }

  calcularTotal(): number {
    let total = 0;

    for (const produto of this.produtos) {
      total += produto.preco;
    }

    return total;
  }
}

// c)
const produto1 = new Produto(
  "Camiseta do grêmio",
  "Camisa de torcida do time gaúcho Grêmio Foot-Ball Porto Alegrense",
  320.00,
  "GrêmioMania",
  150
);

const produto2 = new Produto(
  "Carregador de telefone",
  "Cabo com ponta USB e USB-C e tomada para carregamento de telefone",
  80.00,
  "Xiaomi",
  45
);

const venda = new Venda([produto1, produto2]);
console.log("Valor total da venda: R$ " + venda.calcularTotal());
