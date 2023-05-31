<template>
  <VRow>
    <VCol cols="12">
      <h1>{{ title }}</h1>
    </VCol>
    <VCol cols="12" sm="12" lg="4" md="4" v-for="c in content" :key="c.title">
      <h4>{{ c.title }}</h4>
      <div class="mt-4 pa-4">
        {{ c.text }}
      </div>
      <a href="/blogue"> {{ c.btn }}</a>
    </VCol>
    <slot name="text1"> </slot>
    <slot name="text2"> </slot>
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
