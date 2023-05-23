<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
    <v-container grid-list-xs>
      <VRow>
        <VCol lg="6" md="12" sm="12"  cols="12">
          <paragraphes>
            <template v-slot:Title>Foyers au gaz propane de qualité supérieure</template>
            <template v-slot:Paragraphes1>
              Les foyers au gaz propane sont des appareils qui ne cessent de gagner en
              popularité, et pour cause! Esthétiques, économiques et écologiques,
              ils trouvent une place de choix dans les demeures québécoises.
              Chez Mazout & Propane Beauchemin, nous vendons et installons des modèles
              convenant à tous les décors et à tous les budgets.
            </template>
            <template v-slot:Paragraphes2>
              Ces foyers modernes s’intègrent harmonieusement à votre environnement.
              En effet, les possibilités d’emplacements sont pratiquement illimitées.
              Par exemple, on peut installer ces sources de chaleur dans le salon,
              le sous-sol, la chambre à coucher, la salle de bain ainsi que sur la
              terrasse ou dans la cour arrière. Vous rêvez d’avoir une table chauffante
              avec comptoir au granite? C’est chose possible avec Mazout & Propane Beauchemin.
              Soucieux de vous offrir ce qui se fait de meilleur, nous avons sélectionné
              des appareils provenant de 3 compagnies créatives,
              innovatrices et dignes de confiance.
            </template>
          </paragraphes>
          <div class="rightSection">
            <div class="mt-10 textRight">
              <h4>Kingsman</h4>
              Cette entreprise possède plus de 30 ans d’expérience dans le domaine des foyers.
              Ainsi, les produits <a href="https://kingsmanind.com/" target="blank">Kingsman</a> conjuguent à la fois élégance,
              efficacité et respect
              de l’environnement. Plusieurs options décoratives sont proposées sur leurs différents
              modèles, pour un style qui s’harmonise à la perfection à votre décor.
            </div>
            <div class="mt-10 textRight">
              <h4>Continental</h4>
              D’un simple effleurement du bout des doigts, vous pouvez gérer la température de votre
              magnifique foyer <a href="https://www.continentalcomfort.com/en/home/" target="blank">Continental.</a>
              Qu’il soit d’allure classique ou contemporaine, il ajoutera assurément du
              caractère à votre propriété. Optez sans hésiter pour la performance d’un appareil
              fiable, conçu pour vous rendre service durant plusieurs années.
            </div>
            <div class="mt-10 textRight">
              <h4>Valor</h4>
              L’avantage de la chaleur radiante de <a href="https://www.valorfireplaces.com/" target="blank">Valor.</a> conjuguent à la fois élégance,
              efficacité et respect
              de l’environnement. Plusieurs options décoratives sont proposées sur leurs différents
              modèles, pour un style qui s’harmonise à la perfection à votre décor.
            </div>
          </div>
          <paragraphes>
            <template v-slot:smallTitle1>Notre salle d'exposition</template>
            <template v-slot:text1>
              Pour découvrir nos superbes foyers au gaz propane, venez visiter notre salle d'exposition chez notre partenaire
              <a href="https://www.boutiquechaleur.com/home" target="blank">Boutique Chaleur </a>au 620, boulevard Roland-Therrien à Longueuil. Sur place, l'un de nos experts discutera avec vous afin de vous conseiller le modèle qui répondra le mieux à vos besoins et à vos préférences!
            </template>
            <template v-slot:smallTitle2>Notre service de livraison</template>
            <template v-slot:text2>
              Pour approvisionner votre foyer au gaz propane, faites confiance à nos livreurs d’expérience. Avec Mazout & Propane Beauchemin, vous bénéficiez d’un service impeccable en tout temps! Consultez la liste des territoires que nous desservons en
              <a href="/contact">cliquant ici</a>.
            </template>
            <template v-slot:smallTitle3>Notre service de réparation</template>
            <template v-slot:text3>
              Si votre foyer au gaz propane nécessite une réparation, faites appel à notre expertise : nous nous déplaçons à Montréal, sur la Rive-Sud, sur la Rive-Nord, en Estrie, en Montérégie et plus encore.
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
  name: 'FoyerGaz',
  components: {
    Paragraphes,
  },
  setup() {
    return {

    };
  },
});
</script>
<!-- eslint-disable linebreak-style -->

<style lang="scss" scoped>
a{
  color: #50B848 !important;
}

.rightSection{
  padding-left: 50%;

  .textRight{
  text-align: left;
}
}

</style>
