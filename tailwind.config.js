module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Update your content paths as needed
  theme: {
    extend: {
      animation:{
        'bounce-few' : 'bounce 0.5s ease-in-out 3'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
