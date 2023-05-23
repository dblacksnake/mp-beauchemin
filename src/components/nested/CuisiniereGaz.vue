<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
        <paragraphes>
          <template v-slot:Title>Nouvelle cuisinière au gaz? Faites-la installer par les experts</template>
          <template v-slot:smallTitle1>Vous vous êtes récemment acheté une cuisinière au gaz?</template>
          <template v-slot:text1>
            Les experts de Mazout & Propane Beauchemin peuvent installer toutes les marques dans la région métropolitaine, et ce, de façon sécuritaire et rapide. L'installation d'une cuisinière au gaz propane doit être faite par des professionnels pour éviter les problèmes dans le futur. Chez Mazout & Propane Beauchemin, tous nos techniciens sont certifiés par la Régie du bâtiment du Québec. Vous êtes donc assuré que vous faites le bon choix en nous confiant l'installation de votre nouvel appareil.
          </template>
        </paragraphes>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';


</script>
