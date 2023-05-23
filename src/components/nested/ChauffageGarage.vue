<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->

<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol></VCol>
      <VCol lg="6" md="12" sm="12"  cols="12">
        <paragraphes>
          <template v-slot:Title>Chauffez votre garage du Grand Montréal au gaz propane</template>
          <template v-slot:Paragraphes1>
            Le gaz propane est aussi une solution de chauffage efficace pour les garages, ateliers de peinture, cours à bois, ébénisteries, entrepôts ou manufactures. Le chauffage par rayonnement permet de garder une température constante dans les bâtiments industriels de moyenne ou de grande hauteur, avec ou sans isolation. Nos aérothermes scellés sont parfaitement adaptés et sécuritaires pour tous les endroits poussiéreux
          </template>
        </paragraphes>
        <list :list="list"></list>
        <h3 class="mt-4">Marques d'aérothermes au gaz scellés ou non scellés</h3>
        <paragraphes>
          <template v-slot:smallTitle1>Modine</template>
          <template v-slot:text1>Mazout & Propane Beauchemin effectue la réparation et l'entretien d'appareils de chauffage de marque Modine. Avec une puissance allant jusqu'à 400 000 BTU, ces unités peuvent aisément chauffer les espaces industriels de grande taille. Elles sont également disponibles avec évent et prise d'air extérieure pour les endroits à risque d'incendie.</template>

          <template v-slot:smallTitle2>Reznor</template>
          <template v-slot:text2>Performante et très durable, la gamme d'aérothermes Reznor se suspend à merveille au plafond d'une usine, d'un entrepôt ou de tout autre espace commercial. Que ce soit pour le chauffage, la protection contre le gel ou la ventilation, ces appareils vous charmeront par leur facilité d'entretien et leur faible coût d'installation.</template>

          <template v-slot:smallTitle3>
            <h4 class="mb-4">Marque de chauffage à infrarouge</h4>
            Space Ray
          </template>
          <template v-slot:text3>
            Bloquez le froid avec les unités de chauffage radiant au gaz de Space Ray. Propageant une chaleur constante, ces appareils compacts sont utilisés pour chauffer les espaces plus difficiles d'accès où l'utilisation de longs tubes radiants est impossible. D'une longueur de 9 pieds 3 pouces, les unités Space Ray sont parfaites pour votre garage ou votre atelier.
          </template>
        </paragraphes>
      </VCol>
    </VRow>
  </v-container>
</template>
<!-- eslint-disable linebreak-style -->

<script lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';
import List from '../ListComponent.vue';

export default defineComponent({
  name: 'ChauffageGarage',
  components: {
    Paragraphes,
    List,
  },
  setup() {
    const list = {
      title: 'Nos produits',
      bullets: [
        'Aérothermes au gaz scellés ou non scellés',
        'Chauffage radiant',
        'Chauffage par rayonnement avec ou sans isolation',
        'Tube radiant au gaz',
        'Tube radiant en épingle',
        'Chauffage au gaz pour entrepôt',
        'Chauffage radiant au gaz',
        'Système de chauffage à infrarouge',
      ],
    };
    return {
      list,
    };
  },
});
</script>
<!-- eslint-disable linebreak-style -->

<style>

</style>
