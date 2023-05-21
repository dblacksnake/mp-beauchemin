// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      themes: {
        light: {
          primary: '#134B8E', // #E53935
          secondary: '#50B848' // #FFCDD2
          // accent: colors.indigo.base, // #3F51B5
        }
      }
    }
  }
)
