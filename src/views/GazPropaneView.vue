<template>
    <v-container grid-list-xs>
        <VRow class="topMenu mt-4">
          <VCol class="menu" v-for="menu in topMenu" :key="menu.name">
              <VRow>
                <router-link :to="menu.href">
                    <VRow>
                      <VCol cols="12">
                          <VIcon>{{menu.icon}}</VIcon>
                      </VCol>
                      <VCol>
                        <div class="topTitle">
                          {{menu.name}}
                        </div>
                      </VCol>
                    </VRow>
                  </router-link>
                </VRow>
            </VCol>
        </VRow>
        <router-view class="mt-10"></router-view>
    </v-container>
  </template>

  <script setup lang="ts">
const topMenu = [
      {
        href: '/gaz-propane/foyer-gaz',
        name: 'Foyer au gaz',
        icon: 'mdi-fireplace',
      },
      {
        href: '/gaz-propane/chauffe-eau',
        name: 'Chauffe-eau au gaz',
        icon: 'mdi-water-boiler',
      },
      {
        href: '/gaz-propane/mixte#poele',
        name: 'Poêles au gaz',
        icon: 'mdi-gas-burner',
      },
      {
        href: '/gaz-propane/mixte#encastre',
        name: 'Encastré au gaz',
        icon: 'mdi-fireplace',
      },
      {
        href: '/gaz-propane/mixte#cuisiniere',
        name: 'Cuisinières au gaz',
        icon: 'mdi-stove',
      },
      {
        href: '/gaz-propane/chauffage-garage',
        name: 'Chauffage de garage au gaz',
        icon: 'mdi-garage',
      },
      {
        href: '/gaz-propane/location',
        name: 'Location de réservoir de gaz propane',
        icon: 'mdi-calendar-clock',
      },
      {
        href: '/gaz-propane/livraison',
        name: 'Livraison de propane',
        icon: 'mdi-truck-delivery',
      },
      {
        href: '/gaz-propane/remplissage',
        name: 'Points de remplissage',
        icon: 'mdi-basket-fill',
      },
    ];
</script>

<style lang="scss" scoped>
.topMenu{
    width: 100%;
    margin: 0;
    background-color: #FAFAFA;
    i::before{
        color:black;
        font-size: 5rem;
    }

    a{
      text-decoration: none;
    }

    .topTitle{
        font-size:1.5rem;
    }

}
.menu{

  &:hover .topTitle{
    color:#134B8E;
  }

  &:hover i::before {
      color:#134B8E;
      font-size: 6rem;
    }
}

.router-link-exact-active, .v-list-item--active {

  i::before ,.topTitle{
    color:#50B848;
  }
}

</style>
