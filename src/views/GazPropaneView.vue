<template>
  <carousel-view :contents="items"></carousel-view>

  <v-container grid-list-xs>
    <VRow class="topMenu mt-4">
      <VCol class="menu hidden-sm-and-down" v-for="menu in topMenu" :key="menu.name">
        <VRow>
          <router-link :to="menu.href">
            <VRow>
              <VCol cols="12">
                <VIcon>{{ menu.icon }}</VIcon>
              </VCol>
              <VCol>
                <div class="topTitle">
                  {{ menu.name }}
                </div>
              </VCol>
            </VRow>
          </router-link>
        </VRow>
      </VCol>
      <v-list class="smMenu ml-2 hidden-md-and-up">
        <v-list-item v-for="(item, i) in topMenu" :key="i" :value="item" @click="to(item.href)">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <router-link :to="item.href"> {{ item.name }}</router-link>
          <!-- <v-list-item-title>{{item.name}}</v-list-item-title> -->
        </v-list-item>
      </v-list>
    </VRow>
    <router-view class="mt-10"></router-view>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CarouselView from '@/components/CarouselView.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const route = useRouter()
const topMenu = [
  {
    href: '/gaz-propane',
    name: 'Gaz propane',
    icon: 'mdi-propane-tank'
  },
  {
    href: '/gaz-propane/foyer-gaz',
    name: 'Foyer au gaz',
    icon: 'mdi-fireplace'
  },
  {
    href: '/gaz-propane/chauffe-eau',
    name: 'Chauffe-eau au gaz',
    icon: 'mdi-water-boiler'
  },
  {
    href: '/gaz-propane/installation',
    name: 'installation',
    icon: 'mdi-fire'
  },
  {
    href: '/gaz-propane/chauffage-garage',
    name: 'Chauffage de garage au gaz',
    icon: 'mdi-garage'
  },
  {
    href: '/gaz-propane/location',
    name: 'Location de réservoir de gaz propane',
    icon: 'mdi-calendar-clock'
  },
  {
    href: '/gaz-propane/livraison',
    name: 'Livraison de propane',
    icon: 'mdi-truck-delivery'
  }
]

const items = computed(() => store.state.propaneCarousel)

const to = (href: string) => route.push(href)
onMounted(() => {
  store.dispatch('GET_PagePhotos', { page: 'propane', db: 'propaneCarousel' })
})
</script>

<style lang="scss" scoped>
.smMenu {
  background-color: #fafafa;
  // margin-left:50;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.topMenu {
  width: 100%;
  min-height: 15rem;
  margin: 0;
  background-color: #fafafa;

  align-content: center;
  i::before {
    color: #134b8e;
    font-size: 3rem;
  }

  a {
    text-decoration: none;
  }

  .topTitle {
    font-size: 1.45rem;
  }
}
.menu {
  &:hover .topTitle {
    font-size: 1.55rem;
  }

  &:hover i::before {
    color: #134b8e;
    font-size: 4rem;
  }
}

.router-link-exact-active,
.v-list-item--active {
  i::before,
  .topTitle {
    color: #50b848;
  }
}
</style>
