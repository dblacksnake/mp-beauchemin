<template>
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
</template>

<script setup lang="ts">

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
</script>

<style lang="scss" scoped>
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