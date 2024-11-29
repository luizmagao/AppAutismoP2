<template>
  <h1>Lista de pessoas</h1>

  <v-col cols="12" md="12" class="d-flex justify-center">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">id</th>
          <th class="text-left">Nome</th>
          <th class="text-left">SobreNome</th>
          <th class="text-left">Bairro</th>
          <th class="text-left">Situação</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <td>{{ pessoa.id }}</td>
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.sobrenome }}</td>
          <td>{{ pessoa.bairro }}</td>
          <td>
            <v-chip
              color="green"
              v-if="pessoa.status"
              prepend-icon="mdi-check-bold"
              variant="elevated"
              @click="alterStatus(pessoa)"
            >
              Ativo
            </v-chip>
            <v-chip
              color="red"
              v-else-if="!pessoa.status"
              prepend-icon="mdi-close-circle-outline"
              variant="elevated"
              @click="alterStatus(pessoa)"
            >
              Desativado
            </v-chip>
          </td>
          <td>
            <v-btn @click="excluir(pessoa)" color="red" prepend-icon="mdi-close"
              >Excluir</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-col>
</template>

<script setup>
import { showAll, update, remove } from "@/composables/pessoas";
import { onMounted, ref } from "vue";

const pessoas = ref();

const alterStatus = async (pessoa) => {
  let data = {};
  if (pessoa.status) {
    data = {
      id: pessoa.id,
      status: 0,
    };
  }
  if (!pessoa.status) {
    data = {
      id: pessoa.id,
      status: 1,
    };
  }
  await update(data);
  init();
};

const excluir = async (pessoa) => {
  await remove(pessoa);
  init();
};

const init = async () => {
  pessoas.value = await showAll();
};

onMounted(() => {
  init();
});
</script>

<style scoped></style>
