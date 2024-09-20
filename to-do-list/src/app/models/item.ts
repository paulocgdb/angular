export class Item {
  nome: string = '';
  feito: boolean = false;
  status: string = '';

  Item (nome: string, feito: boolean, status: string) {
    this.nome = nome;
    this.feito = feito;
    this.status = status;
  }
}
