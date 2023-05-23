<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
        <paragraphes>
          <template v-slot:Title>Un foyer encastrable bien installé dans le Grand Montréal</template>
          <template v-slot:Paragraphes1>Nous installons les foyers encastrables (inserts) au gaz de toutes marques, y compris Kingsman, Continental et Valor.
            Notre équipe est à votre disposition pour vous aider à choisir le meilleur appareil au gaz : <a href="/contact">posez-nous vos questions dès</a> aujourd'hui</template>
          <template v-slot:Paragraphes2>Les techniciens de Mazout & Propane Beauchemin peuvent également effectuer la réparation de vos appareils.</template>
        </paragraphes>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';


</script>

<style>

</style>
