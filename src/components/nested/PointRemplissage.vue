<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol lg="12" md="12" sm="12" cols="12">
        <paragraphes>
          <template v-slot:Title>Remplissage de réservoirs de propane sur la Rive-Sud</template>
          <template v-slot:text1
            >Pour savoir où effectuer le remplissage de vos réservoirs de propane sur la Rive-Sud,
            Mazout & Propane Beauchemin vous invite à consulter la liste ci-dessous consistant au
            réseau de points de remplissage pour les réservoirs de 20 livres.</template
          >
        </paragraphes>
        <div class="addresses">
          <div class="address mb-6" v-for="a in addresses" :key="a.title">
            <h4 class="mb-2">{{ a.title }}</h4>
            {{ a.street }} <br />
            {{ a.city }} <br />
            {{ a.postalCode }} <br />
            T. {{ a.phone }} <br />
            <h4 class="horraireTitle mt-4">Horraire de Remplissage</h4>
            {{ a.week }} <br />
            {{ a.weekend }} <br />
          </div>
        </div>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Paragraphes from '../ParagraphesComponent.vue'

const addresses = [
  {
    title: 'Mazout et Propane Beauchemin — Saint-Jean-sur-Richelieu',
    street: '775, rue Gaudette',
    city: 'Saint-Jean-sur-Richelieu, QC',
    postalCode: 'J3B 7S7',
    phone: '514-990-1901',
    week: 'Lundi au vendredi : 7 h à 17 h',
    weekend: ''
  },
  {
    title: 'Shell – Saint-Jean-sur-Richelieu',
    street: '1069, boulevard du Séminaire Nord',
    city: 'Saint-Jean-sur-Richelieu, QC',
    postalCode: 'J3A 1R2',
    phone: '450-349-4571',
    week: 'Lundi au vendredi : 6 h à 23 h',
    weekend: 'Samedi et dimanche : 7 h à 23 h'
  },
  {
    title: 'RONA — Ferronnerie Houle — Iberville',
    street: '85, rue Conrad Gosselin',
    city: 'Iberville, QC',
    postalCode: 'J2X 0A1',
    phone: '450-346-5424',
    week: 'Lundi au vendredi : 8 h à 21 h',
    weekend: `Samedi : 8 h à 17 h
                  Dimanche : 9 h à 17 h`
  },
  {
    title: 'Station de service DOMAX — Iberville',
    street: '476, boulevard d’Iberville',
    city: 'Iberville, QC',
    postalCode: 'J2X 3Y7',
    phone: '450-347-3767',
    week: 'Lundi au samedi : 6 h à 23 h',
    weekend: 'Dimanche : 7 h à 23 h'
  },
  {
    title: 'Gaz Royal – Crevier Propane – Longueuil',
    street: '3000, chemin de Chambly',
    city: 'Longueuil, QC',
    postalCode: 'J4L 1N4',
    phone: '450-674-9892',
    week: 'Lundi au dimanche : 9 h à 20 h ',
    weekend: ''
  },
  {
    title: 'Gaz Royal – Crevier Propane – Saint-Hubert',
    street: '5335, chemin de Chambly',
    city: 'Saint-Hubert, QC',
    postalCode: 'J3Y 3N9',
    phone: '450-462-0725',
    week: 'Lundi au dimanche : 6 h à 22 h',
    weekend: ''
  },
  {
    title: 'Dépanneur 7 Étoiles – Éconogaz – Longueuil',
    street: '731, chemin Sainte-Foy',
    city: 'Longueuil J4J 1Z2',
    postalCode: 'J4J 1Z2',
    phone: '450-674-8880',
    week: 'Lundi au vendredi : 6 h à 21 h',
    weekend: `Samedi : 8 h à 20 h
                  Dimanche : 9 h à 20 h`
  },
  {
    title: 'Camping La Clé des Champs Complexe VR',
    street: '415, montée St-Claude',
    city: 'St-Philippe, QC',
    postalCode: 'J0L 2K0',
    hone: '450-659-3389',
    week: 'D’avril à fin octobre seulement, voir au camping',
    weekend: ''
  },
  {
    title: 'RONA l’Entrepôt — Beloeil',
    street: '500, rue Serge Gosselin',
    city: 'Beloeil, QC',
    postalCode: 'J3G 0G3',
    phone: '450-464-3663',
    week: 'Lundi au vendredi : 8 h à 21 h',
    weekend: 'Samedi et dimanche : 8 h à 17 h'
  },
  {
    title: 'Garage Rejean Guy – Beloeil',
    street: '235, boulevard Yvon L’Heureux Nord',
    city: 'Beloeil, QC',
    postalCode: 'J3G 5R8',
    phone: '450-467-5280',
    week: 'Lundi au vendredi : 8 h à 18 h',
    weekend: 'Samedi et dimanche : 10 h à 18 h'
  },
  {
    title: 'Gaz Propane Maska – Saint-Hyacinthe',
    street: '3010, boulevard Laurier Est',
    city: 'Saint-Hyacinthe, QC',
    postalCode: 'J2R 1P8',
    phone: '450-774-4534',
    week: `Lundi au mercredi : 8 h à 18 h
              Jeudi et vendredi : 8 h à 19 h 30`,
    weekend: `Samedi : 8 h à 17 h
                  Dimanche : 9 h à 17 h`
  }
]
</script>
<!-- eslint-disable linebreak-style -->

<style lang="scss" scoped>
.horraireTitle {
  text-decoration: underline !important;
}
</style>
