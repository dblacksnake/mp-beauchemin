<template>
  <v-app>
    <top-bar></top-bar>

    <v-main class="main">
      <router-view class="router" />
    </v-main>
    <img class="lignes" src="./assets//background/CurvedLines.png" alt="" />
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
  .lignes {
    width: 95% !important;
    margin: auto;
  }
}

@media (max-width: 400px) {
  main {
    width: 100%;
    background-color: red;
  }
}
* {
  text-align: center;
  color: black;
}

.lignes {
  width: 80%;
  margin: auto;
  margin-top: 2rem;
}

main {
  width: 80%;
  margin: auto;
  margin-top: 2.8rem;
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
