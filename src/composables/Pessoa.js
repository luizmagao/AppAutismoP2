import db from "@/composables/db";


export class Pessoa {

  tabela = 'pessoas';

  constructor() {
  }

  static instancia() {
    return new this
  }

  adicionar(dados) {
    db.collection(this.tabela).add(dados);
  }
  editar(id) {}

  async excluir(pessoa) {
    try {
      await db.collection(this.tabela).doc(pessoa.id).delete();
    } catch (error) {
      return new Error(error)
    }
  }

  async mostrarTodos() {
    try {
      const response = await db.collection(this.tabela).get({keys: true});

      const dadosFormatados = response.map((item) => ({
          id: item.key,
          ...item.data
      }))

      return dadosFormatados;
    } catch(error) {
      return new Error(error);
    }
  }
  mostrar(id) {}

}

