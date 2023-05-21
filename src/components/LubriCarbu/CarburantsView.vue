<template>
  <v-container grid-list-xs>
    <h1>Découvrez les avantages du carburant diesel avec Mazout & Propane Beauchemin</h1>
    <div>
      Mazout & Propane Beauchemin à Saint-Jean-sur-Richelieu, c'est aussi un fournisseur de diesel
      pour vos camions ou équipements agricoles. Nous pouvons vous livrer du diesel clair saisonnier
      ou du diesel coloré. Pour limiter votre empreinte de l'environnement, vous pouvez également
      choisir du carburant biodiesel.
    </div>
    <VRow>
      <VCol>
        <v-card elevation="0">
          <h3>Quelques définitions</h3>
          <div class="definition" v-for="definition in definitions" :key="definition.title">
            <h4>{{ definition.title }}</h4>
            {{ definition.text }}
          </div>
          <h4 style="margin-top: 3rem">Fluide d’échappement diesel (DEF) de marque Terra clair</h4>
        </v-card>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
const definitions = [
  {
    title: 'Diesel clair saisonnier',
    text: 'Produit pour les moteurs qui requièrent un diesel bas en soufre.'
  },
  {
    title: 'Diesel coloré saisonnier',
    text: 'Produit pour les moteurs qui requièrent un diesel bas en soufre pour l’utilisation agricole.'
  },
  {
    title: 'Biodiesel',
    text: 'Produit pour les moteurs qui requièrent un diesel bas en soufre, fait à partir de graisses animales ou d’huiles végétales usées.'
  },
  {
    title: 'Essence sans plomb E-10',
    text: 'Produit pour les moteurs qui requièrent un indice d’octane de 87.'
  },
  {
    title: 'Essence super sans plomb',
    text: 'Produit pour les moteurs qui requièrent un indice d’octane de 91.'
  }
]
</script>
