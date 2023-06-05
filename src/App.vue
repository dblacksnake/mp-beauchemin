<template>
  <v-app>
    <top-bar></top-bar>

    <v-main class="main">
      <router-view class="router" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import TopBar from './components/TopBar.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('GET_Photos', 'photos')
})
</script>

<style lang="scss">
@media (max-width: 1279px) {
  .imgDisplay {
    display: none;
  }
}

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
