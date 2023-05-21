<template>
  <v-container grid-list-xs>
    <h4 class="mb-4">{{ list?.title }}</h4>
    <ul>
      <li v-for="item in list?.bullets" :key="item">{{ item }}</li>
    </ul>
  </v-container>
</template>

<script setup lang="ts">
defineProps({
  list: Object
})
</script>

<style lang="scss" scoped>
ul {
  margin-left: 2rem;

  li {
    text-align: left !important;
    color: rgba(0, 0, 0, 0.77);
  }
}
</style>
