<template>
  <carousel-view :contents="contents"></carousel-view>

  <v-container grid-list-xs>
    <h1>Tout pour le chauffage au mazout en Montérégie et à Montréal</h1>
    <VRow>
      <VCol lg="12" md="12" sm="12" cols="12">
        <v-card elevation="0">
          <v-card-title primary-title> Les avantages du mazout </v-card-title>
          <v-card-text>
            Les appareils de chauffage au mazout (couramment appelé « huile à chauffage » ou « huile
            à fournaise ») ont grandement évolué depuis les 30 dernières années. Aujourd’hui, ces
            systèmes:
            <ul style="">
              <li>
                utilisent des appareils performants permettant de réaliser des économies
                substantielles par rapport aux autres types de carburants
              </li>
              <li>fonctionnent de manière autonome, même lors d’une panne d’électricité</li>
              <li>
                brûlent l’huile proprement, grâce à des innovations réduisant considérablement
                l’émission de particules polluantes
              </li>
              <li>filtrent l’air chaud, purifiant ainsi l’air respiré par les occupants</li>
              <li>
                font l’objet d’améliorations constantes visant à optimiser leur efficacité tout en
                réduisant les frais d’installation et d’entretien
              </li>
            </ul>
          </v-card-text>

          <v-card-title primary-title style="color: rgb(19, 75, 142)"> Mazout #1 </v-card-title>
          <VCardText>
            Communément appelé « huile à poêle », le mazout #1 est un combustible que l’on utilise
            principalement pour les appareils de chauffage d’appoint tels que les petits poêles à
            l’huile et les fournaises de plancher, mais aussi pour les systèmes de chauffage à air
            chaud pulsé et à l’eau chaude. De manière générale, le mazout #1 convient à tous les
            appareils autonomes fonctionnant par gravité et possédant un faible débit d’huile.
          </VCardText>
          <VCardText
            >Hautement résistant au froid, le mazout #1 possède un point d’épaississement au gel à
            -40° Celsius. Par conséquent, ce produit peut être entreposé dans un réservoir à
            l’extérieur ou dans un endroit non chauffé. Comme il est davantage raffiné que le mazout
            #2, le mazout #1 dégage une plus grande quantité de chaleur et nécessite également un
            investissement plus élevé.</VCardText
          >

          <v-card-title primary-title style="color: rgb(19, 75, 142)"> Mazout #2 </v-card-title>
          <VCardText>
            Communément appelé « huile à fournaise », le mazout #2 est le combustible le plus
            fréquemment utilisé. En effet, sa composition convient à divers types d’appareils
            courants, notamment les systèmes de chauffage central à l’eau chaude ou à l’air chaud
            pulsé.
          </VCardText>
          <VCardText>
            Contrairement aux réservoirs de mazout #1, les réservoirs de mazout #2 doivent être
            placés dans des endroits tempérés. En effet, le point d’épaississement au gel du mazout
            #2 se situe à -8° Celsius. Ainsi, le sous-sol constitue habituellement l’endroit de
            prédilection pour entreposer ce type de combustible.
          </VCardText>

          <v-card-title primary-title> Livraison de mazout et vidange de réservoirs </v-card-title>
          <VCardText>
            Chez Mazout & Propane Beauchemin, nous effectuons la livraison et le remplissage de
            réservoirs de mazout #1 et #2. De plus, nous offrons le service de vidange de
            réservoirs. Pour en savoir plus, n’hésitez pas à
            <span>communiquer avec notre équipe</span>. En cas d’urgence, vous pouvez nous joindre
            en tout temps au <span>514 990-1901</span>.
          </VCardText>
        </v-card>
      </VCol>
    </VRow>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import CarouselView from '../components/CarouselView.vue'

const store = useStore()
const contents = computed(() => store.state.mazoutPhotos)
const showImg = ref(false)
onMounted(() => {
  console.log('enter')

  store.dispatch('GET_PagePhotos', { page: 'mazout', db: 'mazoutPhotos' })
})
</script>
<style lang="scss" scoped>
ul {
  margin-left: 2rem;

  li {
    text-align: left !important;
    /* color: white; */
  }
}

span {
  cursor: pointer;
  color: #50b848;

  &:hover {
    text-decoration: underline;
  }
}

img {
  margin-top: 2rem;
  height: 480px;
  width: 100%;
}

.v-card__text {
  color: black !important;
}
</style>
