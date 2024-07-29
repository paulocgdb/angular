export class Item {
  nome: string = '';
  feito: boolean = true;

  Item (nome: string, feito: boolean) {
    this.nome = nome;
    this.feito = feito;
  }
}
