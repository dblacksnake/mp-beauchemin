<template>
  <v-app>
    <top-bar></top-bar>

    <v-main class="main">
      <router-view class="router" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import TopBar from './components/TopBar.vue'
</script>

<style lang="scss">
* {
  text-align: center;
  color: black;
}

main {
  margin-top: 2rem;
}

.router {
  margin-top: 2rem;
  min-width: 80%;
}
h1,
h2,
h3 {
  color: #50b848;
  margin: auto;
}
a {
  text-decoration: none;
  color: black;
}
</style>
