<template>
  <h1>Lista de pessoas</h1>

  <v-col cols="12" md="12" class="d-flex justify-center">
    <ul>
      <li v-for="pessoa in pessoas" :key="pessoa.id">{{ pessoa.nome }}</li>
    </ul>
  </v-col>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { showAll } from "@/composables/pessoas";

const pessoas = ref();

onMounted(async () => {
  pessoas.value = await showAll();
});
</script>

<style scoped></style>
