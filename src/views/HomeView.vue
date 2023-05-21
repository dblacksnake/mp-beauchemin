<template>
  <v-container>
    <top-photos :photos="items"></top-photos>
    <!-- Text Section --------------------------------------------------------------------------------->

    <!-- Blogue section------------------------------------------------------------------------------->
    <text-section title="Blogue" :content="blogues">
      <template v-slot:btn>
        <v-btn color="primary" class="text-none blogueBtn">
          <span class="text-white">Lire Plus de blogue</span></v-btn
        >
      </template>
    </text-section>
    <!-- Contact Section ------------------------------------------------------------------------------>
    <ContactSection></ContactSection>
    <!-- Button Section -------------------------------------------------------------------------------->
    <VRow justify="center" class="btnSection mt-10 mb-16">
      <VCol
        cols="10"
        sm="10"
        lg="3"
        md="3"
        class="btnSlot ml-4 mr-4 mt-10"
        justify="center"
        v-for="btn in btnSlot"
        :key="btn.title"
      >
        <router-link :to="btn.href" class="pa-4">
          <h3>{{ btn.title }}</h3>
          <div class="content">
            {{ btn.content }}
          </div>
          <div class="btnInfo">{{ btn.info }}</div>
        </router-link>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
// Components
// import TopPhotos from '@/components/TopPhotos.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import TextSection from '@/components/TextSection.vue'

const blogues = [
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

const btnSlot = [
  {
    title: "Problème d'approvisionnement?",
    content: 'Beauchemin vous vient en aide rapidement',
    info: "Service d'urgence 24 h",
    href: '/contact'
  },
  {
    title: 'Fournisseur de gaz propane',
    content: 'Nous installons des bonbonnes de prone en Montérégie',
    info: "Plus d'infos",
    href: '/gaz-propane'
  },
  {
    title: 'Mazout #1 ou Mazout #2?',
    content: "Faites un choix éclairé pour votre chauffage à l'huile",
    info: "Plus d'infos",
    href: '/mazout'
  }
]

const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
  }
]
</script>

<style lang="scss" scoped>
// *{blogueBtn
//   color: black;
// }

v-btn {
  color: white !important;
}
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
.btnSection {
  cursor: pointer;

  .btnSlot {
    background-color: #134b8e;
    color: white;

    height: auto;
    // width: 50%;

    border-radius: 15px;

    .btnInfo {
      color: white;
      margin-top: 0.5rem;
    }

    a {
      text-decoration: none;
    }

    h3 {
      color: white;
    }

    div {
      color: #50b848;
    }
  }
}
</style>
