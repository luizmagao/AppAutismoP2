<template>
  <h1>Lista de pessoas</h1>

  <v-btn to="/pessoas/adicionar">Adicionar pessoa</v-btn>

  <v-col cols="12" md="12" class="d-flex justify-center">
    <v-card
      prepend-icon="$vuetify"
      subtitle="The #1 Vue UI Library"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">Welcome to Vuetify</span>
      </template>
      <v-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup></script>

<style scoped></style>
