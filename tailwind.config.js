/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FF6584',
        accent: '#43E97B',
        dark: '#1a1a2e',
        darker: '#16213e',
        card: '#0f3460',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        booktheme: {
          primary: '#6C63FF',
          secondary: '#FF6584',
          accent: '#43E97B',
          neutral: '#1a1a2e',
          'base-100': '#0f0f1a',
          'base-200': '#16213e',
          'base-300': '#0f3460',
          info: '#38bdf8',
          success: '#43E97B',
          warning: '#f59e0b',
          error: '#FF6584',
        },
      },
    ],
  },
};
