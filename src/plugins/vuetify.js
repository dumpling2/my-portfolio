import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        colors: {
          background: '#E0E0E0',
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
