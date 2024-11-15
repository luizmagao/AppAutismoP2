import db from "@/composables/db";


export class Pessoa {

  constructor() {
  }

  static i() {
    return new this
  }

  adicionar(dados) {
    db.collection("pessoas").add({
      dados
    });
  }
  editar(id) {}
  excluir(id) {}
  mostrarTodos() {}
  mostrar(id) {}

}

