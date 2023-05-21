<template>
  <v-container grid-list-xs>
    <h1>Le bon lubrifiant en Montérégie et à Montréal</h1>
    <div>
      Votre moteur, votre différentiel ou votre compresseur a besoin de lubrifiant? Mazout & Propane
      Beauchemin a en inventaire plusieurs types de lubrifiants, dont:
    </div>
    <VRow>
      <VCol>
        <VCard elevation="0">
          <VCardTitle primary-title>
            <list v-for="(list, index) in lists" :key="index" :list="list"></list>
          </VCardTitle>
        </VCard>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import List from '../components/ListComponent.vue'

const lists = [
  {
    title: 'Lubrifiants automobiles',
    bullets: [
      'Huile à moteur, fluide pour transmission, fluide pour engrenage',
      'Fluide pour transmission et hydraulique'
    ]
  },
  {
    title: 'Lubrifiants industriels',
    bullets: [
      'Huile pour hydraulique, fluide pour engrenages, huile à chaine, huile à vacuum',
      'Huile pour foreuses de roc, huile de procédé, huile de démoulage',
      'Huile de coupe, huile à glissière, huile de transfert de chaleur',
      'Huile pour compresseurs C10'
    ]
  },
  {
    title: 'Lubrifiants écologiques',
    bullets: [
      'Huile à chaine écologique, huile à forme écologique, huile hydraulique Écolopro',
      'Huile à vacuum, huile de démoulage Coflex Plus'
    ]
  },
  {
    title: 'Graisses',
    bullets: [
      'Graisse Lithopro, graisse Multirex, graisse HD-Pro, graisse pour roulement de roue',
      'Graisse BM-PRO'
    ]
  },
  {
    title: 'Liquides de refroidissement',
    bullets: [
      'Antigel universel, antigel diesel, antigel pour moteur à grande puissance Turbo plus',
      'Liquide de refroidissement longue durée pour moteur diesel',
      'Liquide de refroidissement à protection étendue Global',
      'Liquide de refroidissement industriel Calpro'
    ]
  },
  {
    title: 'Nettoyeurs de pièces',
    bullets: ['Antirouille pour automobile (ambre ou noir)']
  }
]
</script>
