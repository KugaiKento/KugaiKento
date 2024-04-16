/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern' : "url('img/nikita-kachanovsky-OVbeSXRk_9E-unsplash.jpg')",
        'hero-pattern2' : "url('img/0_3.jpg')",
      }
    },
  },
  plugins: [],
}

