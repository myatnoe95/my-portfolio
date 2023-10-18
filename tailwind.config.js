/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color':'#F4DEE6',  
        'font-highlight': '#FF0000',
        's-color': '#161313',
        'btn-color': '#f7a1df',
        'card-color': '#F3ECEE',
        'section-color': '#EEE6E8',
        'testing-color': '#CBD2F1',
        'circle-color': '#557C5C',
        'skill-card-color': '#EDCDD8',
        'edu-card-color': '#C9D1F3',
      },
      fontFamily: {
        'sourceCodePro': ['Source Code Pro', 'monospace'],
        'sourceSans': ['Source Sans 3', 'sans-serif'],
        'ptSans': ['PT Sans', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
      },
      animation: {
        'progress-animation': 'progress-animation 2s linear forwards',
        'progress-animation50': 'progress-animation 2s linear forwards',
        'progress-animation65': 'progress-animation 2s linear forwards',
        'progress-animation80': 'progress-animation 2s linear forwards',
      },
      keyframes: {
        'progress-animation50': {
          to: {
            strokeDashoffset: '-300',
          },
        },
        'progress-animation65': {
          to: {
            strokeDashoffset: '-360',
          },
        },
        'progress-animation': {
          to: {
            strokeDashoffset: '-400',
          },
        },
        'progress-animation80': {
          to: {
            strokeDashoffset: '-440',
          },
        },
      },
    },
  },
  plugins: [],
}
