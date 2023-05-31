<template>
  <router-link to="/blogue"> <VIcon>mdi-arrow-left</VIcon></router-link>
  <h5>{{ info.title }}</h5>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const info = computed(() => store.state.selectedBlogue)
</script>

<style lang="scss" scoped>
* {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
