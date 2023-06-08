<template>
  <carousel-view :contents="contents"></carousel-view>
  <vContainer>
    <text-section
      title=" Mazout & Propane Beauchemin, le meilleur choix de la livraison de mazout et des systèmes au
      propane"
    >
      <template v-slot:text1>
        <VCol lg="6" md="12" sm="12" cols="12">
          <h4 primary-title color="black">
            Un service personnalisé pour votre chauffage à l'huile et chauffage au mazout
          </h4>
          <div class="mt-4 pr-16 pl-16">
            Notre solide réputation de services est une de nos forces. Que ce soient nos délais de
            livraison de propane ou de mazout, notre service d'urgence ou l'installation de votre
            système de propane, nous sommes toujours au rendez-vous.
          </div>
          <div class="mt-4">
            <span><a>Appelez-nous</a></span> pour du gaz
            <span style="color: black"> propane, livraison </span>
            automatique ou sur appel rapide et efficace!
          </div>
        </VCol>
      </template>
      <template v-slot:text2>
        <VCol>
          <h4>Une hirstoire de famille</h4>
          <div class="mt-4 pr-16 pl-16">
            Notre équipe s'appuie sur un grand bagage d'expérience de 60 ans. Nous sommes fiers
            d'être la
            <span><a>3e génération</a></span>
            à prendre les commandes de l'entreprise. Nous sommes heureux de pouvoirvous offrir des
            services inégalés et un dévouement à vous satisfaire constamment.
          </div>
          <div class="mt-4">
            Nous prenons à cœur vos projets et nous nous assurons que vos attentes soient dépassées.
          </div>
        </VCol>
        <div class="line"></div>
      </template>
    </text-section>
    <text-section>
      <template #text1>
        <VRow>
          <VCol cols="12">
            <h1>L’historique de Mazout & Propane Beauchemin à Saint-Jean-sur-Richelieu</h1>
          </VCol>
          <VCol cols="12" style="color: #134b8e; font-weight: bold">
            La réputation que nous possédons nous pousse à vous offrir un service inégalé. Notre
            évolution, grâce aux transformations, nous permet de toujours dépasser nos limites et
            vos attentes.
          </VCol>
          <VCol cols="12" style="color: #134b8e"> Voici donc un aperçu de notre histoire. </VCol>
        </VRow>
      </template>
    </text-section>
    <!-- Timeline -------------------------------------------------------------------->
    <VRow>
      <VCol cols="12">
        <h1 style="color: #134b8e">Notre Histoire</h1>
      </VCol>
      <VCol class="timeline pa-4">
        <v-timeline>
          <v-timeline-item v-for="(year, i) in history" :key="i" dot-color="#039c91" small>
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold `" v-text="year.year"></span>
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
    <!-- Video -------------------------------------------------------------------->
    <VRow>
      <video controls>
        <source src="../assets/mazout.mp4" type="video/mp4" />
      </video>
    </VRow>
  </vContainer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TextSection from '@/components/TextSection.vue'
import CarouselView from '@/components/CarouselView.vue'
import { useStore } from 'vuex'

const store = useStore()
const contents = computed(() => store.state.aboutCarousel)
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

onMounted(() => {
  store.dispatch('GET_PagePhotos', { page: 'about', db: 'aboutCarousel' })
})
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 500px) {
  video {
    margin: 0 auto;
    align-self: center;
    width: 100%;
    height: 100%;
  }
}
video {
  margin: 0 auto;
  align-self: center;
  width: 80%;
  height: 80%;
}
.headline {
  color: #2b4479;
}
.cardText {
  &:hover {
    box-shadow: 0px 30px 10px -10px #039c91, 0px 20px 20px 0px #039c91, 0px 10px 50px 0px #039c91 !important;
  }
}
</style>
