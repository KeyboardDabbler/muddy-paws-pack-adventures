import { defineConfig } from 'windicss/helpers'
// themes
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './pages/**/*.vue',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      colors: {
        backg: '#35AC90',
        forg: '#35AC90',
        action: '#62466B',
        stroke: '#73D4BD',
        focus: '#2B8C76',
        yellow: '#f4cf44',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
})