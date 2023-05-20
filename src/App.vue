<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import TopBar from './components/TopBar.vue'
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
}
</style>
