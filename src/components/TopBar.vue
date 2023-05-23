<template>
  <div class="appBar">
    <v-navigation-drawer v-model="drawer" location="right" :disable-resize-watcher="true">
<!--     
        <v-list>
          <v-list-item v-for="btn in barButtons" :key="btn.name" link>
            <router-link :to="btn.href"  v-if="btn.type === 'btn'">
              <VIcon color="black">{{ btn.icon }}</VIcon>
              {{ btn.name }}
            </router-link>
          </v-list-item>
        </v-list>
        <template v-slot:activator="{ props }">
                  <router-link :to="btn.href" class="dropdownList" v-bind="props">
                    {{ btn.name }}</router-link
                  >
                </template>
                <v-list>
                  <v-list-item v-for="child in btn.children" :key="child.name" link>
                    <router-link :to="child.href">
                      <VIcon color="black">{{ child.icon }}</VIcon>
                      {{ child.name }}
                    </router-link>
                  </v-list-item>
                </v-list> -->
                <v-list>
          <v-list-item v-for="btn in barButtons" :key="btn.name" link>
            <router-link :to="btn.href" v-if="btn.type === 'btn'">
              {{ btn.name }}
            </router-link>
            <span v-else @mouseover="hover = true" @mouseleave="hover = false">
              <v-menu open-on-hover transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                  <router-link :to="btn.href" class="dropdownList" v-bind="props">
                    {{ btn.name }}</router-link
                  >
                </template>
                <v-list>
                  <v-list-item v-for="child in btn.children" :key="child.name" link>
                    <router-link :to="child.href">
                      <VIcon color="black">{{ child.icon }}</VIcon>
                      {{ child.name }}
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" dark density="prominent">
      <router-link to="/" class="d-flex align-center logo">
        <img
          class="logoBeauchemin "
          src="../assets/LogoBeauchemin.png"
          alt="Beauchemin"
        />
        <!-- <img class="logo65" src="../assets/NouveauLogo65ans.jpg" alt="Beauchemin" /> -->
      </router-link>

      <v-spacer></v-spacer>
      <!-- Regular Top Button -------------------------------------------------------------->
      <nav class="hidden-md-and-down" id="nav">
        <ul>
          <li v-for="btn in barButtons" :key="btn.name">
            <router-link :to="btn.href" v-if="btn.type === 'btn'">
              {{ btn.name }}
            </router-link>
            <span v-else @mouseover="hover = true" @mouseleave="hover = false">
              <v-menu open-on-hover transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                  <router-link :to="btn.href" class="dropdownList" v-bind="props">
                    {{ btn.name }}</router-link
                  >
                </template>
                <v-list>
                  <v-list-item v-for="child in btn.children" :key="child.name" link>
                    <router-link :to="child.href">
                      <VIcon color="black">{{ child.icon }}</VIcon>
                      {{ child.name }}
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </li>
        </ul>
      </nav>
      <!-- Small Screen Menu ------------------------------------------------------------->
      <!-- <v-menu class="hidden-lg-and-up">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon class="hidden-lg-and-up" v-bind="on" color="black">
          </v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item v-for="child in barButtons" :key="child.name" link>
            <router-link :to="child.href">
              <VIcon color="black">{{ child.icon }}</VIcon>
              {{ child.name }}
            </router-link>
          </v-list-item>
        </v-list> -->
        <!-- <v-list>
          <v-list-item v-for="(btn, index) in barButtons" :key="index">
            <router-link :to="btn.href">
              <VIcon color="black">{{ btn.icon }}</VIcon>
              {{ btn.name }}
            </router-link>
            <v-list-item-title v-text="btn.name"></v-list-item-title>
          </v-list-item>
        </v-list> -->
      <!-- </v-menu> -->

      <v-app-bar-nav-icon  class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>



    </v-app-bar>
    <div class="under">
      <H2 class="hidden-sm-and-down">LA PASSION QUI NOUS ALLUME</H2>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <h2 style="color: #134b8e !important">514-990-1901</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const hover = ref(false)
const drawer = ref(false);
const barButtons = [
  {
    name: 'Accueil',
    href: '/',
    type: 'btn',
    index: 0
  },
  {
    name: 'À propos',
    href: '/a-propos',
    type: 'btn',
    index: 1
  },
  {
    name: 'Gaz propane',
    href: '/gaz-propane',
    icon: 'mdi-chevron-down',
    type: 'subMenu',
    index: 2,
    children: [
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
        name: 'Installation',
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
      },
      // {
      //   href: '/gaz-propane/remplissage',
      //   name: 'Points de remplissage',
      //   icon: 'mdi-basket-fill'
      // }
    ]
  },
  {
    name: 'Mazout',
    href: '/mazout',
    type: 'btn',
    index: 3
  },
  {
    name: 'Lubrifiants & Carburants',
    href: '/lubri-carbu',
    type: 'btn',
    index: 4
  },
  {
    name: 'Blogue',
    href: '/blogue',
    type: 'btn',
    index: 5
  },
  {
    name: 'Contact',
    href: '/contact',
    type: 'btn',
    index: 6
  }
]
</script>

<style lang="scss" scoped>
.appBar {
  position: absolute;
  height: 135px;
  width: 100%;

  .under {
    background-color: #ededed;
    height: 3rem;
    width: 100%;

    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 1.5rem;

    position: relative;
    top: 90%;

    display: flex;
  }
}

.logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  img {
    height: 50px;
  }

  .logo65 {
    margin-left: 2rem;
  }
}

// .btnContainer{
//   padding-top: 2rem;
//   margin: 0px;
// }
// .v-application a,
// .v-btn{
//   color:black ;
//   text-decoration: none;
//   margin:2rem;
// }

// .v-application a:hover,
// .v-btn:hover{
//   color:#134B8E ;
//   border-bottom: 5px #50B848 solid;
// }

// #nav{
//   display: flex;
//   align-items: center;
// }
.router-link-exact-active,
.v-list-item--active {
  color: #50b848 !important;
  font-size: 30px;
}

#nav {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

#nav > ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#nav > ul > li > a {
  display: block;
  height: auto;
  padding: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    color: #134b8e;
    border-bottom: 5px #50b848 solid;
  }
}

.dropdownList :hover {
  color: #134b8e;
  border-bottom: 5px #50b848 solid;
}
#nav > ul > li > span > a {
  position: relative;
  display: block;
  height: auto;
  padding: 20px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #134b8e;
  }
}

#nav > ul > li > span > a:after {
  content: '▼';
  display: inline-block;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 0;
  list-style-type: none;
  background-color: white;
}

.dropdown li {
  width: 250px;
  border-bottom: 1px solid black;
}

.dropdown li a {
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #134b8e;
  }
}

.hover {
  display: block;
}
</style>
