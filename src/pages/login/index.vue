<template>
  <h1>login</h1>

  <v-row>
    <v-col cols="12" md="4">
      <v-text-field label="E-mail" required></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="4">
      <v-text-field label="Senha" required></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn> Entrar no sistema </v-btn>
    </v-col>
  </v-row>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: login
</route>
