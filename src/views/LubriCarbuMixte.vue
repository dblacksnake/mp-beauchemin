<template>
  <v-container grid-list-xs>
    <VRow>
      <VCol lg="7" md="12" sm="12" cols="12">
        <lubrifiants-view></lubrifiants-view>
      </VCol>
      <VCol lg="5" md="12" sm="12" cols="12">
        <carburants-view></carburants-view>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <img src="../assets/img/technicien_mpbeauchemin.jpg" alt="Tech" />
      </VCol>
      <VCol>
        <img src="../assets/img/Propane Beauchemin_réservoirs.jpg" alt="Propane" />
      </VCol>
    </VRow>
  </v-container>
</template>

<style setup lang="ts">
import CarburantsView from '@/components/LubriCarbu/CarburantsView.vue';
import LubrifiantsView from '@/components/LubriCarbu/LubrifiantsView.vue';
</style>

<style lang="scss" scoped>
img {
  margin-top: 2rem;
  width: 44rem;
  height: 100%;
}
</style>
