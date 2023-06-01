<template>
  <back-title></back-title>
  <div class="text">
    <p>
      De façon courante, à la maison, on utilise souvent le propane pour alimenter les chauffe-eau
      de la piscine et du foyer, mais ce type de gaz a plusieurs autres fonctions, parfois
      insoupçonnées. Découvrez-en 5!
    </p>
    <p>
      <span class="bold">Alimenter des électroménagers.</span> Vous possédez une conduite de gaz à
      la maison ou un véhicule motorisé? Pourquoi ne pas opter pour des électroménagers alimentés au
      propane? Ils sont plus efficaces en plus d’être beaucoup plus écologiques que les
      électroménagers alimentés à l’électricité traditionnelle.
    </p>
    <p>
      <span class="bold">Faire rouler des véhicules.</span> Vous avez sûrement déjà vu des chariots
      élévateurs ou des voiturettes de golf alimentés au propane. Mais avez-vous déjà remarqué que
      plusieurs autobus, taxis, véhicules postaux et de livraison étaient alimentés par ce même gaz?
      Celui-ci est beaucoup plus propre que le pétrole. Il s’agit d’une solution d’avenir! Il est
      possible, dès aujourd’hui de convertir votre véhicule au propane.
    </p>
    <p>
      <span class="bold">Faire sécher des récoltes.</span> Il est commun de faire sécher les grains,
      le tabac et les fruits grâce au propane. Pour les agriculteurs, c’est une solution rapide,
      fiable, économique et écologique, puisqu’il n’y a que 10 % de perte d’énergie lors de
      l’utilisation de ce gaz.
    </p>
    <p>
      <span class="bold">Chauffer des bâtiments.</span> On entend souvent parler du mazout qui
      chauffe des bâtiments et des maisons, mais moins du propane. Pourtant, ce gaz coûte de 15 à 25
      % moins cher que le chauffage électrique traditionnel. En ce moment, on utilise ce type
      d’énergie sur les chantiers ainsi que dans les serres et les bâtiments agricoles.
    </p>
    <p>
      <span class="bold">Transformer des métaux.</span> Dans les mines, on utilise le propane
      pendant le processus de transformation des métaux.
    </p>
    <p>
      Chez Mazout et Propane Beauchemin, notre objectif depuis 3 générations, c’est de nous dépasser
      sans cesse pour nos clients. Mettez-nous au défi de trouver la solution qui vous convient!
      Contactez-nous dès maintenant
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import BackTitle from './BackTitle.vue'
import TextSection from '../TextSection.vue'

const store = useStore()
const info = computed(() => store.state.selectedBlogue)
</script>

<style lang="scss" scoped>
p {
  margin: 2rem auto;
  text-align: left;
}

.bold {
  font-weight: bold;
}
.text {
  padding-left: 10rem;
  padding-right: 10rem;
}
</style>
