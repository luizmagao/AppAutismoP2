<template>
  <v-sheet class="mx-auto" width="300">
    <v-form ref="form">
      <v-text-field label="Name" required></v-text-field>

      <v-select label="Item" required></v-select>

      <v-checkbox label="Do you agree?" required></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block> Validate </v-btn>

        <v-btn class="mt-4" color="error" block> Reset Form </v-btn>

        <v-btn class="mt-4" color="warning" block> Reset Validation </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: login
</route>
