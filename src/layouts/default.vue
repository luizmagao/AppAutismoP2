<template>
  <v-app theme="light">
    <v-main>
      <v-app-bar>AppAutismo P2</v-app-bar>
      <v-navigation-drawer>
        <v-card class="mx-auto" max-width="300">
          <v-list density="compact">
            <v-list-subheader>menu principal</v-list-subheader>

            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              :to="item.to"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-navigation-drawer>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
const items = [
  { text: "Pessoas", icon: "mdi-account", to: "/pessoas" },
  { text: "Clientes", icon: "mdi-flag", to: "/clientes" },
  { text: "Login", icon: "mdi-flag", to: "/login" },
];
//
</script>
