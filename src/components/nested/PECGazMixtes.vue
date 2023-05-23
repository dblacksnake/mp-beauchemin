<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->

<template>
    <v-container grid-list-xs>
      <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
      <VRow>
        <VCol lg="6" md="12" sm="12"  cols="12">
            <poele-gaz id="poele"></poele-gaz>
            <encastre-gaz id="encastre"></encastre-gaz>
            <cuisiniere-gaz id="cuisiniere"></cuisiniere-gaz>
        </VCol>
      </VRow>
    </v-container>
  </template>
  <!-- eslint-disable linebreak-style -->

<script lang="ts">
import { defineComponent } from 'vue';
import EncastreGaz from './EncastreGaz.vue';
import PoeleGaz from './PoeleGaz.vue';
import CuisiniereGaz from './CuisiniereGaz.vue';

export default defineComponent({
  components: { EncastreGaz, PoeleGaz, CuisiniereGaz },
  name: 'PECMixtes',
  setup() {
    return {

    };
  },
});
</script>
  <!-- eslint-disable linebreak-style -->

  <style>

  </style>
