<template>
  <back-title></back-title>
  <text-section :content="paragraphes"></text-section>
</template>

<script setup lang="ts">
import BackTitle from './BackTitle.vue'
import TextSection from '../TextSection.vue'

const paragraphes = [
  {
    title: '1. Le mazout est économique :',
    text: `Parce que les appareils qui fonctionnent au mazout ont une meilleurs production de chaleur que tous les autres systèmes, ils utilisent moins de carburant et malgré des fluctuations le prix moyen pour chauffer une résidence ou un espace commercial à l’aide du mazout est historiquement beaucoup plus bas que le coût des autres produits énergétiques. Le mazout peut chauffer l’eau deux fois plus rapidement qu’un système au gaz naturel et cinq fois plus rapidement que l’électricité. Pourquoi? Parce que le mazout produit la flamme la plus chaude de toutes les sources d’énergie. Avec une bouilloire au mazout à combinaison d’eau et d’air chaud, l’eau chaude vous coûtera pratiquement rien à l’automne, en hiver et au printemps lorsque fonctionne votre chaudière de chauffage. On prévoit même que dans l'avenir le prix du mazout devrait augmenter plus lentement que celui de l’électricité et même du gaz naturel. Si on tient compte de l’inflation, le prix du mazout a très peu changé depuis les 60 dernières années. Parce que le mazout brûle plus proprement qu’il y a 60 ans et que la durée de vie des fournaises s'est améliorée, on constate donc une économie encore plus grande.`
  },
  {
    title: '2. Le mazout est un carburant propre :',
    text: `On reconnaît que le système de chauffage au mazout ne dégage aucune odeur et l’industrie continue de réduire la teneur de soufre du mazout, ayant pour résultat une diminution des émissions polluantes. En effet, le chauffage au mazout est beaucoup plus propre qu’il y a 30 ans. Grâce aux équipements à haut rendement, on atteint un taux d’efficacité de 85% et cette meilleure efficacité se traduit par une réduction considérable des émissions de particules. Le tout pour un environnement plus propre.`
  },
  {
    title: '3. Le mazout est un carburant totalement autonome et fiable :',
    text: `Les réservoirs de mazout sont maintenant composés de fibre de verre, de polyéthylène et d'acier résistant à la corrosion les rendant plus fiables et durables. Ils sont polyvalents grâce à leurs designs qui vous permettent d'économiser de l'espace tout en facilitant leur installation à l'intérieur tout comme à l’extérieur. Les nouveaux brûleurs sont beaucoup plus performants qu’autrefois par conséquent, plus économiques. C’est sans compter que certains des nouveaux systèmes ne requièrent plus la présence d’une cheminée pour fonctionner, ce qui représente des frais d’installation à bien meilleurs coûts. De plus, les poêles au mazout fonctionnant par gravité ne sont donc jamais affectés par des pannes de courant électrique. Pour les fournaises ou les chaudières centrales, une génératrice de basse puissance peut facilement les alimenter en cas de panne de courant électrique.`
  },
  {
    title: '4. Le mazout est un carburant sécuritaire :',
    text: `Il est vrai que le mazout est non explosif. Exposé à une allumette, le mazout ne s’enflammera pas.
Parce que le mazout brûle à haute température, il produit la chaleur la plus confortable qui soit. Cela vous permet d'obtenir rapidement le degré de chaleur désiré. Il offre donc un confort supérieur à celui du gaz naturel, de l'électricité et de toute autre source de chauffage résidentiel.
Il est facile d’améliorer l’efficacité de votre fournaise, et ce, à peu de frais. Il suffit d’entretiens adéquats et quelques améliorations pour vous garantir la satisfaction de tous vos besoins en chauffage résidentiel ou commercial à moindres coûts. Appelez nos experts pour qu’ils puissent vous aider dès aujourd’hui.`
  }
]
</script>
