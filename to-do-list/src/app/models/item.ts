export class Item {
  nome: string = '';
  feito: boolean = false;
  statys: string = '';

  Item (nome: string, feito: boolean) {
    this.nome = nome;
    this.feito = feito;
  }
}
