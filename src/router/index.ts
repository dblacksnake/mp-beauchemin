import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LubriCarbuMixteVue from '../views/LubriCarbuMixte.vue'
import BlogueViewVue from '@/views/BlogueView.vue'
import ContactView from '@/views/ContactView.vue'
import GazPropaneView from '@/views/GazPropaneView.vue';
import GazPropane from '@/components/nested/GazPropane.vue';
import FoyerGaz from '@/components/nested/FoyerGaz.vue';
import ChauffeEau from '@/components/nested/ChauffageEau.vue';
import PECGazMixtes from '@/components/nested/PECGazMixtes.vue';
import ChauffageGarage from '@/components/nested/ChauffageGarage.vue';
import Location from '@/components/nested/LocationGaz.vue';
import Livraison from '@/components/nested/LivraisonPropane.vue';
import Remplissage from '@/components/nested/PointRemplissage.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a-propos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/gaz-propane',
      name: 'gaz-propane',
      component: GazPropaneView,
      children: [
        {
          path: '',
          component: GazPropane,
        },
        {
          path: 'foyer-gaz',
          component: FoyerGaz,
        },
        {
          path: 'chauffe-eau',
          component: ChauffeEau,
        },
        {
          path: 'mixte',
          component: PECGazMixtes,
        },
        // {
        //   path: 'encastre-gaz',
        //   component: EncastreGaz,
        // },
        // {
        //   path: 'cuisiniere-gaz',
        //   component: CuisiniereGaz,
        // },
        {
          path: 'chauffage-garage',
          component: ChauffageGarage,
        },
        {
          path: 'location',
          component: Location,
        },
        {
          path: 'livraison',
          component: Livraison,
        },
        {
          path: 'remplissage',
          component: Remplissage,
        },
      ],
    },
    {
      path: '/mazout',
      name: 'mazout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MazoutView.vue')
    },
    {
      path: '/lubri-carbu',
      name: 'lubriCarbu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LubriCarbuMixteVue
    },
    {
      path: '/blogue',
      name: 'blogue',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlogueViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactView
    }
  ]
})

export default router
