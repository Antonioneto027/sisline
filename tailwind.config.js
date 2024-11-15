import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|code|input|kbd|link|listbox|navbar|snippet|toggle|ripple|spinner|divider|popover).js',
    './app/modules/**/*.{js,ts,jsx,tsx,mdx}', // Adicionando módulo adicional
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "text-gradient": "text 5s linear infinite",

        'slideDown1': 'slideDown 2s ease-out forwards',
        'slideDown2': 'slideDown2 2s ease-out forwards',
        'slideDown3': 'slideDown3 2s ease-out forwards',    
        'slideDown4': 'slideDown3 2s ease-out forwards',      
        
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-25%)',  // Começando mais para cima
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',  // Chega na posição original
            opacity: '1',
          },
        },
        slideDown2: {
          '0%': {
            transform: 'translateY(-40%)',  // Começa ainda mais acima
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',  // Chega na posição original
            opacity: '1',
          },
        },
        slideDown3: {
          '0%': {
            transform: 'translateY(-35%)',  // Começa mais perto da posição final
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',  // Chega na posição original
            opacity: '1',
          },
          slideDown4: {
            '0%': {
              transform: 'translateY(-45%)',  // Começa ainda mais acima
              opacity: '0',
            },
            '100%': {
              transform: 'translateY(0)',  // Chega na posição original
              opacity: '1',
            },
          },
        },
      },
    },
  },
  darkMode: "class",  // Habilitando modo escuro
  plugins: [
    nextui({
      defaultTheme: "light", // Configurando o tema padrão do NextUI
    }),
  ],
};
