<template>
  <vContainer>
    <VRow>
      <VCol cols="12">
        <h1>L’historique de Mazout & Propane Beauchemin à Saint-Jean-sur-Richelieu</h1>
      </VCol>
      <VCol cols="12" style="color: #134b8e; font-weight: bold">
        La réputation que nous possédons nous pousse à vous offrir un service inégalé. Notre
        évolution, grâce aux transformations, nous permet de toujours dépasser nos limites et vos
        attentes.
      </VCol>
      <VCol cols="12" style="color: #134b8e"> Voici donc un aperçu de notre histoire. </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <h1 style="color: #134b8e">Notre Histoire</h1>
      </VCol>
      <VCol class="timeline pa-16">
        <v-timeline>
          <v-timeline-item v-for="(year, i) in history" :key="i" color="secondary" small>
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold black--text`" v-text="year.year"></span>
            </template>
            <v-card class="cardText elevation-2">
              <v-card-text>
                {{ year.text }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </VCol>
    </VRow>
    <VRow>
      <video controls>
        <source src="../assets/mazout.mp4" type="video/mp4" />
      </video>
    </VRow>
  </vContainer>
</template>

<script setup lang="ts">
const history = [
  {
    year: '1953',
    text: "M. Ubald Beauchemin prenait possession d'une compagnie pétrolière qui était établie sous le nom de H. Montbourquette Enr. depuis 1935 et ce jusqu'en 1976."
  },
  {
    year: '1976-1981',
    text: "M. Mario Beauchemin prenait possession de l'entreprise familiale qui est devenue Ubald Beauchemin et Fils Enr."
  },
  {
    year: '1979',
    text: 'M. Mario Beauchemin achetait la compagnie Z.O. Thuot enr.'
  },
  {
    year: '1981',
    text: "M. Mario Beauchemin fusionnait les deux compagnies pour n'en faire qu'une au nom de Les Huiles Thuot et Beauchemin Inc."
  },
  {
    year: '1985',
    text: "Dû à l'expansion du mazout, M. Mario Beauchemin faisait l'acquisition de la compagnie Alexandre Marcil Enr."
  },
  {
    year: '1998',
    text: "Dominic, fils de M. Mario Beauchemin s'intègre à la compagnie familiale."
  },
  {
    year: '2000',
    text: 'Départ de la division propane au sein des services offerts.'
  },
  {
    year: '2001',
    text: 'Changement de dénomination sociale pour Mazout et Propane Beauchemin'
  },
  {
    year: '2003',
    text: "Acquisition de l'entreprise Les Mazouts S. Rainville à Farnham"
  },
  {
    year: '2008',
    text: 'Acquisition de la division huiles à chauffage de Pétroles Lucar (19 décembre)'
  },
  {
    year: '2010',
    text: 'Acquisition de Jean-Guy Darsigny (1960) à Marieville (5 janvier)'
  },
  {
    year: '2014',
    text: 'Acquisition de Pétroles Daniel Longtin à Laprairie'
  },
  {
    year: '2014',
    text: 'Acquisition de Leclerc et Fils (1953) (1er septembre)'
  },
  {
    year: '2016',
    text: 'Acquisition de Boutique Chaleur à Longueuil'
  }
]
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

video {
  margin: 0 auto;
  align-self: center;
  width: 80%;
  height: 80%;
}

.cardText {
  &:hover {
    box-shadow: 0px 30px 10px -10px rgb(0 0 0 / 60%), 0px 20px 20px 0px rgb(0 0 0 / 34%),
      0px 10px 50px 0px rgb(0 0 0 / 32%) !important;
  }
}
</style>
