import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aquamarine: {
          lighter: '#9EFFD7',
          light: '#66FFB3',
          DEFAULT: '#00FF95',
          dark: '#00D68C',
          darker: '#00633A',
        },
        jade: {
          lighter: '#92E3CA',
          light: '#4AC9A1',
          DEFAULT: '#00AB74',
          dark: '#017852',
          darker: '#013826',
        },
        persian: {
          lighter: '#75ECDA',
          light: '#36CBB5',
          DEFAULT: '#02A38C',
          dark: '#028A7A',
          darker: '#00342C',
        },
        moonstone: {
          lighter: '#82DAE0',
          light: '#3DBEC7',
          DEFAULT: '#00B5C2',
          dark: '#008089',
          darker: '#003236',
        },
        oxford: {
          lighter: '#729ED7',
          light: '#1D477D',
          DEFAULT: '#152A46',
          dark: '#0A121D',
          darker: '#040A11',
        },
      },
    },
  },
  plugins: [],
}

export default config
