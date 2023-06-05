<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol lg="12" md="12" sm="12" cols="12">
        <poele-gaz id="poele"></poele-gaz>
        <encastre-gaz id="encastre"></encastre-gaz>
        <cuisiniere-gaz id="cuisiniere"></cuisiniere-gaz>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import EncastreGaz from './EncastreGaz.vue'
import PoeleGaz from './PoeleGaz.vue'
import CuisiniereGaz from './CuisiniereGaz.vue'
</script>

<style></style>
