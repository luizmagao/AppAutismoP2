<template>
  <h1>Adicionando pessoa</h1>
  <v-form @submit.prevent="add">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="primeiro_nome"
          label="Primeiro nome"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="ultimo_nome" label="Último nome"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          label="Qual seu bairro"
          v-model="bairro_escolhido"
          :items="bairros"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-btn
          prepend-icon="$vuetify"
          color="red"
          type="submit"
          :disabled="!primeiro_nome || !ultimo_nome || !bairro_escolhido"
        >
          Adicionar Pessoa
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
// import db from "@/composables/db";
import { Pessoa } from "@/composables/Pessoa";

const primeiro_nome = ref();
const ultimo_nome = ref();
const bairro_escolhido = ref();
const bairros = ref([
  "São Geronço",
  "Alto do Batista",
  "João 23",
  "Betânia",
  "Vila dos cornos",
  "São Benedito",
]);

function add() {
  try {
    Pessoa.i().adicionar({
      primeiro_nome: primeiro_nome.value,
      ultimo_nome: ultimo_nome.value,
      bairro_escolhido: bairro_escolhido.value,
    });

    primeiro_nome.value = "";
    ultimo_nome.value = "";
    bairro_escolhido.value = "";

    console.log("Dados salvo com sucesso!");
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  console.log();
});
</script>

<style scoped></style>
