<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol></VCol>
      <VCol lg="6" md="12" sm="12"  cols="12">
        <paragraphes>
          <template v-slot:Title>Livraison de propane à Montréal et la Rive-Sud</template>
          <template v-slot:Paragraphes1>
            <h4>Ne manquez plus jamais de propane!</h4>
            Notre entreprise située à Saint-Jean-sur-Richelieu offre un service sécuritaire de livraison de gaz propane à Montréal et sur la Rive-Sud, selon vos besoins.
          </template>
          <template v-slot:Paragraphes2>
            Afin que vous n’ayez pas toujours besoin d’appeler pour vous faire livrer du gaz, nous vous proposons 2 solutions conviviales. D’abord, dormez sur vos deux oreilles grâce à notre service de livraison automatique.* (application sous certaines conditions). Un petit imprévu? Pas de problème! Utilisez simplement notre service pratique de commande sur appel! En cas d’urgence, notre service est disponible 24 heures sur 24, 7 jours sur 7.
          </template>
          <template v-slot:Paragraphes3>
            *Livraison automatique: bien que MP Beauchemin effectue certaines livraisons sans que vous ayez à le demander, MP Beauchemin n’assume aucune responsabilité quant à la disponibilité et la suffisance de votre approvisionnement. Nos systèmes informatiques calculeront un algorithme, par contre, votre consommation est toujours imprévisible. Nous ne donnons aucune garantie que nos systèmes pourront prédire votre utilisation, donc la quantité de combustible à votre disponibilité demeure l’entière responsabilité du client, à ses risques et périls. En tout temps, le client prend l’engagement de nous appeler, dès que le réservoir atteint le seuil de 20%. Le client reconnait que MP Beauchemin se dégage de toutes responsabilités, dommages et pertes causés par le manque de carburant et le client accepte d’assumer entièrement cette responsabilité à ses frais, malgré l’utilisation du service de livraison automatique.
          </template>
          <template v-slot:smallTitle1>Clients commerciaux</template>
          <template v-slot:text1>
            En plus de desservir nos clients résidentiels, Mazout & Propane Beauchemin est fier d’offrir la livraison de propane aux commerces de la Rive-Sud de Montréal.
          </template>
          <template v-slot:text2>
            À tous coups, vous pouvez compter sur notre service de livraison de propane fiable et rapide. Après tout, la livraison de gaz propane, c’est la passion qui nous allume depuis plus de 60 ans!
          </template>
        </paragraphes>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';

</script>

<style>

</style>
