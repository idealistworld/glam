/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('../src/images/bg.svg')",
        'effect': "url('../src/images/effect.svg')"
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.6)",
          "0 0px 65px rgba(255, 255,255, 0.4)"
        ]
      },
      animation: {
        text: 'text 3.5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left top', // Change to 'left top' for the starting position
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom', // Change to 'right bottom' for the diagonal position
          },
        },
      },
    },
  },
  plugins: [],
};
