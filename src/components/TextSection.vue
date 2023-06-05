<template>
  <VRow>
    <VCol cols="12">
      <h1>{{ title }}</h1>
    </VCol>
    <VCol cols="12" sm="12" lg="4" md="4" v-for="c in content" :key="c.title">
      <div v-if="c.articleTitle" class="serviceTitle">
        <v-icon :icon="c.icon"></v-icon>
        <h2>{{ c.title }}</h2>
      </div>
      <h4 v-else>{{ c.title }}</h4>
      <div class="mt-4 pa-4">
        {{ c.text }}
      </div>
      <div class="mt-4 pa-4">
        {{ text }}
      </div>
      <vBtn v-if="c.href" @click="to(c.href)">
        <span class="text-white"> {{ c.btn }}</span>
      </vBtn>
    </VCol>
    <slot name="text1"> </slot>
    <slot name="text2"> </slot>
    <VCol cols="12" class="mb-10">
      <slot name="btn"> </slot>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const route = useRouter()

defineProps({
  title: String,
  text: String,
  serviceTitle: Boolean,
  content: Object
  //   numberCols: Number
})

const to = (href: string) => {
  route.push(href)
}
</script>

<style lang="scss" scoped>
.serviceTitle {
  display: flex;
}
.v-btn {
  background-color: #2b4479;
  color: white !important;
}

h2 {
  color: #2b4479 !important;
}
</style>
