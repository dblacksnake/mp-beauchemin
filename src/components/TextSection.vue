<template>
  <VRow>
    <VCol cols="12">
      <h1>{{ title }}</h1>
    </VCol>
    <VCol cols="12" sm="12" lg="4" md="4" v-for="blogue in content" :key="blogue.title">
      <h4>{{ blogue.title }}</h4>
      <div class="mt-4 pa-4">
        {{ blogue.text }}
      </div>
      <a href="/blogue"> {{ blogue.btn }}</a>
    </VCol>
    <VCol cols="12" class="mb-10">
      <slot name="btn"> </slot>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  content: Object
  //   numberCols: Number
})
</script>
