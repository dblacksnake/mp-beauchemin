<template>
  <v-container>
    <LubrifiantsView></LubrifiantsView>

    <VRow>
      <VCol lg="7" md="12" sm="12" cols="12">
        <LubrifiantsView></LubrifiantsView>
      </VCol>
      <VCol lg="5" md="12" sm="12" cols="12">
        <CarburantsView></CarburantsView>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <img class="imgDisplay" src="../assets/img/technicien_mpbeauchemin.jpg" alt="Tech" />
      </VCol>
      <VCol>
        <img
          class="imgDisplay"
          src="../assets/img/Propane Beauchemin_réservoirs.jpg"
          alt="Propane"
        />
      </VCol>
    </VRow>
  </v-container>
</template>

<style setup lang="ts">
import LubrifiantsView from './components/LubriCarbu/LubrifiantsView.vue'
import CarburantsView from './components/LubriCarbu/CarburantsView.vue'
</style>

<style lang="scss" scoped>
img {
  margin-top: 2rem;
  width: 44rem;
  height: 100%;
}
</style>
