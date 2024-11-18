<template>
  <h1>Lista de pessoas</h1>

  <v-btn to="/pessoas/adicionar">Adicionar pessoa</v-btn>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Ações</th>
        <th class="text-left">ID</th>
        <th class="text-left">Último nome</th>
        <th class="text-left">Primeiro Nome</th>
      </tr>
    </thead>
    <tbody>
      <TransitionGroup name="slide">
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <th class="text-left">
            <v-btn color="orange" class="ma-1">Editar</v-btn>
            <v-btn color="red" class="ma-1" @click="excluirDados(pessoa)"
              >Excluir</v-btn
            >
          </th>
          <td>{{ pessoa.id }}</td>
          <td>{{ pessoa.primeiro_nome }}</td>
          <td>{{ pessoa.ultimo_nome }}</td>
        </tr>
      </TransitionGroup>
    </tbody>
  </v-table>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Pessoa } from "@/composables/Pessoa";

const pessoas = ref([]);
const listaPessoas = ref([]);

const excluirDados = async (pessoa) => {
  try {
    await Pessoa.instancia().excluir(pessoa);
    pessoas.value = pessoas.value.filter((p) => p.id !== pessoa.id);
    // mostrarTodos();
  } catch (error) {
    console.log(error);
  }
};

const mostrarTodos = async () => {
  try {
    pessoas.value = await Pessoa.instancia().mostrarTodos();
  } catch (error) {
    console.log(error);
  }
};

const isOnline = ref(false);

const updateConnectionStatus = () => {
  isOnline.value = navigator.onLine;
  console.warn(
    `Estado de conexão: ` + (isOnline.value ? "(online)" : "offline")
  );
};

onMounted(() => {
  mostrarTodos();
  updateConnectionStatus();
  console.log(listaPessoas.value);
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.slide-move {
  transition: transform 0.5s ease;
}
</style>
