<template>
  <back-title></back-title>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import BackTitle from './BackTitle.vue'

const store = useStore()
const info = computed(() => store.state.selectedBlogue)
</script>
