<template>
    <v-container grid-list-xs>
      <h1>Chauffe-eau de piscine au propane : la solution pour prolonger votre été!</h1>
      <h2>10 avantages à posséder un barbecue au propane</h2>
      <VRow>
        <VCol lg="6" md="12" sm="12"  cols="12">
            <div class="text" style="margin-top:2rem;"
                v-for="info in infos" :key="info.title">
                <h3>{{info.title}}</h3>
                {{info.text}}
                <span>Poursuivez votre lecture pour en savoir plus.</span>
            </div>
        </VCol>
      </VRow>
    </v-container>
</template>

<script setup lang="ts">
const infos = [
      {
        title: '5 utilisations insoupçonnées du propane',
        text: 'De façon courante, à la maison, on utilise souvent le propane pour alimenter les chauffe-eau de la piscine et du foyer, mais ce type de gaz a plusieurs autres fonctions, parfois insoupçonnées. Découvrez-en 5!',
      },
      {
        title: 'Règlements sur les foyers aux bois et comment le propane peut résoudre votre problème de foyer!',
        text: 'Il y a plusieurs villes à travers la province qui changent leurs réglementations face aux appareils et foyers dits « à bois ». La Ville de Montréal quant à elle, adoptera le règlement sur les appareils et les foyers permettant l’utilisation d’un combustible solide dès le 1er octobre 2018.',
      },
      {
        title: '4 raisons d’utiliser le mazout pour votre chauffage',
        text: 'Peu importe quel type vous utilisez, il y a de multiples avantages à chauffer au mazout. Le mazout, parfois appelé huile de chauffage, se retrouve en deux catégories: le mazout numéro 1, ou l’huile à poêle, qui est utilisé, entre autres, pour des poêles à l’huile et des fournaises de plancher, est un carburant plus léger et raffiné qui dégage plus de BTU que le mazout numéro 2 et est souvent plus dispendieux que celui-ci. Le mazout numéro 2, ou huile à fournaise, est très populaire pour les systèmes de chauffage central à eau chaude et à air chaud.',
      },
      {
        title: 'Conseils pour l’achat d’un foyer au gaz',
        text: 'Vous voulez faire l’acquisition d’un foyer au gaz pour votre propriété? Chez Mazout & Propane Beauchemin, compagnie spécialisée en installation d’appareils de chauffage (foyers, poêles, chauffe-eau…) et en livraison de carburant (pétrole, diesel, huile à chauffage, gaz propane, mazout…) sur la Rive-Sud et à Montréal, nous pouvons vous guider dans votre démarche.',
      },
      {
        title: 'Guide d\'achat d\'un foyer extérieur pour la saison estivale',
        text: 'La nuit tombe sur une superbe journée d’été. Vous n’avez qu’une seule envie : rester dehors encore une heure ou deux pour profiter au maximum de cette saison trop courte. Vous prenez place sur un fauteuil confortable avec une couverture, puis vous vous offrez LA récompense suprême : un feu à la belle étoile! Ce scénario vous « parle »? Normal! Si vous songez à vous procurer un foyer extérieur pour savourer l’été en beauté, lisez ce petit guide rédigé par notre équipe d’experts chez Mazout & Propane Beauchemin.',
      },
      {
        title: 'Qu’est-ce que le système québécois de plafonnement et d’échange de droits d’émission (SPEDE)?',
        text: 'Mazout & Propane Beauchemin se donne la responsabilité de se garder au courant des normes et politiques régulant le milieu de la préservation de l’environnement. Nous vous proposons ce mois-ci un article de blogue traitant du système québécois de plafonnement et d’échange de droits d’émission (SPEDE).',
      },
      {
        title: 'Quel type de véhicule est apte pour la conversion au système de gaz propane?',
        text: 'Le propane est le carburant alternatif par excellence et propose à ses consommateurs de nombreux avantages économiques, écologiques ainsi qu’en performance automobile. Cette alternative est utilisée par un nombre grandissant de particuliers, mais également par de grandes entreprises ayant des flottes de véhicules de tout genre.',
      },
      {
        title: 'Des conseils pour choisir et entretenir votre foyer au propane',
        text: 'Le foyer au propane comporte plusieurs avantages : il est esthétique, facile d’utilisation, efficace, écologique et plus encore! Cependant, afin d’assurer la complète efficacité et sécurité de votre foyer au propane, il faut l’entretenir. Lisez ces trucs et conseils de Mazout et Propane Beauchemin pour vous aider à y voir plus clair!',
      },
    ];
</script>

<style lang="scss" scoped>
    h1, h2 ,h3 ,h4{
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }

    span{
        color: #50B848;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }
</style>
