<template>
  <h1>Adicionando pessoa</h1>

  <v-form>
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
</script>

<style scoped></style>
