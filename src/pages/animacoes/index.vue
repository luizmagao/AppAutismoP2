<template>
  <v-row>
    <v-col cols="12" class="d-flex flex-column align-center">
      <h1>Animações</h1>
      <v-divider class="my-4"></v-divider>
      <v-btn color="primary" @click="exibir = !exibir">Mostrar mensagem</v-btn>
      <transition name="fade">
        <v-alert v-if="exibir" class="ma-10" type="info">
          {{ msg }}
        </v-alert>
      </transition>
      <transition name="slide">
        <v-alert v-if="exibir" class="ma-10" type="info">
          {{ msg }}
        </v-alert>
      </transition>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Uma mensagem de informação para o usuário!");
const exibir = ref(false);
</script>

<style scoped>
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
}

.slide-leave-active {
  animation: slide-out 2s ease;
}
</style>
