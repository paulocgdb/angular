export class Item {
  nome: string = '';
  feito: boolean = false;

  Item (nome: string, feito: boolean) {
    this.nome = nome;
    this.feito = feito;
  }
}
