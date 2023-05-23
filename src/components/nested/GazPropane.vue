<!-- eslint-disable linebreak-style -->
<template>
    <v-container grid-list-xs>
      <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
      <VRow>
        <VCol lg="6" md="12" sm="12"  cols="12">
            <paragraphes :Times="3" :items-list="lists">
                <template v-slot:Title>
                    Votre distributeur et fournisseur de gaz propane dans le Grand Montréal
                </template>
                <template
                    v-slot:Paragraphes1>
                    {{firstSection[0]}}
                </template>
                <template
                    v-slot:Paragraphes2>
                    {{firstSection[1]}}
                </template>
                <template
                    v-slot:ParagraphesLeft>
                    Chez Mazout & Propane Beauchemin, nous fournissons plusieurs services <br>
                    relatifs au gaz propane :
                </template>
            </paragraphes>
            <h4 class="mt-10">
                Comment faire la lecture de la jauge de pression
                    de votre réservoir de gaz propane</h4>
            <paragraphes>
                <template v-slot:smallTitle1>
                    Installation de bonbonnes
                </template>
                <template v-slot:text1>
                    Pour la location et l’installation d’un réservoir de gaz propane dans
                    différentes régions du Québec (dont la Rive-Sud), choisissez
                    Mazout & Propane Beauchemin. Nos techniciens fixent des réservoirs de propane
                    d’une capacité allant de 100 lb à 1000 gallons. Toutes nos bonbonnes sont
                    fabriquées selon des standards et des normes rigoureuses (DOT-ASME).
                    Avec un aussi large éventail de possibilités, nous sommes absolument certains
                    de pouvoir répondre à tous vos besoins!
                </template>
                <template v-slot:text2>
                    Dans le domaine commercial et agricole, nous vous offrons les réservoirs de
                    marque Pro-Par. Pour le secteur résidentiel, nous privilégions les produits
                    de marque Manchester.
                </template>
                <template v-slot:smallTitle3>
                    Nos services
                </template>
                <template v-slot:text3>
                    Sur la Rive-Sud et dans le Grand Montréal, faites appel à notre expertise pour
                    l’installation d’appareils au gaz propane (foyers, poêles, chauffe-eau) et pour
                    la livraison de carburants (propane, diesel, pétrole, mazout et huile à
                    chauffage).Vous avez des questions? Communiquez avec notre service à la
                    clientèle afin de discuter avec l’un de nos représentants
                </template>
            </paragraphes>
        </VCol>
      </VRow>
    </v-container>
</template>
<!-- eslint-disable linebreak-style -->

<script lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';


export default defineComponent({
  name: 'GazPropane',
  components: {
    Paragraphes,
  },
  setup() {
    const lists = [
      'Location de réservoirs (bouteilles)',
      'Livraison (résidentiel, commercial, agricole et industriel)',
      'Livraison automatique ou sur appel',
      'Service d’urgence',
      'Vente/Installation/Livraison/Service',
    ];

    const firstSection = [
      `Le propane est une forme d’énergie qui présente plusieurs qualités. 
        En voici une brève description, tirée du site Web de l’Association canadienne du propane :`,
      `« Le propane est une énergie propre, non toxique et polyvalente. 
        En plus d’être facilement transportable, il a de multiples applications. 
        Au Canada, l’approvisionnement est abondant et grâce à son infrastructure étendue, 
        il est facile à obtenir et son prix est concurrentiel. 
        Le propane est produit à partir des opérations de raffinage du pétrole brut ou par procédé 
        d’extraction du gaz naturel et des gaz associés dans les gisements de pétrole. »`,
      '',
    ];
    return {
      lists,
      firstSection,
    };
  },
});
</script>
<!-- eslint-disable linebreak-style -->

<style lang="scss" scoped>

</style>
