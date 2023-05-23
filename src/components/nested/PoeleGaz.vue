<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->

<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
        <paragraphes>
          <template v-slot:Title>Installation de poêles au gaz dans le Grand Montréal</template>
          <template v-slot:Paragraphes1>Vous venez de faire l’acquisition du poêle à gaz de vos rêves? Appelez Mazout & Propane Beauchemin pour une installation rapide et efficace, et ce, en toute sécurité. Nous installons les poêles de toutes marques, dont Kingsman, Continental et Valor. Vous verrez à notre salle d'exposition une multitude de possibilités pour vous tenir au chaud!</template>
          <template v-slot:Paragraphes2>Nous offrons également nos services pour la réparation de vos appareils. Tous nos techniciens sont certifiés par la Régie du bâtiment du Québec.</template>
          <template v-slot:Paragraphes3>Pour en savoir plus,
            <a href="https://mpbeauchemin.com/uploads/v9IwDXXP/poele_au_gaz.pdf" target="_blank" >consultez cette brochure</a>  de la marque Kingsman (en anglais).</template>
        </paragraphes>
  </v-container>
</template>
<!-- eslint-disable linebreak-style -->

<script lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';


export default defineComponent({
  components: { Paragraphes },
  name: 'PoeleGaz',
  setup() {
    return {

    };
  },
});
</script>
<!-- eslint-disable linebreak-style -->

<style>

</style>
