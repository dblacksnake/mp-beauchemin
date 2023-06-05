<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol lg="12" md="12" sm="12" cols="12">
        <paragraphes>
          <template v-slot:Title
            >Location de réservoir de gaz propane résidentiel à la Rive-Sud et Montréal</template
          >

          <template v-slot:Paragraphes2>
            En effet, nous offrons le service de location de réservoirs de gaz propane résidentiels
            de la célèbre marque Manchester. Nos contrats incluent des inspections périodiques, les
            réparations ainsi que les requalifications, s’il y a lieu. Par ailleurs, lorsque vous
            optez pour la location d’un réservoir de gaz propane, vous vous dégagez automatiquement
            des responsabilités d’assurances et de conformité du réservoir.
          </template>
        </paragraphes>
        <h4>Localisation du réservoir</h4>
        <list :list="list"></list>
        <paragraphes>
          <template v-slot:text1>
            De plus, nous prévoyons une distance maximale de 30 mètres entre le réservoir et le
            camion-citerne qui effectue son remplissage. Enfin, le réservoir est toujours placé de
            niveau, sur un socle solide et imperméable.</template
          >
          <template v-slot:text2>
            Chez Mazout & Propane Beauchemin, nos équipes d’experts sont réputées pour la qualité de
            leur travail, leur rapidité d’intervention et leur professionnalisme. Pour en savoir
            plus sur notre service de location de réservoirs de gaz propane résidentiels et sur les
            différents formats de réservoirs offerts, ou pour connaître tous nos produits et nos
            services,
            <a href="/contact">communiquez avec nous.</a>
          </template>
        </paragraphes>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Paragraphes from '../ParagraphesComponent.vue'
import List from '../ListComponent.vue'

const list = {
  title:
    'Lors de l’installation d’un réservoir de gaz propane chez l’un de nos clients, nous nous assurons en tout temps que les distances de dégagement sécuritaires sont respectées, soit :',
  bullets: [
    'À 1 mètre d’une ouverture de bâtiment (porte, fenêtre, sortie d’air, etc.).',
    'À 3 mètres d’un compteur électrique.',
    'À 3 mètres d’une source d’allumage (climatiseur, thermopompe, prise électrique, etc.'
  ]
}
</script>
<!-- eslint-disable linebreak-style -->

<style></style>
