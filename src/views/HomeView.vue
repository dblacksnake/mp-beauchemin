<template>
  <carousel-view :contents="items"></carousel-view>

  <v-container>
    <!-- Service Section --------------------------------------------------------------------------------->
    <text-section :serviceTitle="true" title="Services" :content="services">
      <template v-slot:btn>
        <v-btn @click="to('/gaz-propane')" class="text-none blogueBtn">
          <span class="text-white">Voir plus de services</span></v-btn
        >
      </template>
    </text-section>
    <!-- Artcicle section------------------------------------------------------------------------------->
    <text-section title="Articles" :content="articles">
      <template v-slot:btn>
        <v-btn @click="to('/articles')" class="text-none blogueBtn">
          <span class="text-white">Lire Plus d'articles</span></v-btn
        >
      </template>
    </text-section>
    <!-- Text Section --------------------------------------------------------------------------------->
    <text-section>
      <template #text1>
        <VCol lg="12" md="12" sm="12" cols="12" class="mb-8">
          <h2 primary-title>
            Un service personnalisé pour votre chauffage à l'huile et chauffage au mazout
          </h2>
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
    </text-section>
    <!-- Contact Section ------------------------------------------------------------------------------>
    <ContactSection></ContactSection>
    <!-- Button Section -------------------------------------------------------------------------------->
    <buttonSection></buttonSection>
  </v-container>
</template>

<script setup lang="ts">
// Components
// import TopPhotos from '@/components/TopPhotos.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import TextSection from '@/components/TextSection.vue'
import ButtonSection from '@/components/home/BottomSection.vue'
import CarouselView from '@/components/CarouselView.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const services = [
  {
    title: 'Livraison Propane',
    text: `Ne manquez plus jamais de propane!Notre entreprise située à Saint-Jean-sur-Richelieu offre un service sécuritaire de livraison de gaz propane à Montréal et sur la Rive-Sud, selon vos besoins.`,
    btn: 'Lire plus',
    href: '/gaz-propane/livraison',
    icon: 'mdi-calendar-clock',
    articleTitle: true
  },
  {
    title: 'location de réservoir de gaz propane',
    text: `Acheter un réservoir de gaz propane résidentiel représente généralement des responsabilités ainsi qu’une dépense importante. Bonne nouvelle : Mazout & Propane Beauchemin vous permet de bénéficier d’un réservoir de gaz propane de qualité supérieure… à un prix avantageux et sans souci!`,
    btn: 'Lire plus',
    href: '/gaz-propane/location',
    icon: 'mdi-truck-delivery',
    articleTitle: true
  },
  {
    title: 'Foyer au gaz',
    text: `Foyers au gaz propane de qualité supérieure
Les foyers au gaz propane sont des appareils qui ne cessent de gagner en popularité, et pour cause! Esthétiques, économiques et écologiques, ils trouvent une place de choix dans les demeures québécoises. Chez Mazout & Propane Beauchemin, nous vendons et installons des modèles convenant à tous les décors et à tous les budgets.`,
    btn: 'Lire plus',
    href: '/gaz-propane/foyer-gaz',
    icon: 'mdi-fireplace',
    articleTitle: true
  }
]

const articles = [
  {
    title: '5 utilisations insoupçonnées du propane',
    text: 'De façon courante, à la maison, on utilise souvent le propane pour alimenter les chauffe-eau de la piscine et du foyer, mais ce type de gaz a plusieurs autres fonctions, parfois insoupçonnées. Découvrez-en 5!',
    btn: 'Lire plus'
  },
  {
    title: "Guide d'achat d'un foyer extérieur pour la saison estivale",
    text: 'La nuit tombe sur une superbe journée d’été. Vous n’avez qu’une seule envie : rester dehors encore une heure ou deux pour profiter au maximum de cette saison trop courte. Vous prenez place sur un fauteuil confortable avec une couverture, puis vous vous offrez LA récompense suprême : un feu à la belle étoile! Ce scénario vous « parle »? Normal! Si vous songez à vous procurer un foyer extérieur pour savourer l’été en beauté, lisez ce petit guide rédigé par notre équipe d’experts chez Mazout & Propane Beauchemin.',
    btn: 'Lire plus'
  },
  {
    title: 'Des conseils pour choisir et entretenir votre foyer au propane',
    text: 'Le foyer au propane comporte plusieurs avantages : il est esthétique, facile d’utilisation, efficace, écologique et plus encore! Cependant, afin d’assurer la complète efficacité et sécurité de votre foyer au propane, il faut l’entretenir. Lisez ces trucs et conseils de Mazout et Propane Beauchemin pour vous aider à y voir plus clair!',
    btn: 'Lire plus'
  }
]

const items = computed(() => store.state.homeCarousel)
const to = (href: string) => router.push(href)

onMounted(() => {
  store.dispatch('GET_PagePhotos', { page: 'home', db: 'homeCarousel' })
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  max-width: 100%;
}

.v-card__title {
  display: block;
}

a {
  color: #50b848 !important;
  cursor: pointer;
}

span a:hover {
  text-decoration: underline;
}

h1 {
  color: #50b848;
}

.line {
  background: black;
  height: 1px;
  width: 90%;

  margin: auto;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
}
.v-btn {
  background-color: #2b4479;
  color: white !important;
}
</style>

function getDownloadURL(storageRef: any) { throw new Error('Function not implemented.') }
