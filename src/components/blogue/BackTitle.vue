<template>
  <VRow>
    <VCol lg="6">
      <router-link to="/articles">
        <h5>
          <span class="backTitle">Articles</span><VIcon class="icon">mdi-arrow-left</VIcon>
          {{ info.title }}
        </h5></router-link
      >
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const info = computed(() => store.state.selectedBlogue)
</script>

<style lang="scss" scoped>
* {
  font-size: 2rem;
}

.v-row {
  margin-top: 2rem;
}
.backTitle {
  margin-right: 0.5rem;
  color: #5baf3c;
}

.icon {
  margin-right: 2rem;
}
</style>
