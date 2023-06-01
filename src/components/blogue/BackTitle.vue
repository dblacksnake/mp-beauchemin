<template>

  <router-link to="/articles"> <h5><VIcon>mdi-arrow-left</VIcon> {{ info.title }}</h5></router-link>

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
}

i{
}

.title{
  margin-left: -4rem;
  margin: auto 0;

}
</style>
