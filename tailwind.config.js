import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'pmd-blue-50': '#eef1fa',
        'pmd-blue-100': '#d9e4ff',
        'pmd-blue-300': '#666a83',
        'pmd-blue-600': '#262a57',
        'pmd-blue-800': '#1e2140',
        'pmd-blue-900': '#151932',
        'pmd-red-600': '#f38a8b',
        'pmd-red-700': '#f87070',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        wanella: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#dae3ee',
              200: '#b4c6de',
              300: '#8faacd',
              400: '#698dbd',
              500: '#4471ac',
              600: '#365a8a',
              700: '#294467',
              800: '#1b2d45',
              900: '#0e1722',
            },
            secondary: {
              100: '#d4dadf',
              200: '#aab6bf',
              300: '#7f91a0',
              400: '#556d80',
              500: '#2a4860',
              600: '#223a4d',
              700: '#192b3a',
              800: '#111d26',
              900: '#080e13',
            },
          },
        },
        abyss: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#ecd9da',
              200: '#d9b3b5',
              300: '#c58c90',
              400: '#b2666b',
              500: '#9f4046',
              600: '#7f3338',
              700: '#5f262a',
              800: '#401a1c',
              900: '#200d0e',
            },
            secondary: {
              100: '#feede0',
              200: '#fcdbc1',
              300: '#fbc8a2',
              400: '#f9b683',
              500: '#f8a464',
              600: '#c68350',
              700: '#95623c',
              800: '#634228',
              900: '#322114',
            },
          },
        },
        noturn: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#cccccc',
              200: '#999999',
              300: '#666666',
              400: '#333333',
              500: '#000000',
              600: '#000000',
              700: '#000000',
              800: '#000000',
              900: '#000000',
            },
            secondary: {
              100: '#d0e0e6',
              200: '#a1c1cc',
              300: '#72a3b3',
              400: '#438499',
              500: '#146580',
              600: '#105166',
              700: '#0c3d4d',
              800: '#082833',
              900: '#04141a',
            },
          },
        },
        fortune: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#cdd0d3',
              200: '#9aa1a6',
              300: '#68737a',
              400: '#35444d',
              500: '#031521',
              600: '#02111a',
              700: '#020d14',
              800: '#01080d',
              900: '#010407',
            },
            secondary: {
              100: '#d7cfdd',
              200: '#af9fbb',
              300: '#886f99',
              400: '#603f77',
              500: '#380f55',
              600: '#2d0c44',
              700: '#220933',
              800: '#160622',
              900: '#0b0311',
            },
          },
        },
        ancient: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#dcd7d6',
              200: '#b9afad',
              300: '#958884',
              400: '#72605b',
              500: '#4f3832',
              600: '#3f2d28',
              700: '#2f221e',
              800: '#201614',
              900: '#100b0a',
            },
            secondary: {
              100: '#fbd7e7',
              200: '#f7afd0',
              300: '#f388b8',
              400: '#ef60a1',
              500: '#eb3889',
              600: '#bc2d6e',
              700: '#8d2252',
              800: '#5e1637',
              900: '#2f0b1b',
            },
          },
        },
        castily: {
          colors: {
            background: '#191a19',
            foreground: '#f1f2f3',
            primary: {
              100: '#d7dbe0',
              200: '#aeb7c2',
              300: '#8694a3',
              400: '#5d7085',
              500: '#354c66',
              600: '#2a3d52',
              700: '#202e3d',
              800: '#151e29',
              900: '#0b0f14',
            },
            secondary: {
              100: '#f6eedb',
              200: '#eedcb7',
              300: '#e5cb94',
              400: '#ddb970',
              500: '#d4a84c',
              600: '#aa863d',
              700: '#7f652e',
              800: '#55431e',
              900: '#2a220f',
            },
          },
        },
        city: {
          colors: {
            background: '#f1f2f3',
            foreground: '#191a19',
            primary: {
              100: '#e0f5f6',
              200: '#c2ebee',
              300: '#a3e1e5',
              400: '#85d7dd',
              500: '#66cdd4',
              600: '#52a4aa',
              700: '#3d7b7f',
              800: '#295255',
              900: '#14292a',
            },
            secondary: {
              100: '#fefef4',
              200: '#fefce8',
              300: '#fdfbdd',
              400: '#fdf9d1',
              500: '#fcf8c6',
              600: '#cac69e',
              700: '#979577',
              800: '#65634f',
              900: '#323228',
            },
          },
        },
        lightmontain: {
          colors: {
            background: '#f1f2f3',
            foreground: '#191a19',
            primary: {
              100: '#d8dee5',
              200: '#b2becb',
              300: '#8b9db2',
              400: '#657d98',
              500: '#3e5c7e',
              600: '#324a65',
              700: '#25374c',
              800: '#192532',
              900: '#0c1219',
            },
            secondary: {
              100: '#d4dbeb',
              200: '#a9b7d7',
              300: '#7d94c4',
              400: '#5270b0',
              500: '#274c9c',
              600: '#1f3d7d',
              700: '#172e5e',
              800: '#101e3e',
              900: '#080f1f',
            },
          },
        },
        library: {
          colors: {
            background: '#f1f2f3',
            foreground: '#191a19',
            primary: {
              100: '#d0d6d9',
              200: '#a0adb3',
              300: '#71848c',
              400: '#415b66',
              500: '#123240',
              600: '#0e2833',
              700: '#0b1e26',
              800: '#07141a',
              900: '#040a0d',
            },
            secondary: {
              100: '#ffffff',
              200: '#ffffff',
              300: '#ffffff',
              400: '#ffffff',
              500: '#ffffff',
              600: '#cccccc',
              700: '#999999',
              800: '#666666',
              900: '#333333',
            },
          },
        },
      },
    }),
  ],
};
