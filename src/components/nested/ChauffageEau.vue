<template>
  <v-container grid-list-xs>
    <!-- <h1>Votre distributeur et fournisseur de gaz propane dans le Grand Montréal</h1> -->
    <VRow>
      <VCol></VCol>
      <VCol lg="6" md="12" sm="12"  cols="12">
        <paragraphes>
          <template v-slot:Title>Chauffe-eau résidentiels et commerciaux</template>
          <template v-slot:Paragraphes1>
            Il va sans dire, les besoins en eau chaude peuvent varier considérablement d’un foyer à l’autre. Par exemple, la consommation est très élevée dans les familles nombreuses ou dans les résidences dotées d’un spa. De même, si vous rénovez votre maison pour en faire une habitation bigénérationnelle, vous devez littéralement doubler la quantité d’eau chaude disponible!
          </template>
          <template v-slot:Paragraphes2>
            Vous êtes propriétaire d’une entreprise en pleine expansion? Alors, vous avez tout intérêt à faire l’acquisition de chauffe-eau performants, robustes et économiques. Que ce soit pour un modèle résidentiel, commercial ou instantané (sans réservoir), vous trouverez chez Mazout & Propane Beauchemin une vaste sélection de produits de qualité supérieure.
          </template>
          <template v-slot:smallTitle1>Nos marques de confiance</template>
          <template v-slot:text1>Chez Mazout & Propane Beauchemin, nous effectuons la vente et l'installation de chauffe-eau au gaz propane de différentes marques réputées pour leur durabilité et leur rendement énergétique.</template>

        </paragraphes>
        <ul>
          <h4 class="listTitle mb-4">Pour usage résidentiel</h4>
          <li><a href="https://www.gsw-wh.com/fr" target="_blank">GSW</a></li>
          <li>Bosch</li>
          <li><a href="https://giantinc.com/francais/produits/residentiel/gaz.htm" target="_blank">Giant</a></li>
          <li>Noritz</li>
          <li>Rheem (série Marathon et
            <a href="https://www.rheem.com/products/residential/water-heating/tank/residential_gas" target="_blank">série Professional</a> )</li>
          <li><a href="https://www.bradfordwhite.com/" target="blank">Bradford White</a></li>
        </ul>
        <ul class="mt-10">
          <h4 class="listTitle mb-4">Pour usage commercial</h4>
          <li><a href="https://www.gsw-wh.com/fr" target="_blank">GSW</a></li>
          <li><a href="https://giantinc.com/francais/produits/residentiel/gaz.htm" target="_blank">Giant</a></li>
          <li>A.O. Smith</li>
          <li>Rinnai</li>
        </ul>

        <list class="mt-10" v-for="list in lists" :key="list.title" :list="list"></list>

        <div class="mt-10">
          Prenez note que les travaux de raccordement de l’eau à votre nouveau réservoir d’eau chaude doivent obligatoirement être exécutés par un professionnel membre de la Corporation des maîtres mécaniciens en tuyauterie du Québec <a href="https://www.cmmtq.org/" target="_blank" >(CMMTQ).</a>
        </div>
        <paragraphes>
          <template v-slot:smallTitle2>Notre service de réparation</template>
          <template v-slot:text2>Votre chauffe-eau au gaz est défectueux? Chez Mazout & Propane Beauchemin, nous effectuons la réparation de toutes les marques. De plus, nous sommes disponibles pour les urgences 24 heures sur 24, 7 jours sur 7. Composez simplement le 514 990-1901 et nous nous déplacerons dans les plus brefs délais</template>
          <template v-slot:smallTitle3>Notre service de livraison</template>
          <template v-slot:text3>Pour alimenter votre chauffe-eau, faites confiance à notre service de livraison de gaz propane rapide et sécuritaire offert dans plusieurs régions du Québec (Saint-Jean-sur-Richelieu, Montréal, Rive-Nord, Rive-Sud, Estrie, Sherbrooke, etc.). <a href="/contact">Cliquez ici</a> pour voir la liste complète des zones que nous couvrons.</template>
        </paragraphes>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Paragraphes from '../ParagraphesComponent.vue';
import List from '../ListComponent.vue';

    const lists = [
      {
        title: 'Nos chauffe-eau au gaz propane utilisent les plus récentes technologies et sont offerts en différents formats. Nous installons entre autres des modèles :',
        bullets: [
          'À tirage naturel (un système qui réduit les risques d’incendie).',
          'À évacuation forcée (une soufflerie permet l’évacuation à l’horizontale ou à la verticale).',
          'À évacuation directe et forcée (l’air est tiré à l’extérieur du bâtiment).',
          'À évacuation directe (l’air provient d’une prise externe).',
        ],
      },
      {
        title: 'Pour déterminer quelle catégorie de chauffe-eau au gaz convient le mieux à votre situation, demandez conseil à l’un de nos spécialistes. Les avantages de nos appareils sont nombreux :',
        bullets: [
          'Résistance aux substances inflammables (essence, peinture, aérosols, solvants, diluants à peinture, etc.).',
          'Gestion automatique de la température.',
          'Haut rendement écoénergétique (homologation ENERGY STAR).',
          'Entretien minimal.',
          'Isolation supérieure.',
          'Fonctionnement silencieux.',
        ],
      },
    ];


</script>

<style lang="scss" scoped>

a{
    color: #50B848 !important;
}
ul{
  margin-left: 2rem;

  .listTitle{
    text-align: left;
  }
  li{
      text-align:left !important;

  }
  li::after{
      color: rgba(0, 0, 0,0.65)
  }
}
</style>
