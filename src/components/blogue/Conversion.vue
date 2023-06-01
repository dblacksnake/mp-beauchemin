<template>
  <back-title></back-title>
  <div class="text">
    <p>
      Le propane est le carburant alternatif par excellence et propose à ses consommateurs de
      nombreux avantages économiques, écologiques ainsi qu’en performance automobile. Cette
      alternative est utilisée par un nombre grandissant de particuliers, mais également par de
      grandes entreprises ayant des flottes de véhicules de tout genre.
    </p>
    <h3>Installation du réservoir au propane</h3>
    <p>
      Tout type de véhicule (automobile, camionnette, VUS ou véhicule cube) est apte à se doter d’un
      réservoir à propane. Celui-ci comporte un système de sécurité qui empêche l’écoulement du
      propane en cas d’une rupture de conduit ou d'accident. Il existe également un vaste réseau
      d'approvisionnement de gaz propane au Québec qui permet à tous les automobilistes de se
      réapprovisionner en tout temps.
    </p>
    <h3>Camionnettes</h3>
    <p>
      Camionnettes Il est possible d’installer un réservoir de plus ou moins 90 litres sous le
      véhicule ou un réservoir de 200 litres dans la boîte du camion.
    </p>
    <h3>Véhicules cubes</h3>
    <p>
      Plusieurs dimensions de réservoirs sont disponibles, soit de 100 litres à 195 litres (le
      réservoir étant fait en fonction de l'espace disponible sur le côté du véhicule). On peut
      également d'installer 2 réservoirs, un de chaque côté, afin d'avoir une plus grande autonomie.
    </p>
    <h3>Automobiles et VUS</h3>
    <p>
      L’installation du réservoir dans la valise de l’automobile est très sécuritaire : un conduit
      scelle les branchements de propane et la valve de sûreté, permettant ainsi au propane de
      s’échapper à l’extérieur du véhicule en cas de fuite ou de surpression.
    </p>
  </div>
</template>

<script setup lang="ts">
import BackTitle from './BackTitle.vue'
</script>

<style lang="scss" scoped>
h3 {
  color: #2b4479;
}
p {
  margin: 2rem auto;
  text-align: center;
}

.bold {
  font-weight: bold;
}
.text {
  padding-left: 10rem;
  padding-right: 10rem;
}

ul {
  display: inline-block;
  text-align: left;
  margin-bottom: 2rem;

  li {
    text-align: left;
  }
}
</style>
