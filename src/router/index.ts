import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LubriCarbuMixteVue from '../views/LubriCarbuMixte.vue'
import BlogueViewVue from '@/views/BlogueView.vue'
import ContactView from '@/views/ContactView.vue'
import GazPropaneView from '@/views/GazPropaneView.vue'
import GazPropane from '@/components/nested/GazPropane.vue'
import FoyerGaz from '@/components/nested/FoyerGaz.vue'
import ChauffeEau from '@/components/nested/ChauffageEau.vue'
import PECGazMixtes from '@/components/nested/PECGazMixtes.vue'
import ChauffageGarage from '@/components/nested/ChauffageGarage.vue'
import Location from '@/components/nested/LocationGaz.vue'
import Livraison from '@/components/nested/LivraisonPropane.vue'
import Remplissage from '@/components/nested/PointRemplissage.vue'
import AvantagesVue from '@/components/blogue/Avantages.vue'
import ConseilsVue from '@/components/blogue/Conseils.vue'
import ConversionVue from '@/components/blogue/Conversion.vue'
import EntretienVue from '@/components/blogue/Entretien.vue'
import GuideFoyerVue from '@/components/blogue/GuideFoyer.vue'
import MazoutVue from '@/components/blogue/Mazout.vue'
import PlafonnementVue from '@/components/blogue/Plafonnement.vue'
import UtilisationsVue from '@/components/blogue/Utilisations.vue'
import ReglementFoyerVue from '@/components/blogue/ReglementFoyer.vue'

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
          component: GazPropane
        },
        {
          path: 'foyer-gaz',
          component: FoyerGaz
        },
        {
          path: 'chauffe-eau',
          component: ChauffeEau
        },
        {
          path: 'installation',
          component: PECGazMixtes
        },
        {
          path: 'chauffage-garage',
          component: ChauffageGarage
        },
        {
          path: 'location',
          component: Location
        },
        {
          path: 'livraison',
          component: Livraison
        },
        {
          path: 'remplissage',
          component: Remplissage
        }
      ]
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
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {
          path: '',
          component: BlogueViewVue
        },
        {
          path: 'avantages',
          component: AvantagesVue
        },
        {
          path: 'conseils',
          component: ConseilsVue
        },
        {
          path: 'conversion',
          component: ConversionVue
        },
        {
          path: 'entretien',
          component: EntretienVue
        },
        {
          path: 'guide-foyer',
          component: GuideFoyerVue
        },
        {
          path: 'mazout',
          component: MazoutVue
        },
        {
          path: 'plafonnement',
          component: PlafonnementVue
        },
        {
          path: 'reglement',
          component: ReglementFoyerVue
        },
        {
          path: 'utilisations',
          component: UtilisationsVue
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
