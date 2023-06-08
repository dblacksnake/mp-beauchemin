<template>
  <carousel-view :contents="items"></carousel-view>
  <VRow>
    <VCol lg="6" md="12" sm="12" cols="12">
      <LubrifiantsView></LubrifiantsView>
    </VCol>
    <VCol lg="6" md="12" sm="12" cols="12">
      <CarburantsView></CarburantsView>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import LubrifiantsView from '@/components/LubriCarbu/LubrifiantsView.vue'
import CarburantsView from '@/components/LubriCarbu/CarburantsView.vue'
import CarouselView from '@/components/CarouselView.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const items = computed(() => store.state.mixteCarousel)

onMounted(() => {
  store.dispatch('GET_PagePhotos', { page: 'mixte', db: 'mixteCarousel' })
})
</script>

<style lang="scss" scoped>
img {
  margin-top: 2rem;
  width: 44rem;
  height: 100%;
}
</style>
